import { pgTable, varchar, timestamp, text, boolean } from 'drizzle-orm/pg-core'
import { UserTable } from './user.schema'
import { relations } from 'drizzle-orm'

export const ProfileTable = pgTable('profile', {
  id: varchar('id', { length: 255 }).primaryKey(),
  userId: varchar('user_id', { length: 255 })
    .notNull()
    .references(() => UserTable.id, {
      onDelete: 'cascade',
    }),
  avatarUrl: text('avatar_url'),
  bannerUrl: text('banner_url'),
  bio: text('bio'),
  website: text('website'),
  location: text('location'),
  interests: text('interests'),
  birthday: timestamp('birthday'),
  isPrivate: boolean('is_private').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const ProfileRelations = relations(ProfileTable, ({ one }) => ({
  user: one(UserTable, {
    fields: [ProfileTable.userId],
    references: [UserTable.id],
  }),
}))
