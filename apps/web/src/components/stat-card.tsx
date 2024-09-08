import { ReactElement } from "react";
import { InfoIcon, type LucideIcon } from "lucide-react";

import { cn } from "~/lib/utils";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type StatCardHeaderProps = {
  children?: ReactElement | ReactElement[];
};

export const StatCardHeader = ({ children }: StatCardHeaderProps) => {
  return (
    <CardHeader className="flex w-full flex-col items-start justify-start">
      {children}
    </CardHeader>
  );
};

export const StatCardTitleRow = ({
  children,
  className,
}: {
  children?: ReactElement | ReactElement[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-between gap-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const StatCardTitle = ({
  children,
}: {
  children: string | ReactElement;
}) => {
  return <CardTitle>{children}</CardTitle>;
};

export const StatCardDescription = ({
  children,
}: {
  children?: string | ReactElement;
}) => {
  return (
    <CardDescription className="flex items-center justify-start gap-2 text-foreground/80">
      {children}
    </CardDescription>
  );
};

export const StatCardIcon = ({
  Icon = InfoIcon,
  className,
}: {
  Icon?: LucideIcon;
  className?: string;
}) => {
  return <Icon className={cn("m-0 h-7 w-7", className)} />;
};

type StatCardProps = {
  className?: string;
  children?: ReactElement | ReactElement[];
};

export const StatCard = ({ className, children }: StatCardProps) => {
  return (
    <Card className={cn("grid grid-cols-1 grid-rows-1", className)}>
      {children}
    </Card>
  );
};
