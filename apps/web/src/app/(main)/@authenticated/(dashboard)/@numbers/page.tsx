import { Coins, DollarSign, PiggyBank, ShoppingCart } from "lucide-react";

import { CurrencyTypography } from "~/components/currency-typography";
import { StatCard } from "~/components/stat-card";
import { CardContent } from "~/components/ui/card";
import { BalanceDialog } from "./components/balance-dialog";

const data = {
  income: 12345.2,
  outcome: 11010.2,
  savings: 11010.2,
  balance: 100,
};

export default function NumbersPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label="Income"
        Icon={DollarSign}
        caption="All the money you've earned"
      >
        <CardContent className="flex w-full flex-row-reverse items-center justify-between gap-2">
          <CurrencyTypography
            variant="body1"
            value={data.income}
            type="positive"
            className="text-4xl font-bold"
          />
          <BalanceDialog label="Add income" type="income" />
        </CardContent>
      </StatCard>
      <StatCard label="Outcome" Icon={ShoppingCart}>
        <CardContent className="flex w-full flex-row-reverse items-center justify-between gap-2">
          <CurrencyTypography
            variant="body1"
            value={data.outcome}
            type="negative"
            className="text-4xl font-bold"
          />
          <BalanceDialog label="Add outcome absadasda" type="outcome" />
        </CardContent>
      </StatCard>
      <StatCard label="Savings" Icon={PiggyBank}>
        <CardContent className="flex w-full flex-row-reverse items-center justify-between gap-2">
          <CurrencyTypography
            variant="body1"
            value={data.savings}
            type="savings"
            className="text-4xl font-bold"
          />
          <BalanceDialog label="Add savings" type="outcome" />
        </CardContent>
      </StatCard>
      <StatCard label="Balance" Icon={Coins}>
        <CardContent className="col-span-1 flex w-full flex-row-reverse items-center justify-between gap-2">
          <CurrencyTypography
            variant="body1"
            value={data.balance}
            className="text-right text-5xl font-bold"
          />
        </CardContent>
      </StatCard>
    </div>
  );
}
