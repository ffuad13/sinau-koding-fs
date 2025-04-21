import "@testing-library/jest-dom"
import {render, screen, waitFor} from '@testing-library/react'
import Greeting from '@/components/Greeting'

describe("Uji coba component greeting", () => {
	it("Should render loading message", async () => {
		render(<Greeting name='Tukang Testing' />)
		const loadingMessage = screen.getByTestId('loading-message')

		expect(loadingMessage).toBeInTheDocument()
		expect(loadingMessage).toHaveTextContent('Loading...')
	})

	it('Should render when fetching done', async () => {
		render(<Greeting name='Tukang Testing' />)
		const greetingMessage = await screen.findByTestId('greeting-message', {}, {timeout: 1000})

		expect(greetingMessage).toBeInTheDocument()
		expect(greetingMessage).toHaveTextContent('Hello, Tukang Testing')
	})

	it('Should render greeting props properly', async () => {
		render(<Greeting name='Tukang Testing' />)
		const greetingMessage = await screen.findByTestId('greeting-message', {}, {timeout: 1000})

		expect(greetingMessage).toBeInTheDocument()
		expect(greetingMessage.textContent).toEqual('Hello, Tukang Testing')
	})

	it('Should return 5 when adding', () => {
		const adding = 2 + 3

		expect(adding).toBe(5)
	})
})