ALTER TABLE "users" RENAME COLUMN "full_name" TO "first_name";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "clerk_id" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "last_name" text;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_clerk_id_unique" UNIQUE("clerk_id");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");