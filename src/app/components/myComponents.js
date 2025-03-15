'use client'

import {Component, useState} from 'react'

export default class HelloComponent extends Component {
	render() {
		return <p>Hello From myComponents</p>
	}
}

export const LikeButton = () => {
	const [likes, setLikes] = useState(0)

	return (
		<div>
			<p>Likes: {likes}</p>
			<button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => setLikes(likes + 1)}>Like 👍</button>
		</div>
	)
}