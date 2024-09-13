export interface IUser {
  id: string
  name: string
  username: string
  email: string
  password: string
  createdAt: Date
  lastConnection: Date
  verify: boolean
  otpCode: string
  otpExpiresAt: Date
}
