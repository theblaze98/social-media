'use client'
import { Toaster } from 'react-hot-toast'

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			{children}
			<Toaster
				position='bottom-right'
				reverseOrder={false}
				gutter={8}
				containerClassName=''
				containerStyle={{}}
				toastOptions={{
					// Define default options
					className: 'bg-background text-foreground',
					duration: 5000,
				}}
			/>
		</>
	)
}
