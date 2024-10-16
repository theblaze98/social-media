import { IUser } from '@/interface'
import { CreateUserDto, UpdateUserDto } from '../dto'

export interface IUserService {
  findOne: ({
    email,
    username,
  }: {
    email?: string
    username?: string
  }) => Promise<IUser>
  findOneById: (id: string) => Promise<IUser>
  create: (id: string, data: CreateUserDto) => Promise<IUser>
  update: (id: string, data: UpdateUserDto) => Promise<IUser>
  delete: (id: string) => Promise<IUser>
}
