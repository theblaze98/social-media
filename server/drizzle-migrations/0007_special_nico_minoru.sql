ALTER TABLE "user" ALTER COLUMN "otpExpiresAt" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "lastConnection" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "profile" ALTER COLUMN "birthday" SET DATA TYPE timestamp;