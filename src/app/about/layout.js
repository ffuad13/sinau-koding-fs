"use client"

import Aboutnav from '@/app/components/aboutNav'

const AboutLayout = ({children}) => {
	return (
		<div className='flex h-screen bg-gray-100'>
			<Aboutnav />
			<main className='flex-1 p4'>
				{children}
			</main>
		</div>
	)
}

export default AboutLayout