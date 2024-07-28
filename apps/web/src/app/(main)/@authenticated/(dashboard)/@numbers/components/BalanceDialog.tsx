"use client";

import { PlusIcon } from "lucide-react";

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
      className="flex rounded-[50%] p-2 px-1"
      onClick={onClick}
    >
      <PlusIcon className="h-5 w-5" />
      {/* <Typography
        variant="caption"
        className="hidden group-hover:block group-hover:font-bold"
      >
        {label}
      </Typography> */}
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
