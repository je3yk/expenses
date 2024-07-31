"use client";

import { PlusIcon } from "lucide-react";

import { Typography } from "~/components/typography";
import { Button, ButtonProps } from "~/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import { cn } from "~/lib/utils";

type BalanceDialogProps = {
  label: string;
  type: "outcome" | "income" | "savings";
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
  className,
  children,
}: BalanceDialogTriggerProps) => {
  return (
    <Button
      variant="tertiary"
      size="sm"
      className={cn("flex rounded-[50%] p-2 px-1", className)}
      onClick={onClick}
    >
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
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children ?? <BalanceDialogTrigger label={label} type={type} />}
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-4">
          <Typography variant="h2">{label}</Typography>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder={`${type} name`}
              className="rounded-lg p-2"
            />
            <input
              type="date"
              className="rounded-lg p-2"
              placeholder="Entry date"
              defaultValue={new Date().toISOString().split("T")[0]}
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder={`${type} category`}
                className="rounded-lg p-2"
              />
              <input
                type="number"
                placeholder={`${type} amount`}
                className="rounded-lg p-2 text-right"
                defaultValue={0}
              />
            </div>
          </div>
          <Button className="w-full">{label}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
