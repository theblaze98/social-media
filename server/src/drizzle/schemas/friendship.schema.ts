import { pgTable, varchar, timestamp, boolean } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { UserTable } from './user.schema'

export const FriendshipTable = pgTable('friendship', {
  userId: varchar('userId', { length: 255 }).notNull(),
  friendId: varchar('friendId', { length: 255 }).notNull(),
  isAccepted: boolean('isAccepted').default(false),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})

export const FriendshipRelations = relations(FriendshipTable, ({ one }) => ({
  user: one(UserTable, {
    fields: [FriendshipTable.userId],
    references: [UserTable.id],
  }),
  friend: one(UserTable, {
    fields: [FriendshipTable.friendId],
    references: [UserTable.id],
  }),
}))
