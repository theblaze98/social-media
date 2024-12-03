import Link from 'next/link'
import VerifyForm from './component/VerifyForm'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

export default function VerifyPage() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
			<Card className='w-11/12 max-w-md'>
				<CardHeader>
					<CardTitle className='text-2xl font-bold text-center'>
						Verify
					</CardTitle>
					<CardDescription className='text-center text-muted-foreground'>
						Verify your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<VerifyForm />
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
