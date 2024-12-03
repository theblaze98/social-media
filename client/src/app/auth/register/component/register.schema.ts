import { z } from 'zod'

const schema = z
	.object({
		name: z.string().min(2, 'Name must be at least 2 characters'),
		username: z.string().min(2, 'Username must be at least 2 characters'),
		email: z.string().email('Invalid email'),
		password: z.string().min(6, 'Password must be at least 6 characters'),
		confirmPassword: z
			.string()
			.min(6, 'Password must be at least 6 characters'),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Passwords must match',
		path: ['confirmPassword'],
	})

export type FormValues = z.infer<typeof schema>

export default schema
