import { cva, VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";
import { Typography, TypographyProps } from "./typography";

const currencyFormat = new Intl.NumberFormat("pl", {
  currency: "pln",
  style: "currency",
});

const currencyColorVariants = cva("", {
  variants: {
    colorVariant: {
      positive: "text-green-600 dark:text-green-600",
      negative: "text-red-600 dark:text-red-600",
      neutral: "",
      savings: "text-yellow-600 dark:text-yellow-600",
    },
  },
});

type CurrencyColorVariants = VariantProps<
  typeof currencyColorVariants
>["colorVariant"];
export type CurrencyTypographyProps = {
  value: number;
  type?: CurrencyColorVariants;
} & Omit<TypographyProps, "children">;

const getTextColor = (
  value: number,
  type?: CurrencyColorVariants,
): CurrencyColorVariants => {
  if (type) {
    return type;
  }

  if (value < 0) {
    return "negative";
  } else if (value > 0) {
    return "positive";
  }

  return "neutral";
};

export const CurrencyTypography = ({
  value,
  type,
  className,
  ...typographyProps
}: CurrencyTypographyProps) => {
  const textColor = getTextColor(value, type);
  const fieldClassName = cn(
    currencyColorVariants({ colorVariant: textColor }),
    className,
  );
  return (
    <Typography {...typographyProps} className={fieldClassName}>
      {currencyFormat.format(value)}
    </Typography>
  );
};
