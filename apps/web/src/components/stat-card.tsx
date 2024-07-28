import { ReactElement } from "react";
import { InfoIcon, type LucideIcon } from "lucide-react";

import { cn } from "~/lib/utils";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type StatCardProps = {
  label: string;
  caption?: string;
  Icon?: LucideIcon;
  className?: string;
  children?: ReactElement;
};

export const StatCard = ({
  label,
  caption,
  className,
  Icon = InfoIcon,
  children,
}: StatCardProps) => {
  return (
    <Card className={cn("grid grid-cols-1 grid-rows-1", className)}>
      <CardHeader className="row-span-1 flex w-full flex-col items-start justify-start">
        <CardTitle className="flex w-full flex-1 items-start justify-between">
          {label}
          <Icon
            style={{ marginTop: "0 !important" }}
            className="m-0 text-gray-500 dark:text-gray-500"
          />
        </CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-500">
          {caption}
        </CardDescription>
      </CardHeader>
      {children}
    </Card>
  );
};
