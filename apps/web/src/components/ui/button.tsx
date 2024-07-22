import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-primary-foreground shadow hover:bg-primary/90",
        destructive: "text-destructive-foreground shadow-sm",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "text-secondary-foreground shadow-sm",
        ghost: "",
        link: "underline-offset-4 hover:underline",
        tertiary: "py-0 px-2 hover:border hover:border-tertiary ",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      colorVariant: {
        default: "bg-primary hover:bg-primary/90",
        destructive: "bg-destructive hover:bg-destructive/90",
        outline: "hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary hover:bg-secondary/90",
        contrast: "bg-contrast hover:bg-contrast/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        tertiary:
          "bg-tertiary hover:bg-tertiary/90 text-tertiary-foreground hover:text-accent-foreground border-tertiary",
        link: "text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      colorVariant: "default",
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
