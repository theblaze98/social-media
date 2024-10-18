import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { comparePassword } from '@/helpers'
import { IUser } from '@/interface'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string): Promise<IUser | null> {
    const user = await this.userService.findOne({ email })
    if (!user) {
      return null
    }
    const isPasswordValid = await comparePassword(password, user.password)
    if (!isPasswordValid) {
      return null
    }
    return user
  }
}
