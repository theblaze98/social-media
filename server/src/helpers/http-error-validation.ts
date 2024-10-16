import { HttpStatus } from '@nestjs/common'

export const httpErrorValidation = (
  errorMessage: string,
  statusCode: number,
) => {
  const matcher: { [key: string]: { message: string; statusCode: number } } = {
    EMAIL_ALREADY_EXISTS: { message: errorMessage, statusCode },
    USERNAME_ALREADY_EXISTS: { message: errorMessage, statusCode },
    USER_NOT_FOUND: { message: errorMessage, statusCode },
    INVALID_CREDENTIALS: { message: errorMessage, statusCode },
    INVALID_VERIFY_CODE: { message: errorMessage, statusCode },
    EXPIRE_VERIFY_CODE: { message: errorMessage, statusCode },
  }

  const defaultError = {
    message: 'SOMETHING_WENT_WRONG',
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  }

  return matcher[errorMessage] ?? defaultError
}
