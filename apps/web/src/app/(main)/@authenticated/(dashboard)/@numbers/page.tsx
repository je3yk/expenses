import { Card, CardContent, CardHeader } from "~/components/ui/card";

const NumbersCard = ({ title, value }: { title: string; value: number }) => {
  const formattedValue = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(value);
  return (
    <Card className="bg-slate-200 dark:bg-slate-900">
      <CardHeader>
        <h2>{title}</h2>
      </CardHeader>
      <CardContent>
        <p>{formattedValue}</p>
      </CardContent>
    </Card>
  );
};
export default function NumbersPage() {
  return (
    <div className="grid h-full w-full grid-cols-4 gap-4">
      <NumbersCard title="Total expenses" value={1234} />
      <NumbersCard title="Total income" value={1234} />
      <NumbersCard title="Total balance" value={1234} />
      <NumbersCard title="Number of transactions" value={100} />
    </div>
  );
}
