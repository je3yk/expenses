import { Coins, DollarSign, PiggyBank, ShoppingCart } from "lucide-react";

import { CurrencyTypography } from "~/components/currency-typography";
import { StatCard } from "~/components/stat-card";
import { CardContent } from "~/components/ui/card";
import { BalanceDialog } from "./components/BalanceDialog";

export default function NumbersPage() {
  return (
    <div className="grid max-h-[25vh] w-full grid-cols-4 grid-rows-1 gap-4">
      <StatCard
        label="Income"
        Icon={DollarSign}
        caption="All the money you've earned in this period"
      >
        <CardContent className="flex w-full flex-row-reverse items-center justify-between gap-2">
          <CurrencyTypography
            variant="body1"
            value={12345.2}
            type="positive"
            className="text-5xl font-bold"
          />
          <BalanceDialog label="Add income" type="income" />
        </CardContent>
      </StatCard>
      <StatCard label="Outcome" Icon={ShoppingCart}>
        <CardContent className="flex w-full flex-row-reverse items-center justify-between gap-2">
          <CurrencyTypography
            variant="body1"
            value={11010.2}
            type="negative"
            className="text-5xl font-bold"
          />
          <BalanceDialog label="Add outcome absadasda" type="outcome" />
        </CardContent>
      </StatCard>
      <StatCard label="Savings" Icon={PiggyBank}>
        <CardContent className="flex w-full flex-row-reverse items-center justify-between gap-2">
          <CurrencyTypography
            variant="body1"
            value={11010.2}
            type="savings"
            className="text-5xl font-bold"
          />
          <BalanceDialog label="Add savings" type="outcome" />
        </CardContent>
      </StatCard>
      <StatCard label="Balance" Icon={Coins}>
        <CardContent className="flex w-full flex-row-reverse items-center justify-between gap-2">
          <CurrencyTypography
            variant="body1"
            value={100}
            className="text-right text-6xl font-bold"
          />
        </CardContent>
      </StatCard>
    </div>
  );
}
