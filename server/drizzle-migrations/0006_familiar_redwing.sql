ALTER TABLE "user" ALTER COLUMN "lastConnection" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "lastConnection" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "lastConnection" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "otpExpiresAt" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "profile" ALTER COLUMN "birthday" SET DATA TYPE date;