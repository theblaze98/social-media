import { HttpException, HttpStatus } from '@nestjs/common'

export class EmailAlreadyExists extends HttpException {
  constructor() {
    super('EMAIL_ALREADY_EXISTS', HttpStatus.CONFLICT)
  }
}

export class UsernameAlreadyExists extends HttpException {
  constructor() {
    super('USERNAME_ALREADY_EXISTS', HttpStatus.CONFLICT)
  }
}

export class UserNotFound extends HttpException {
  constructor() {
    super('USER_NOT_FOUND', HttpStatus.NOT_FOUND)
  }
}

export class InvalidCredentials extends HttpException {
  constructor() {
    super('INVALID_CREDENTIALS', HttpStatus.BAD_REQUEST)
  }
}

export class InvalidVerifyCode extends HttpException {
  constructor() {
    super('INVALID_VERIFY_CODE', HttpStatus.BAD_REQUEST)
  }
}

export class ExpireVerifyCode extends HttpException {
  constructor() {
    super('EXPIRE_VERIFY_CODE', HttpStatus.BAD_REQUEST)
  }
}
