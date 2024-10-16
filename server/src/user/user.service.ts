import { Injectable } from '@nestjs/common'
import { IUserService } from './interface'
import { CreateUserDto, UpdateUserDto } from './dto'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}

  findOne({ email, username }: { email?: string; username?: string }) {
    return this.userRepository.getUser({ email, username })
  }

  findOneById(id: string) {
    return this.userRepository.getUserById(id)
  }

  create(id: string, data: CreateUserDto) {
    return this.userRepository.createUser(id, data)
  }

  update(id: string, data: UpdateUserDto) {
    return this.userRepository.updateUser(id, data)
  }

  delete(id: string) {
    return this.userRepository.deleteUser(id)
  }
}
