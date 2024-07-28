import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { TransactionTable } from "./components/transactionsTable";

export default function Chart() {
  return (
    <Card className="flex h-full max-h-full flex-col">
      <CardHeader>
        <CardTitle>Transactions history</CardTitle>
      </CardHeader>
      <CardContent className="w-full overflow-y-auto">
        <TransactionTable />
      </CardContent>
    </Card>
  );
}
