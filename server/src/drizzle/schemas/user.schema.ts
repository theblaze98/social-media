import { pgTable, varchar, timestamp, text } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { PostTable } from './post.schema'
import { CommentTable } from './comment.schema'

export const UserTable = pgTable('User', {
  id: varchar('id', { length: 255 }).primaryKey().unique().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  avatarUrl: text('avatarUrl'),
  username: varchar('username', { length: 255 }).notNull().unique(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  bio: text('bio'),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  lastConnection: timestamp('lastConnection').defaultNow().notNull(),
  otpCode: varchar('otpCode', { length: 6 }),
  otpExpiresAt: timestamp('otpExpiresAt'),
})

export const UserRelations = relations(UserTable, ({ many }) => ({
  posts: many(PostTable),
  comments: many(CommentTable),
}))
