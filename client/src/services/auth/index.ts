import { axiosInstance } from '@/config/axios'
import { IRegisterUser } from './interfaces/user.interface'

export const register = async (data: IRegisterUser) => {
	const response = await axiosInstance.post('api/auth/register', data)
	return response
}

export const verify = async (pin: string, token: string) => {
	const response = await axiosInstance.patch(
		'api/auth/verify',
		{ otpCode: pin },
		{ headers: { Authorization: `Bearer ${token}` } }
	)
	return response
}
