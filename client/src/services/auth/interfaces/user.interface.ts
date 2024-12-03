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

export interface IRegisterUser {
	name: string
	username: string
	email: string
	password: string
}

export interface ILoginUser {
	email: string
	password: string
}
