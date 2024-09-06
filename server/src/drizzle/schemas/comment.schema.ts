import { pgTable, varchar, text, timestamp } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { UserTable } from './user.schema'
import { PostTable } from './post.schema'

export const CommentTable = pgTable('comment', {
  id: varchar('id', { length: 255 }).primaryKey().notNull(),
  postId: varchar('postId', { length: 255 })
    .notNull()
    .references(() => PostTable.id, {
      onDelete: 'cascade',
    }),
  authorId: varchar('authorId', { length: 255 })
    .notNull()
    .references(() => UserTable.id, {
      onDelete: 'cascade',
    }),
  content: text('content').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})

export const CommentRelations = relations(CommentTable, ({ one }) => ({
  author: one(UserTable, {
    fields: [CommentTable.authorId],
    references: [UserTable.id],
  }),
  post: one(CommentTable, {
    fields: [CommentTable.postId],
    references: [CommentTable.id],
  }),
}))
