import { cva, VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const typographyVariansts = cva("text-black dark:text-white", {
  variants: {
    variant: {
      h1: "text-3xl font-bold", /* 30px, 700 */
      h2: "text-2xl font-bold", /* 24px, 700 */
      h3: "text-xl font-bold", /* 20px, 700 */
      h4: "text-lg font-bold", /* 18px, 700 */
      h5: "text-base font-bold", /* 16px, 700 */
      h6: "text-sm font-bold", /* 14px, 700 */
      body1: "text-base font-normal", /* 16px, 400 */
      body2: "text-sm font-normal", /* 14px, 400 */
      caption: "text-xs font-normal", /* 12px, 400 */
      overline: "text-xs font-bold", /* 12px, 700 */
      button: "text-sm font-bold", /* 14px, 700 */
    },
  },
});

export type TypographyVariant = VariantProps<
  typeof typographyVariansts
>["variant"];

type TypographyProps = {
  variant?: TypographyVariant;
  className?: string;
  children: React.ReactNode;
};

export const Typography = ({
  variant = "body1",
  className,
  children,
}: TypographyProps) => {
  const typographyClass = cn(typographyVariansts({ variant }), className);

  switch (variant) {
    case "h1":
      return <h1 className={typographyClass}>{children}</h1>;
    case "h2":
      return <h2 className={typographyClass}>{children}</h2>;
    case "h3":
      return <h3 className={typographyClass}>{children}</h3>;
    case "h4":
      return <h4 className={typographyClass}>{children}</h4>;
    case "h5":
      return <h5 className={typographyClass}>{children}</h5>;
    case "h6":
      return <h6 className={typographyClass}>{children}</h6>;
    case "body1":
      return <p className={typographyClass}>{children}</p>;
    case "body2":
      return <p className={typographyClass}>{children}</p>;
    case "caption":
      return <p className={typographyClass}>{children}</p>;
    case "overline":
      return <p className={typographyClass}>{children}</p>;
    case "button":
      return <button className={typographyClass}>{children}</button>;
    default:
      return <p className={typographyClass}>{children}</p>;
  }
};
