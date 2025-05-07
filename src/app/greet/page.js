import AuthGuard from '@/components/AuthGuard'
import Greeting from '@/components/Greeting'

export default function Greet() {
	return (
		<AuthGuard>
			<div>
			<Greeting name='Faizul Fuadi'/>
			</div>
		</AuthGuard>
	)
}