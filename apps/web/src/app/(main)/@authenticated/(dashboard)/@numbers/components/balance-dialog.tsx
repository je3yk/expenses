"use client";

import { RouterInputs } from "@packages/api";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, ButtonProps } from "~/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog";
import { trpc } from "~/trpc/client";

type Expenses = RouterInputs["expenses"]["addExpense"];

type BalanceDialogProps = {
  label: string;
  type: Expenses["type"];
  children?: React.ReactNode;
};

type BalanceDialogTriggerProps = BalanceDialogProps & {
  onClick?: ButtonProps["onClick"];
  className?: string;
  children?: React.ReactNode;
};

export const BalanceDialogTrigger = ({
  label,
  onClick,
  children,
}: BalanceDialogTriggerProps) => {
  return (
    <Button onClick={onClick} size="icon" colorVariant="outline">
      <PlusIcon className="h-5 w-5" aria-label={label} />
      {children}
    </Button>
  );
};

export const BalanceDialog = ({
  label,
  type,
  children,
}: BalanceDialogProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { handleSubmit, register, reset } = useForm<Expenses>({
    defaultValues: {
      type,
      name: "",
      date: new Date().toISOString().split("T")[0],
      category: "",
      amount: 0,
    },
  });

  const mutation = trpc.expenses.addExpense.useMutation();

  const onSubmit = async (values: Expenses) => {
    const data = await mutation.mutateAsync({
      ...values,
      amount: Number(values.amount),
    });
    console.log(data);
    setDialogOpen(false);
    reset();
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
      <DialogTrigger asChild>
        {children ?? <BalanceDialogTrigger label={label} type={type} />}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{label}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder={`${type} name`}
                className="rounded-lg border-2 p-2"
                {...register("name")}
              />
              <input
                type="date"
                className="rounded-lg border-2 p-2"
                placeholder="Entry date"
                defaultValue={new Date().toISOString().split("T")[0]}
                {...register("date")}
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={`${type} category`}
                  className="rounded-lg border-2 p-2"
                  {...register("category")}
                />
                <input
                  type="number"
                  placeholder={`${type} amount`}
                  className="rounded-lg border-2 p-2 text-right"
                  defaultValue={0}
                  {...register("amount")}
                />
              </div>
              <Button className="w-full">{label}</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
