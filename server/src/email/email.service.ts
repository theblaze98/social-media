import { Injectable, Inject } from '@nestjs/common'
import { EMAIL_PROVIDER } from '@/helpers'
import { Transporter } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

@Injectable()
export class EmailService {
  constructor(
    @Inject(EMAIL_PROVIDER)
    private emailTransporter: Transporter<SMTPTransport.SentMessageInfo>,
  ) {}

  async sendEmail(to: string, subject: string, body: string) {
    try {
      const info = await this.emailTransporter.sendMail({
        from: 'SpeakFlow@gmail.dev <Support>',
        to,
        subject,
        html: body,
      })
      return info
    } catch (error) {
      return error
    }
  }
}
