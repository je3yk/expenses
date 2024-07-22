"use client";

import { PlusCircleIcon } from "lucide-react";

import { Typography } from "~/components/typography";
import { Button, ButtonProps } from "~/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";

type BalanceDialogProps = {
  label: string;
  type: "outcome" | "income" | "savings";
};

type BalanceDialogTriggerProps = BalanceDialogProps & {
  onClick?: ButtonProps["onClick"];
};

export const BalanceDialogTrigger = ({
  label,
  onClick,
}: BalanceDialogTriggerProps) => {
  return (
    <Button
      variant="tertiary"
      size="sm"
      className="gap-2 rounded-3xl py-0"
      onClick={onClick}
    >
      <PlusCircleIcon className="h-4 w-4" />
      <Typography
        variant="caption"
        className="text-xs font-bold text-inherit dark:text-inherit"
      >
        {label}
      </Typography>
    </Button>
  );
};

export const BalanceDialog = ({ label, type }: BalanceDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <BalanceDialogTrigger label={label} type={type} />
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-4">
          <Typography variant="h2">{label}</Typography>
          <div className="flex flex-col gap-4">
            <input
              type="date"
              className="rounded-lg p-2"
              placeholder="Entry date"
              defaultValue={new Date().toISOString().split("T")[0]}
            />
            <input
              type="text"
              placeholder={`${type} name`}
              className="rounded-lg p-2"
            />
            <input
              type="number"
              placeholder={`${type} amount`}
              className="rounded-lg p-2"
            />
          </div>
          <Button className="w-full">{label}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
