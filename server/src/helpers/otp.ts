import crypto from 'crypto'

export const generateOTP = (): string => {
  return crypto.randomInt(10 ** (6 - 1), 10 ** 6).toString()
}
