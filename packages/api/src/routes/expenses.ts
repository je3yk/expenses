import { z } from "zod";

import { protectedProcedure, router } from "../trpc";

const expenseSchema = z.object({
  type: z.literal("income").or(z.literal("outcome")).or(z.literal("savings")),
  name: z.string(),
  category: z.string(),
  amount: z.number(),
  date: z.string(),
});

type Expense = z.infer<typeof expenseSchema>;

export const expensesRouter = router({
  getUserSummary: protectedProcedure.query(async ({ ctx }) => {
    return {
      income: 1000.0,
      outcome: 500.0,
      savings: 300.0,
      balance: 200.0,
    };
  }),
  addExpense: protectedProcedure
    .input(expenseSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      return input;
    }),
});
