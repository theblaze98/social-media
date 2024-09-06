ALTER TABLE "User" ADD COLUMN "otpCode" varchar(6);--> statement-breakpoint
ALTER TABLE "User" ADD COLUMN "otpExpiresAt" timestamp;