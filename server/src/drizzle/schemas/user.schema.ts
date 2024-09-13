import { pgTable, varchar, timestamp, boolean } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { PostTable } from './post.schema'
import { CommentTable } from './comment.schema'
import { ProfileTable } from './profile.schema'

export const UserTable = pgTable('user', {
  id: varchar('id', { length: 255 }).primaryKey().unique().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  username: varchar('username', { length: 255 }).notNull().unique(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  otpCode: varchar('otpCode', { length: 6 }),
  otpExpiresAt: timestamp('otpExpiresAt'),
  lastConnection: timestamp('lastConnection'),
  verify: boolean('verify').default(false),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})

export const UserRelations = relations(UserTable, ({ one, many }) => ({
  posts: many(PostTable),
  comments: many(CommentTable),
  profile: one(ProfileTable),
}))
