import { Meta, StoryObj } from "@storybook/react";

import { StatCard  } from "./stat-card";
import { DollarSign } from "lucide-react";

const meta: Meta<typeof StatCard> = {
  title: "StatCard",
  component: StatCard,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
    args: {
        value: 0,
        label: 'Label',
    }
}

const numberFormat = new Intl.NumberFormat("en-US", {currency: "pln", style: "currency"});

export const WithIcon: Story = {
  args: {
    value: numberFormat.format(12345),
    label: 'Testing icon label',
    Icon: DollarSign,
  }
}