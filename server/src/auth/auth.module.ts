import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { UserModule } from '@/user/user.module'
import { UserService } from '@/user/user.service'
import { UserRepository } from '@/user/user.repository'
import { EmailModule } from '@/email/email.module'
import { EmailService } from '@/email/email.service'
import { DrizzleModule } from '@/drizzle/drizzle.module'

@Module({
  imports: [UserModule, DrizzleModule, EmailModule],
  controllers: [AuthController],
  providers: [UserService, UserRepository, EmailService],
})
export class AuthModule {}
