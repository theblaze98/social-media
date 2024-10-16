import { z } from 'zod'

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateUserDto:
 *       type: object
 *       required:
 *         - name
 *         - username
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user.
 *         username:
 *           type: string
 *           description: The username of the user.
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user.
 *         password:
 *           type: string
 *           description: The password of the user.
 *         otpCode:
 *           type: string
 *           description: The one-time password code.
 *         otpExpiresAt:
 *           type: string
 *           format: date-time
 *           description: The expiration date and time of the one-time password code.
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     CreateUserResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier of the user.
 *         name:
 *           type: string
 *           description: The name of the user.
 *         username:
 *           type: string
 *           description: The username of the user.
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user.
 *         otpCode:
 *           type: string
 *           description: The one-time password code.
 *         otpExpiresAt:
 *           type: string
 *           format: date-time
 *           description: The expiration date and time of the one-time password code.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the user was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the user was last updated.
 */

export const createUserSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long.'),
  username: z.string().min(3, 'Username must be at least 3 characters long.'),
  email: z.string().email('Invalid email address.'),
  password: z.string().min(4, 'Password must be at least 4 characters long.'),
  otpCode: z.string().min(6).max(6).optional(),
  otpExpiresAt: z.date().optional(),
})

export interface CreateUserDto {
  name: string
  username: string
  email: string
  password: string
  otpCode?: string
  otpExpiresAt?: Date
}
