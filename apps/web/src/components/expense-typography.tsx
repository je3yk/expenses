import { cva, VariantProps } from "class-variance-authority";
import { Coins, PiggyBank, TrendingDown, TrendingUp } from "lucide-react";

import { cn } from "~/lib/utils";
import { Typography, TypographyProps } from "./typography";

const currencyFormat = new Intl.NumberFormat("pl", {
  currency: "pln",
  style: "currency",
});

export type ExpenseTypographyProps = {
  value: number;
  type?: "income" | "outcome" | "saving" | "balance";
} & Omit<TypographyProps, "children">;

const expenseTypeIconMapping = {
  income: { Icon: TrendingUp, className: "text-green-600" },
  outcome: { Icon: TrendingDown, className: "text-red-600" },
  saving: { Icon: PiggyBank, className: "text-yellow-600" },
  balance: { Icon: Coins, className: "text-primary" },
};

export const ExpenseIcon = ({
  type,
  className,
}: {
  type: NonNullable<ExpenseTypographyProps["type"]>;
  className?: string;
}) => {
  const { Icon, className: iconClassName } = expenseTypeIconMapping[type];
  return <Icon className={cn(iconClassName, className)} />;
};

export const ExpenseTypography = ({
  value,
  type = "balance",
  className,
  ...typographyProps
}: ExpenseTypographyProps) => {
  return (
    <Typography {...typographyProps} className={cn("font-bold", className)}>
      {type === "outcome" && "-"}
      {currencyFormat.format(value)}
    </Typography>
  );
};
