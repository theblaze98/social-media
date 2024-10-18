import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { AuthService } from '../auth.service'
import { IUser } from '@/interface'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'email',
    })
  }

  async validate(email: string, password: string): Promise<IUser> {
    const user = await this.authService.validateUser(email, password)
    if (!user) {
      throw new Error('Invalid credentials')
    }
    return user
  }
}
