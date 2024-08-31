import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "border border-2 hover:border-primary",
        destructive: "text-destructive-foreground shadow-sm",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "text-secondary-foreground shadow-sm",
        ghost: "",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        xs: "p-1 text-xs",
        sm: "p-2 text-xs",
        md: "p-3",
        lg: "p-4",
        icon: "w-10 h-10",
      },
      colorVariant: {
        primary: "bg-primary text-primary-foreground active:bg-secondary",
        destructive: "bg-destructive hover:bg-destructive/90",
        outline: "hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary hover:bg-secondary/90",
        contrast: "bg-contrast hover:bg-contrast/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      colorVariant: "primary",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      colorVariant: cVariant,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
            colorVariant: cVariant ?? variant,
          }),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
