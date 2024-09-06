import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { DrizzleModule } from '@/drizzle/drizzle.module'
import { EmailModule } from '@/email/email.module'
import { CloudinaryModule } from '@/cloudinary/cloudinary.module'

@Module({
  imports: [CloudinaryModule, DrizzleModule, EmailModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
