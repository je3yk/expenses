import { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./typography";

const meta: Meta<typeof Typography> = {
  title: "Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "body1",
          "body2",
          "caption",
          "overline",
          "button",
        ],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const H1: Story = {
  args: {
    variant: "h1",
    children: "H1 example",
  },
};
