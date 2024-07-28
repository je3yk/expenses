import dayjs from "dayjs";

import { CurrencyTypography } from "~/components/currency-typography";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const rows = [
  {
    key: "SAVING1",
    date: dayjs().add(-1, "day").format("YYYY-MM-DD"),
    name: "Oszczędności",
    category: "Savings",
    type: "savings" as const,
    amount: 200,
  },
  {
    key: "TRANS1",
    date: dayjs().add(-1, "day").format("YYYY-MM-DD"),
    name: "Czynsz za mieszkanie",
    category: "Living",
    type: "negative" as const,
    amount: 2000,
  },
  {
    key: "TRANS2",
    date: dayjs().add(-2, "day").format("YYYY-MM-DD"),
    name: "Zakupy spożywcze",
    category: "Food",
    type: "negative" as const,
    amount: 100,
  },
  {
    key: "TRANS_INCOME_2",
    date: dayjs().add(-2, "day").format("YYYY-MM-DD"),
    name: "Przelew od żony",
    category: "Familly",
    type: "positive" as const,
    amount: 1000,
  },
  {
    key: "TRANS3",
    date: dayjs().add(-3, "day").format("YYYY-MM-DD"),
    name: "Paliwo",
    category: "Car",
    type: "negative" as const,
    amount: 200,
  },
  {
    key: "TRANS_INCOME_1",
    date: dayjs().add(-3, "day").format("YYYY-MM-DD"),
    name: "Wynagrodzenie",
    category: "Work salary",
    type: "positive" as const,
    amount: 3000,
  },
  {
    key: "TRANS4",
    date: dayjs().add(-4, "day").format("YYYY-MM-DD"),
    name: "Książka",
    category: "Entertainment",
    type: "negative" as const,
    amount: 50,
  },
  {
    key: "TRANS5",
    date: dayjs().add(-5, "day").format("YYYY-MM-DD"),
    name: "Bilet na pociąg",
    category: "Travel",
    type: "negative" as const,
    amount: 150,
  },
  {
    key: "TRANS6",
    date: dayjs().add(-6, "day").format("YYYY-MM-DD"),
    name: "Kawa",
    category: "Food",
    type: "negative" as const,
    amount: 10,
  },
  {
    key: "TRANS7",
    date: dayjs().add(-7, "day").format("YYYY-MM-DD"),
    name: "Czynsz za mieszkanie",
    category: "Living",
    type: "negative" as const,
    amount: 2000,
  },
  {
    key: "TRANS8",
    date: dayjs().add(-8, "day").format("YYYY-MM-DD"),
    name: "Zakupy spożywcze",
    category: "Food",
    type: "negative" as const,
    amount: 100,
  },
  {
    key: "TRANS9",
    date: dayjs().add(-9, "day").format("YYYY-MM-DD"),
    name: "Paliwo",
    category: "Car",
    type: "negative" as const,
    amount: 200,
  },
  {
    key: "TRANS10",
    date: dayjs().add(-10, "day").format("YYYY-MM-DD"),
    name: "Książka",
    category: "Entertainment",
    type: "negative" as const,
    amount: 50,
  },
  {
    key: "TRANS11",
    date: dayjs().add(-11, "day").format("YYYY-MM-DD"),
    name: "Bilet na pociąg",
    category: "Travel",
    type: "negative" as const,
    amount: 150,
  },
  {
    key: "TRANS12",
    date: dayjs().add(-12, "day").format("YYYY-MM-DD"),
    name: "Kawa",
    category: "Food",
    type: "negative" as const,
    amount: 10,
  },
  {
    key: "TRANS13",
    date: dayjs().add(-13, "day").format("YYYY-MM-DD"),
    name: "Czynsz za mieszkanie",
    category: "Living",
    type: "negative" as const,
    amount: 2000,
  },
  {
    key: "TRANS14",
    date: dayjs().add(-14, "day").format("YYYY-MM-DD"),
    name: "Zakupy spożywcze",
    category: "Food",
    type: "negative" as const,
    amount: 100,
  },
];

export const TransactionTable = () => {
  return (
    <Table className="h-full overflow-y-scroll">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.key}>
            <TableCell className="font-medium">{row.date}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.category}</TableCell>
            <TableCell className="text-right">
              <CurrencyTypography
                value={row.amount}
                type={row.type}
                className="font-bold"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
