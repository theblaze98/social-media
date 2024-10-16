import {
  Controller,
  Post,
  Body,
  HttpException,
  Patch,
  UseGuards,
  Req,
} from '@nestjs/common'
import { v4 as uuid } from 'uuid'
import { UserService } from '@/user/user.service'
import { ZodValidationPipe } from '@/common/pipes'
import { CreateUserDto, createUserSchema } from '@/user/dto'
import { httpErrorValidation } from '@/helpers/http-error-validation'
import { encryptPassword, generateOTP } from '@/helpers'
import {
  EmailAlreadyExists,
  ExpireVerifyCode,
  InvalidVerifyCode,
  UsernameAlreadyExists,
} from './exeptions'
import { EmailService } from '@/email/email.service'
import { RegisterEmailTemplate, VerifyAccountTemplate } from '@/email/templates'
import { AuthGuard } from '@/common/guards/auth/auth.guard'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly emailService: EmailService,
  ) {}

  @Post('register')
  async register(
    @Body(new ZodValidationPipe(createUserSchema)) body: CreateUserDto,
  ) {
    try {
      if (await this.userService.findOne({ email: body.email }))
        throw new EmailAlreadyExists()
      if (await this.userService.findOne({ username: body.username }))
        throw new UsernameAlreadyExists()

      const id = uuid()
      const hashedPassword = await encryptPassword(body.password)
      const otpCode = generateOTP()

      const email = await this.emailService.sendEmail(
        body.email,
        'Codigo de Verificacion',
        RegisterEmailTemplate(body.username, otpCode),
      )

      console.log(email)

      const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000)

      return await this.userService.create(id, {
        ...body,
        password: hashedPassword,
        otpCode,
        otpExpiresAt,
      })
    } catch (error) {
      const { message, statusCode } = httpErrorValidation(
        error.message,
        error.status,
      )
      console.log(error)
      throw new HttpException(message, statusCode)
    }
  }

  @UseGuards(AuthGuard)
  @Patch('verify')
  async veryfy(@Body() body: { otpCode: string }, @Req() req) {
    try {
      const userId = req.user.sub

      const user = await this.userService.findOneById(userId)

      if (body.otpCode !== user.otpCode) throw new InvalidVerifyCode()

      if (user.otpExpiresAt < new Date()) {
        const otpCode = generateOTP()
        const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000)
        this.emailService.sendEmail(
          user.email,
          'Codifo de Verificacion',
          VerifyAccountTemplate(user.username, otpCode),
        )
        this.userService.update(user.id, { otpCode, otpExpiresAt })
        throw new ExpireVerifyCode()
      }

      return this.userService.update(user.id, { verify: true })
    } catch (error) {
      console.log(error)
      const { message, statusCode } = httpErrorValidation(
        error.message,
        error.status,
      )
      throw new HttpException(message, statusCode)
    }
  }
}
