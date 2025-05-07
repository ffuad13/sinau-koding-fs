'use client'

import {useState, useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {useSelector, useDispatch} from 'react-redux'
import {selectIsAuthenticated} from '@/store/userSlice'
import { store } from '@/store/store'

function AuthGuard({children}) {
	// const [isAuthenticated, setIsAuthenticated] = useState(false)
	const isAuthenticated = useSelector(selectIsAuthenticated)
  const [isLoading, setIsloading] = useState(true);
	const router = useRouter()
	const dispatch = useDispatch()

	// useEffect(() => {
	// 	const token = localStorage.getItem('token')

	// 	if (token) {
	// 		setIsAuthenticated(true)
	// 	} else {
	// 		setIsAuthenticated(false)
	// 		router.push('/')
	// 	}
	// 	setIsloading(false)
	// }, [router])
	useEffect(() => {
		if (!isAuthenticated) {
			console.log(`not authenticated`)
			console.log('loggggggg', store.getState())
			router.push('/')
		}
	}, [isAuthenticated, router, dispatch])

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (!isAuthenticated) {
		return <div>Redirectting...</div>
	}

	return <>{children}</>

}

export default AuthGuard