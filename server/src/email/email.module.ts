import { Module } from '@nestjs/common'
import { createTransport } from 'nodemailer'
import { EMAIL_PROVIDER } from '@/helpers'
import { EmailService } from './email.service'

@Module({
  providers: [
    {
      provide: EMAIL_PROVIDER,
      useFactory: () => {
        return createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
          },
        })
      },
    },
    EmailService,
  ],
  exports: [EmailService],
})
export class EmailModule {}
