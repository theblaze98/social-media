import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { CloudinaryModule } from './cloudinary/cloudinary.module'
import { EmailModule } from './email/email.module'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env', '.env.production'],
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '90d' },
    }),
    CloudinaryModule,
    EmailModule,
    UserModule,
    AuthModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
