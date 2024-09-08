import dayjs from "dayjs";

import {
  ExpenseIcon,
  ExpenseTypography,
} from "~/components/expense-typography";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { cn } from "~/lib/utils";

const rows = [
  {
    key: "SAVING1",
    date: dayjs().add(-1, "day").format("YYYY-MM-DD"),
    name: "Oszczędności",
    category: "Savings",
    type: "saving" as const,
    amount: 200,
  },
  {
    key: "TRANS1",
    date: dayjs().add(-1, "day").format("YYYY-MM-DD"),
    name: "Czynsz za mieszkanie",
    category: "Living",
    type: "outcome" as const,
    amount: 2000,
  },
  {
    key: "TRANS2",
    date: dayjs().add(-2, "day").format("YYYY-MM-DD"),
    name: "Zakupy spożywcze",
    category: "Food",
    type: "outcome" as const,
    amount: 100,
  },
  {
    key: "TRANS_INCOME_2",
    date: dayjs().add(-2, "day").format("YYYY-MM-DD"),
    name: "Przelew od żony",
    category: "Familly",
    type: "income" as const,
    amount: 1000,
  },
  {
    key: "TRANS3",
    date: dayjs().add(-3, "day").format("YYYY-MM-DD"),
    name: "Paliwo",
    category: "Car",
    type: "outcome" as const,
    amount: 200,
  },
  {
    key: "TRANS_INCOME_1",
    date: dayjs().add(-3, "day").format("YYYY-MM-DD"),
    name: "Wynagrodzenie",
    category: "Work salary",
    type: "income" as const,
    amount: 3000,
  },
  {
    key: "TRANS4",
    date: dayjs().add(-4, "day").format("YYYY-MM-DD"),
    name: "Książka",
    category: "Entertainment",
    type: "outcome" as const,
    amount: 50,
  },
  {
    key: "TRANS5",
    date: dayjs().add(-5, "day").format("YYYY-MM-DD"),
    name: "Bilet na pociąg",
    category: "Travel",
    type: "outcome" as const,
    amount: 150,
  },
  {
    key: "TRANS6",
    date: dayjs().add(-6, "day").format("YYYY-MM-DD"),
    name: "Kawa",
    category: "Food",
    type: "outcome" as const,
    amount: 10,
  },
  {
    key: "TRANS7",
    date: dayjs().add(-7, "day").format("YYYY-MM-DD"),
    name: "Czynsz za mieszkanie",
    category: "Living",
    type: "outcome" as const,
    amount: 2000,
  },
];

export const TransactionTable = () => {
  return (
    <div className="w-full">
      <Table className="px-6">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row.key}
              className={cn(
                "group hover:bg-secondary hover:text-secondary-foreground",
                i % 2 === 0 ? "bg-foreground/10" : "bg-background",
              )}
            >
              <TableCell className="pl-2 font-medium">{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell className="flex items-center justify-end gap-2 text-right">
                <ExpenseIcon type={row.type} className="h-5 w-5" />
                <ExpenseTypography
                  value={row.amount}
                  className="font-bold group-hover:text-secondary-foreground"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="w-full border-t-2 bg-background p-4 text-foreground">
        Controls panel
      </div>
    </div>
  );
};
