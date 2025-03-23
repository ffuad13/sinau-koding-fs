'use client'

import {useLocalStorage} from '@/app/commponents/hooksComponent'

function StorageLocal() {
	const [name, setName] = useLocalStorage('my-name', 'Guest')

	return (
		<div>
			<p>Hello, {name}</p>
			<input type="text" value={name} onChange={event => setName(event.target.value)} placeholder='Masukkan nama anda'/>
		</div>
	)
}

export {StorageLocal}