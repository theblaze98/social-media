'use client'
import { toast } from 'react-hot-toast'

export default function Home() {
	return (
		<main>
			<div className='flex flex-col items-center justify-center h-screen'>
				<h1>Welcome to Next.js!</h1>
				<button onClick={() => toast.success('Hello')}>Success</button>
			</div>
		</main>
	)
}
