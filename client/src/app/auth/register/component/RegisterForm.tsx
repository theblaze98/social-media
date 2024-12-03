'use client'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import schema, { FormValues } from './register.schema'
import { Input } from '@/components/form/Input'
import { Button } from '@/components/ui/button'
import { register } from '@/services/auth'
import { toast } from 'react-hot-toast'

export default function RegisterForm() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({ resolver: zodResolver(schema) })

	const router = useRouter()

	const onSubmit: SubmitHandler<FormValues> = async ({ name, username, email, password }) => {
		const res = await register({ name, username, email, password })

		console.log(res)

		localStorage.setItem('token', JSON.stringify(res.data.accessToken))

		toast.success('Registration successful')

		router.push('verify')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				label='Name'
				name='name'
				id='name'
				type='text'
				placeholder='John Doe'
        control={control}
        error={errors.name}
			/>
			<Input
				label='Username'
				name='username'
				id='username'
				type='text'
				placeholder='johndoe'
				control={control}
        error={errors.username}
			/>
			<Input
				label='Email'
				name='email'
				id='email'
				type='email'
				placeholder='johndoe@example.com'
				control={control}
        error={errors.email}
			/>
			<Input
				label='Password'
				name='password'
				id='password'
				type='password'
				placeholder='Password'
				control={control}
        error={errors.password}
			/>
			<Input
				label='Confirm Password'
				name='confirmPassword'
				id='confirmPassword'
				type='password'
				placeholder='Confirm Password'
				control={control}
        error={errors.confirmPassword}
			/>
			<Button type='submit' className='w-full'>
				Register
			</Button>
		</form>
	)
}
