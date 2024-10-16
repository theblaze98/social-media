import { IUser } from '@/interface'
import { CreateUserDto, UpdateUserDto } from '../dto'

export interface IUserRepository {
  getUserById: (id: string) => Promise<IUser>
  getUser: ({
    email,
    username,
  }: {
    email?: string
    username?: string
  }) => Promise<IUser>
  createUser: (id: string, data: CreateUserDto) => Promise<IUser>
  updateUser: (id: string, data: UpdateUserDto) => Promise<IUser>
  deleteUser: (id: string) => Promise<IUser>
}
