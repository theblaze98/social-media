import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { UserModule } from '@/user/user.module'
import { UserService } from '@/user/user.service'
import { UserRepository } from '@/user/user.repository'
import { EmailModule } from '@/email/email.module'
import { EmailService } from '@/email/email.service'
import { DrizzleModule } from '@/drizzle/drizzle.module'
import { AuthService } from './auth.service'
import { JwtStrategy } from './helpers/jwt.strategy'
import { LocalStrategy } from './helpers/local.strategy'

@Module({
  imports: [UserModule, DrizzleModule, EmailModule],
  controllers: [AuthController],
  providers: [
    UserService,
    UserRepository,
    EmailService,
    AuthService,
    JwtStrategy,
    LocalStrategy,
  ],
})
export class AuthModule {}
