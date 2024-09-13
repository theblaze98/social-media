import { Inject } from '@nestjs/common'
import { eq, or } from 'drizzle-orm'
import { NeonHttpDatabase } from 'drizzle-orm/neon-http'
import * as schemas from '@/drizzle/schemas'
import { IUser } from '@/interface'
import { IUserRepository } from './interface'
import { CreateUserDto, UpdateUserDto } from './dto'
import { DRIZZLE_PROVIDER } from '@/helpers'

export class UserRepository implements IUserRepository {
  constructor(
    @Inject(DRIZZLE_PROVIDER)
    private database: NeonHttpDatabase<typeof schemas>,
  ) {}

  async getUserById(id: string): Promise<IUser> {
    const user = await this.database.query.UserTable.findFirst({
      where: eq(schemas.UserTable.id, id),
    })
    return user
  }

  async getUser({ email, username }: { email?: string; username?: string }) {
    const user = await this.database.query.UserTable.findFirst({
      where: or(
        eq(schemas.UserTable.email, email),
        eq(schemas.UserTable.username, username),
      ),
    })
    return user
  }
  async createUser(id: string, data: CreateUserDto) {
    const user = await this.database
      .insert(schemas.UserTable)
      .values({ id, ...data })
      .returning()
    return user[0]
  }

  async updateUser(id: string, data: UpdateUserDto) {
    const user = await this.database
      .update(schemas.UserTable)
      .set(data)
      .where(eq(schemas.UserTable.id, id))
      .returning()
    return user[0]
  }

  async removeUser(id: string) {
    const user = await this.database
      .delete(schemas.UserTable)
      .where(eq(schemas.UserTable.id, id))
      .returning()
    return user[0]
  }
}
