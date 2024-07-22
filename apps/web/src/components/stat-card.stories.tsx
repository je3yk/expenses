import { Meta, StoryObj } from "@storybook/react";
import { DollarSign } from "lucide-react";

import { StatCard } from "./stat-card";

const meta: Meta<typeof StatCard> = {
  title: "StatCard",
  component: StatCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: {
    value: 0,
    label: "Label",
    variant: "number",
  },
};

const numberFormat = new Intl.NumberFormat("en-US", {
  currency: "pln",
  style: "currency",
});

export const WithIcon: Story = {
  args: {
    value: 12345,
    label: "Dolar icon",
    Icon: DollarSign,
    variant: "currency",
  },
};

export const NegativeCurrency: Story = {
  args: {
    value: -12345,
    label: "Negative value",
    variant: "currency",
  },
};
