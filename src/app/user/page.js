"use client"
import next from 'next'
import {Component, useState} from 'react'

class LifeCycleExample extends Component {
	constructor(props) {
		super(props)
		this.state = {count: 0}
		console.log("Constructor: komponen di inisiasi/dibuat")
	}

	componentDidMount() {
		console.log('ComponentDidMount: komponen berhasil di mounting')

		const countEverySecond = () => {
			this.setState({count: this.state.count + 1})
		}
		this.interval = setInterval(countEverySecond, 1000)
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("apakah komponen diupdate?", nextState.count)
		return nextState.count <= 100
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(`component did update form ${prevState.count} to ${this.state.count}`)
	}

	componentWillUnmount() {
		console.log("component will be removed")
		// clearInterval(this.interval)
	}

	render() {
		console.log("Render: Komponen di render")
		return (
			<div className='p-4 bg-gray-400 rounded'>
				<h2>Counter: {this.state.count}</h2>
			</div>
		)
	}
}

export default function User() {
	const [show, setShow] = useState(true)

	return (
		<>
		<h1>Ini halaman User</h1>
		<button onClick={() => setShow(!show)} className='bg-red-400 shadow-lg text-white p-2 rounded'>toggle component</button>

		{show && <LifeCycleExample />}
		</>
	)
}