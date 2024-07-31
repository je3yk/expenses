import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { TransactionTable } from "./components/transactions-table";

export default function Chart() {
  return (
    <Card className="flex h-full max-h-full flex-col">
      <CardHeader>
        <CardTitle>Transactions history</CardTitle>
      </CardHeader>
      <CardContent className="w-full overflow-y-auto p-0">
        <TransactionTable />
      </CardContent>
    </Card>
  );
}
