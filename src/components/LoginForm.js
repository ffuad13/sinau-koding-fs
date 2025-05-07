'use client'

import {useState} from 'react'
import {useRouter} from 'next/navigation'
import ky from 'ky';
import clsx from "clsx";
import {useDispatch} from 'react-redux'
import {loginSuccess} from '@/store/userSlice'
import { store } from '@/store/store';


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsloading] = useState(false);
	const router = useRouter()
	const dispatch = useDispatch()

	const handleSubmit = async (event) => {
		event.preventDefault();
    setIsloading(true);
    setMessage("");

		try {
			const response = await ky.post('http://localhost:3030/api/user/login', { json: { email, password }}).json()
			// const dataErr = response.errors[0]?.status === '400' || !response

			if (!response) {
				setMessage(response.errors[0].title || 'login failed')
			} else {
				// localStorage.setItem('token', response.data)
				dispatch(loginSuccess({user: {email: email}, token: response.data}))
				// console.log(response.message)
				console.log("state", store.getState())

				router.push('/coba')
			}
		} catch (error) {
			console.error("error during login", error);
      setMessage("Error login.");
		} finally {
			setIsloading(false)
		}
	}

	return (
			<form onSubmit={handleSubmit} className="mb-4">
				<div className="mb-2">
					<label htmlFor="loginEmail" className="block text-gray-700 text-sm font-bold mb-2">
						Email:
					</label>
					<input
						type="email"
						id="loginEmail"
						className="shadow appearance-none border rounded w-full py-2 px3 text-gray-700 leading-tight focus:outline-0 focus:shadow-amber-200"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						required
					/>
				</div>
				<div className="mb-2">
					<label htmlFor="loginPassword" className="block text-gray-700 text-sm font-bold mb-2">
						Password:
					</label>
					<input
						type="password"
						id="loginPassword"
						className="shadow appearance-none border rounded w-full py-2 px3 text-gray-700 leading-tight focus:outline-0 focus:shadow-amber-200"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						required
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-amber-300 disabled:opacity-50"
					disabled={isLoading}
				>
					{isLoading ? "Logging in..." : "Login"}
				</button>

				{message && <p className={clsx(`mt-4 text-sm ${isLoading ? 'text-green-500' : 'text-red-500'}`)}>{message}</p>}
			</form>
		);
}

export default LoginForm