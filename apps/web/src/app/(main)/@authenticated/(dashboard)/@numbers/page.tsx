"use client";

import {
  Coins,
  DollarSign,
  PiggyBank,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import { ExpenseTypography } from "~/components/expense-typography";
import {
  StatCard,
  StatCardDescription,
  StatCardHeader,
  StatCardIcon,
  StatCardTitle,
  StatCardTitleRow,
} from "~/components/stat-card";
import { Typography } from "~/components/typography";
import { CardContent } from "~/components/ui/card";
import { trpc } from "~/trpc/client";
import { BalanceDialog } from "./components/balance-dialog";

export default function NumbersPage() {
  const { data } = trpc.expenses.getUserSummary.useQuery();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard>
        <StatCardHeader>
          <StatCardTitleRow>
            <StatCardTitle>Income</StatCardTitle>
            <StatCardIcon Icon={TrendingUp} className="text-green-600" />
          </StatCardTitleRow>
          <StatCardDescription>
            This are all the money you get
          </StatCardDescription>
        </StatCardHeader>
        <CardContent className="flex w-full flex-row-reverse items-center justify-between gap-2">
          <ExpenseTypography
            variant="body1"
            value={data?.income ?? 0}
            className="text-4xl"
          />
          <BalanceDialog label="Add income" type="income" />
        </CardContent>
      </StatCard>
      <StatCard>
        <StatCardHeader>
          <StatCardTitleRow>
            <StatCardTitle>Outcome</StatCardTitle>
            <StatCardIcon Icon={TrendingDown} className="text-red-600" />
          </StatCardTitleRow>
        </StatCardHeader>
        <CardContent className="flex w-full flex-row-reverse items-center justify-between gap-2">
          <ExpenseTypography
            variant="body1"
            value={data?.outcome ?? 0}
            className="text-4xl"
          />
          <BalanceDialog label="Add outcome absadasda" type="outcome" />
        </CardContent>
      </StatCard>
      <StatCard>
        <StatCardHeader>
          <StatCardTitleRow>
            <StatCardTitle>Savings</StatCardTitle>
            <StatCardIcon Icon={PiggyBank} className="text-yellow-600" />
          </StatCardTitleRow>
        </StatCardHeader>
        <CardContent className="flex w-full flex-row-reverse items-center justify-between gap-2">
          <ExpenseTypography
            variant="body1"
            value={data?.savings ?? 0}
            className="text-4xl"
          />
          <BalanceDialog label="Add savings" type="outcome" />
        </CardContent>
      </StatCard>
      <StatCard>
        <StatCardHeader>
          <StatCardTitleRow>
            <StatCardTitle>Balance</StatCardTitle>
            <StatCardIcon Icon={Coins} className="text-blue-600" />
          </StatCardTitleRow>
        </StatCardHeader>
        <CardContent className="col-span-1 flex w-full flex-row-reverse items-center justify-between gap-2">
          <ExpenseTypography
            variant="body1"
            value={data?.balance ?? 0}
            className="text-right text-5xl"
          />
        </CardContent>
      </StatCard>
    </div>
  );
}
