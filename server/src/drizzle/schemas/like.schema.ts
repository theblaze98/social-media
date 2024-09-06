import { pgTable, varchar, timestamp } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { PostTable } from './post.schema'
import { UserTable } from './user.schema'

export const LikeTable = pgTable('like', {
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
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})

export const LikeRelations = relations(LikeTable, ({ one }) => ({
  author: one(UserTable, {
    fields: [LikeTable.authorId],
    references: [UserTable.id],
  }),
  post: one(LikeTable, {
    fields: [LikeTable.postId],
    references: [LikeTable.id],
  }),
}))
