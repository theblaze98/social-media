import { Injectable } from '@nestjs/common'
import { IUserService } from './interface'
import { CreateUserDto, UpdateUserDto } from './dto'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly UserRepository: UserRepository) {}

  findOne({ email, username }: { email?: string; username?: string }) {
    return this.UserRepository.getUser({ email, username })
  }

  findOneById(id: string) {
    return this.UserRepository.getUserById(id)
  }

  create(id: string, data: CreateUserDto) {
    return this.UserRepository.createUser(id, data)
  }

  update(id: string, data: UpdateUserDto) {
    return this.UserRepository.updateUser(id, data)
  }

  delete(id: string) {
    return this.UserRepository.deleteUser(id)
  }
}
