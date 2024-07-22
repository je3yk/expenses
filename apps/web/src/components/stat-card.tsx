import { ReactElement } from "react";
import { InfoIcon, type LucideIcon } from "lucide-react";

import { cn } from "~/lib/utils";
import { Typography } from "./typography";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const NumberCardContent = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  return (
    <Typography variant="h1" className={className}>
      {value}
    </Typography>
  );
};

const currencyFormat = new Intl.NumberFormat("pl", {
  currency: "pln",
  style: "currency",
});

const CurencyCardContent = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const textColorClass =
    value === 0
      ? ""
      : value < 0
        ? "text-red-600 dark:text-red-600"
        : "text-green-600 dark:text-green-600";

  return (
    <Typography variant="h1" className={cn(textColorClass, className)}>
      {currencyFormat.format(value)}
    </Typography>
  );
};

type StatCardProps = {
  label: string;
  value: number;
  caption?: string;
  Icon?: LucideIcon;
  className?: string;
  variant?: "currency" | "number";
  children?: ReactElement;
};

export const StatCard = ({
  value,
  label,
  caption,
  className,
  Icon = InfoIcon,
  variant = "number",
  children,
}: StatCardProps) => {
  return (
    <Card className={cn("grid grid-cols-1 grid-rows-5", className)}>
      <CardHeader className="row-span-1 flex w-full flex-row items-center justify-between px-6 py-0">
        <CardTitle className="flex-1">{label}</CardTitle>
        <Icon
          style={{ marginTop: "0 !important" }}
          className="m-0 text-gray-500 dark:text-gray-500"
        />
      </CardHeader>
      <CardContent className="row-span-1">
        <Typography
          variant="body1"
          className="text-gray-500 dark:text-gray-500"
        >
          {caption}
        </Typography>
      </CardContent>
      <CardContent className="row-span-2 w-full self-end justify-self-start pb-4 text-5xl">
        {variant === "currency" ? (
          <CurencyCardContent
            value={value}
            className="shrink-2 w-full text-4xl"
          />
        ) : (
          <NumberCardContent value={value} className="text-4xl" />
        )}
      </CardContent>
      <CardFooter className="row-span-1 pb-4">{children}</CardFooter>
    </Card>
  );
};
