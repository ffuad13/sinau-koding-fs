'use client'

import {useState, useEffect} from 'react'

export default function Greeting({name}) {
	const [greeting, setGreeting]= useState('Loading...')
	const [isLoading, setIsloading]= useState(true)

	useEffect(() => {
		const fetchData = async () => {
			await new Promise(resolve => setTimeout(resolve, 500))
			setGreeting(`Hello, ${name}`)
			setIsloading(false)
		}

		fetchData()
	}, [name])

	return (
		<div className='p-4 border rounded shadow-md'>
			{isLoading ? (
				<p data-testid='loading-message'>{greeting}</p>
			) : (
				<p data-testid='greeting-message'>{greeting}</p>
			)}
			<p data-testid='additional-info'>Some additional info here.</p>
		</div>
	)
}