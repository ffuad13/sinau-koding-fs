import "@testing-library/jest-dom"
import {render, screen} from '@testing-library/react'
import Coba from '@/app/coba/page'

describe('Coba page', () => {
	it('renders a heading', () => {
		render(<Coba />)

		const heading = screen.getByRole('heading', {level: 1})

		expect(heading).toBeInTheDocument()
	})
})