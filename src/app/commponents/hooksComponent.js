'use client'

import {useState, useEffect, createContext, useContext, useReducer} from 'react'
import clsx from 'clsx'


function DataFetcher() {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

				if (!response.ok) {
					throw new Error(`Http error. status: ${response.status}`)
				}

				const data = await response.json()
				setData(data)
			} catch (error) {
				setError(error)
				console.log("Error fetching data: ", error)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	if (loading) {
		return <p>Loading... Please wait.</p>
	}

	if (error) {
		return <p>Error: {error.message}</p>
	}

	return (
		<div>
			<h2>Data From aPI:</h2>
			<p>Title: {data.title}</p>
			<p>Body: {data.body}</p>
		</div>
	)
}

const ThemeContext = createContext()
function ThemeProvider({children}) {
	const [theme, setTheme] = useState('light')

	const toggleTheme = () => {
		setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
	}

	const value = {
		theme, toggleTheme
	}

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	)
}

function useTheme() {
	return useContext(ThemeContext)
}

function ThemeSwitcher() {
	const {theme, toggleTheme} = useTheme()

	return (
		<button onClick={toggleTheme} className='py-2 px-4 rounded bg-blue-50 text-white hover:bg-blue-700'>Switch to {theme === 'light' ? 'Dark' : 'Light'} mode</button>
	)
}

function ThemedComponent() {
	const {theme} = useTheme()
	return (
		<div className={clsx(`p-4 rounded shadow-md ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}`)}>
				<p>this is a themed components</p>
			</div>
	)
}

//reducer
function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return {count: state.count + 1}
		case 'decrement':
			return {count: state.count - 1}
		case 'reset':
			return {count: 0}
		case 'set':
			return {count: action.payload}
		default:
			throw new Error(`Action type: ${action.type}`)
	}
}

const initialState = {count: 0}
function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<div>
			<p>Count: {state.count}</p>
			<button onClick={() => dispatch({type: 'increment'})} className='py-2 px-4 rounded bg-green-500 text-white hover:bg-green-700'>Increment</button>
			<button onClick={() => dispatch({type: 'decrement'})} className='py-2 px-4 rounded bg-red-500 text-white hover:bg-red-700'>Decrement</button>
			<button onClick={() => dispatch({type: 'reset'})} className='py-2 px-4 rounded bg-gray-500 text-white hover:bg-gray-700'>Reset</button>
			<button onClick={() => dispatch({type: 'set', payload: 100})} className='py-2 px-4 rounded bg-gray-500 text-white hover:bg-gray-700'>Add to 100</button>
		</div>
	)
}

function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			console.error(error)
			return initialValue
		}
	})

	useEffect(() => {
		try {
			const valueToStore = storedValue instanceof Function ? storedValue(storedValue) : storedValue
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			console.error(error)
		}
	}, [key, setStoredValue])

	return [storedValue, setStoredValue]
}

export  {DataFetcher, ThemeProvider, ThemeSwitcher, ThemedComponent, Counter, useLocalStorage}