import { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./typography";

const meta: Meta<typeof Typography> = {
  title: "Typography",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Typography>;

const defaultText = "This is an example text";

export const Default: Story = {
  args: {
    children: defaultText,
    variant: "h1",
  },
};

export const Variants: Story = {
  decorators: [
    () => {
      return (
        <div className="flex flex-col items-start gap-2">
          <Typography variant="h1">H1 {defaultText}</Typography>
          <Typography variant="h2">H2 {defaultText}</Typography>
          <Typography variant="h3">H3 {defaultText}</Typography>
          <Typography variant="h4">H4 {defaultText}</Typography>
          <Typography variant="h5">H5 {defaultText}</Typography>
          <Typography variant="h6">H6 {defaultText}</Typography>
          <Typography variant="body1">Body1 {defaultText}</Typography>
          <Typography variant="body2">Body2 {defaultText}</Typography>
          <Typography variant="caption">Body3 {defaultText}</Typography>
          <Typography variant="overline">Overline {defaultText}</Typography>
          <Typography variant="button">Button {defaultText}</Typography>
        </div>
      );
    },
  ],
};
