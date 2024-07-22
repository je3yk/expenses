import { Coins, DollarSign, PiggyBank, ShoppingCart } from "lucide-react";

import { StatCard } from "~/components/stat-card";
import { BalanceDialog } from "./BalanceDialog";

export default function NumbersPage() {
  return (
    <div className="grid max-h-[25vh] w-full grid-cols-4 grid-rows-1 gap-4">
      <StatCard
        value={12345}
        label="Income"
        Icon={DollarSign}
        variant="currency"
        caption="All the money you've earned in this period"
      >
        <BalanceDialog label="Add income" type="income" />
      </StatCard>
      <StatCard
        value={-800}
        label="Outcome"
        Icon={ShoppingCart}
        variant="currency"
      >
        <BalanceDialog label="Add outcome" type="outcome" />
      </StatCard>
      <StatCard
        value={1000}
        label="Savings"
        Icon={PiggyBank}
        variant="currency"
      >
        <BalanceDialog label="Add savings" type="savings" />
      </StatCard>
      <StatCard value={0} label="Balance" variant="currency" Icon={Coins} />
    </div>
  );
}
