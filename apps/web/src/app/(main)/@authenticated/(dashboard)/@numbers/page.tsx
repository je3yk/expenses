"use client";

import { Coins, DollarSign, PiggyBank, ShoppingCart } from "lucide-react";

import { CurrencyTypography } from "~/components/currency-typography";
import { StatCard } from "~/components/stat-card";
import { CardContent } from "~/components/ui/card";
import { trpc } from "~/trpc/client";
import { BalanceDialog } from "./components/balance-dialog";

export default function NumbersPage() {
  const { data } = trpc.expenses.getUserSummary.useQuery();

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
            value={data?.income ?? 0}
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
            value={data?.outcome ?? 0}
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
            value={data?.savings ?? 0}
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
            value={data?.balance ?? 0}
            className="text-right text-5xl font-bold"
          />
        </CardContent>
      </StatCard>
    </div>
  );
}
