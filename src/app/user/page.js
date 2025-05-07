import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'

export default function AuthUser() {
	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='bg-white p-8 rounded shadow-md w-96'>
				<h2 className='text-2xl font-semibold mb-4 text-center text-black'>User Authentication</h2>
				<RegisterForm />
				<LoginForm />
			</div>
		</div>
	)
}