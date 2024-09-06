import { pgTable, varchar, json, text, timestamp } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { UserTable } from './user.schema'

export const PostTable = pgTable('post', {
  id: varchar('id', { length: 255 }).primaryKey().notNull(),
  authorId: varchar('userId', { length: 255 })
    .notNull()
    .references(() => UserTable.id, {
      onDelete: 'cascade',
    }),
  content: text('content').notNull(),
  media: json('media'),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})

export const PostRelations = relations(PostTable, ({ one, many }) => ({
  author: one(UserTable, {
    fields: [PostTable.authorId],
    references: [UserTable.id],
  }),
  comments: many(PostTable),
}))
