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
    label: "Label",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Dolar icon",
    Icon: DollarSign,
  },
};

export const NegativeCurrency: Story = {
  args: {
    label: "Negative value",
  },
};
