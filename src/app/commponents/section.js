"use client"

import {useContext} from 'react'
import { LevelContext } from '@/app/commponents/contextLevel'


export default function Section({children}) {
	const level = useContext(LevelContext)

	return (
		<section className="section">
			<LevelContext value={level + 1}>
				{children}
			</LevelContext>
		</section>
	)
}