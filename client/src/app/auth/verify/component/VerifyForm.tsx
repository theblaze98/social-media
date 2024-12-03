
'use client'
import { useRouter } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from '@/components/ui/input-otp'
import { Button } from '@/components/ui/button'
import { verify } from '@/services/auth'
import { toast } from 'react-hot-toast'

const schema = z.object({
	pin: z.string().min(6, 'Pin must be at least 6 characters long'),
})

type FormValue = z.infer<typeof schema>

export default function VerifyForm() {
	const router = useRouter()
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValue>({
		resolver: zodResolver(schema),
	})

	const onSubmit: SubmitHandler<FormValue> = async ({ pin }) => {
		const { data } = await verify(pin, JSON.parse(localStorage.getItem('token') || ''))
		console.log(data)
		toast.success('Verification successful')
		router.push('/')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name='pin'
				control={control}
				defaultValue=''
				render={({ field }) => (
					<div className='my-4 w-full flex flex-col items-center'>
						<InputOTP
							maxLength={6}
							{...field}>
							<InputOTPGroup>
								<InputOTPSlot index={0} />
								<InputOTPSlot index={1} />
								<InputOTPSlot index={2} />
							</InputOTPGroup>
							<InputOTPSeparator />
							<InputOTPGroup>
								<InputOTPSlot index={3} />
								<InputOTPSlot index={4} />
								<InputOTPSlot index={5} />
							</InputOTPGroup>
						</InputOTP>
						{errors.pin && (
							<p className='mt-2 text-sm text-red-600'>{errors.pin.message}</p>
						)}
					</div>
				)}
			/>

			<Button
				type='submit'
				className='w-full'>
				Verify
			</Button>
		</form>
	)
}
