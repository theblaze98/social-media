import { IUser } from '@/interface'
import { z } from 'zod'

export const updateUserSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters long.')
    .optional(),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters long.')
    .optional(),
  email: z.string().email('Invalid email address.').optional(),
  password: z
    .string()
    .min(4, 'Password must be at least 4 characters long.')
    .optional(),
  otpCode: z.string().min(6).max(6).optional(),
  lastConnection: z.date().optional(),
  verify: z.boolean().optional(),
  otpExpiresAt: z.date().optional(),
})

export interface UpdateUserDto extends Partial<IUser> {}
