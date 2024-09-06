CREATE TABLE IF NOT EXISTS "Friendship" (
	"userId" varchar(255) NOT NULL,
	"friendId" varchar(255) NOT NULL,
	"isAccepted" boolean DEFAULT false,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
