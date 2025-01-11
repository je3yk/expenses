ALTER TABLE "expenses" RENAME TO "transactions";--> statement-breakpoint
ALTER TABLE "transactions" ADD COLUMN "type" text NOT NULL;