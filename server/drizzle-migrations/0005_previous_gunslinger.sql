CREATE TABLE IF NOT EXISTS "profile" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"avatar_url" text,
	"banner_url" text,
	"bio" text,
	"website" text,
	"location" text,
	"interests" text,
	"birthday" timestamp,
	"is_private" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profile" ADD CONSTRAINT "profile_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "avatarUrl";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "bio";