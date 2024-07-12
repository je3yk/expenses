import { Coins, DollarSign, PiggyBank, ShoppingCart } from "lucide-react";
import { StatCard } from "~/components/stat-card";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

const currencyFormat = new Intl.NumberFormat("en-US", {currency: "pln", style: "currency"});

export default function NumbersPage() {
  return (
    <div className="grid h-full w-full grid-cols-4 gap-4">
      <StatCard value={currencyFormat.format(12345)} label="Balance" Icon={DollarSign} />
      <StatCard value={currencyFormat.format(800)} label="Spend" Icon={ShoppingCart} />
      <StatCard value={currencyFormat.format(1000)} label="Income" Icon={Coins} />
      <StatCard value={currencyFormat.format(1000)} label="Saving" Icon={PiggyBank} />
    </div>
  );
}
