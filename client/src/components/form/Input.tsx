'use client'
import { Control, Controller, FieldError } from 'react-hook-form'
import { Input as CustomInput } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type InputProps = {
	label: string
	name: string
	type: string
	id: string
	placeholder: string
	control: Control<T>
	error?: FieldError
}

export const Input = ({
	label,
	name,
	id,
	type,
	placeholder,
	control,
	error,
}: InputProps) => {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue=''
			render={({ field }) => (
				<div className='my-4'>
					<Label htmlFor={id}>{label}</Label>
					<CustomInput
						{...field}
						id={id}
						type={type}
						placeholder={placeholder}
					/>
					{error && (
						<p className='mt-2 text-sm text-red-600'>{error.message}</p>
					)}
				</div>
			)}
		/>
	)
}
