import { cva, VariantProps } from "class-variance-authority";

const typographyVariansts = cva("text-black dark:text-white", {
  variants: {
    variant: {
      h1: "text-3xl font-bold",
      h2: "text-2xl font-bold",
      h3: "text-xl font-bold",
      h4: "text-lg font-bold",
      h5: "text-base font-bold",
      h6: "text-sm font-bold",
      body1: "text-base font-normal",
      body2: "text-sm font-normal",
      caption: "text-xs font-normal",
      overline: "text-xs font-bold",
      button: "text-sm font-bold",
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
  const typoegraphyClass = `${typographyVariansts({ variant })} ${className}`;

  switch (variant) {
    case "h1":
      return <h1 className={typoegraphyClass}>{children}</h1>;
    case "h2":
      return <h2 className={typoegraphyClass}>{children}</h2>;
    case "h3":
      return <h3 className={typoegraphyClass}>{children}</h3>;
    case "h4":
      return <h4 className={typoegraphyClass}>{children}</h4>;
    case "h5":
      return <h5 className={typoegraphyClass}>{children}</h5>;
    case "h6":
      return <h6 className={typoegraphyClass}>{children}</h6>;
    case "body1":
      return <p className={typoegraphyClass}>{children}</p>;
    case "body2":
      return <p className={typoegraphyClass}>{children}</p>;
    case "caption":
      return <p className={typoegraphyClass}>{children}</p>;
    case "overline":
      return <p className={typoegraphyClass}>{children}</p>;
    case "button":
      return <button className={typoegraphyClass}>{children}</button>;
    default:
      return <p className={typoegraphyClass}>{children}</p>;
  }
};
