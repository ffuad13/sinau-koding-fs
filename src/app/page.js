import React from "react";

const App = () => {
	// return React.createElement("h1", null, "Hello, no JSX") //tanpa jsx
	// return <h1>Hello, saya JSX</h1> //dengan jsx

	// const nama = 'Faizul'
	// const umur = '17'

	// const calculateSum = (a, b) => a + b
	const UserStatus = ({isLoggedIn}) => {
		return (
			<div>
				{isLoggedIn && <p>Selamat datang, user!</p>}
				{!isLoggedIn && <p>Silahkan Login</p>}
			</div>
		)
	}

	const UserList = ({users}) => {
		return (
			<ul>
				{users.length > 0 ? (
					users.map((user, index) => <li key={index}>{user}</li>)
				) : (
					<p>User not found</p>
				)}
			</ul>
		)
	}

	const statusFromDB = false
	const dataUserFromDB = ['Aris', 'Budi', 'Joko', 'Santoso', 'Helmi']

	//components greeting
	const Greetings = (props) => {
		const myArray = ['Sepatu', 'tas', 'dompet', 'Topi']
		const [a, ...sisanya] = myArray
		const {name, age, hobby} = props
		return (
			<>
		<h1>Halo {name}, selamat datang</h1>
		<p>Hobi anda adalah {hobby}</p>
		<p>Umur anda {age}</p>
		<p>Anda senang mengoleksi {a} dan sudah memiliki {sisanya}</p>
			</>
	)
	}

	return (
		<>
		{/* singe child */}
		<h1>Single child element</h1>

		{/* fragment jsx */}
		<>
			<h2>Using fragment</h2>
			<p>this is inside react fragment</p>
		</>

		<div>
			<br></br>
			<h2>Using div</h2>
			<p>I am using div</p>
			<br></br>
		</div>
		<div>
			<Greetings name="Faizul" age="23" hobby="Membaca"/>
		</div>
		<div>
			<UserStatus isLoggedIn={statusFromDB}/>
			<h2>User List</h2>
			<UserList users={dataUserFromDB}/>
		</div>
		</>
	)
}

export default App