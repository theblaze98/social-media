import Link from 'next/link'
import {
	Card,
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	CardFooter,
} from '@/components/ui/card'
import RegisterForm from './component/RegisterForm'

export default function RegisterPage() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
			<Card className='w-11/12 max-w-md'>
				<CardHeader>
					<CardTitle className='text-2xl font-bold text-center'>
						Register
					</CardTitle>
					<CardDescription className='text-center text-muted-foreground'>
						Sign up for a new account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<RegisterForm />
				</CardContent>
				<CardFooter>
					<p className='text-center text-muted-foreground'>
						Already have an account?{' '}
						<Link
							href='/login'
							className='text-muted-foreground transition-all duration-300 hover:text-blue-500'>
							Login
						</Link>
					</p>
				</CardFooter>
			</Card>
		</main>
	)
}
