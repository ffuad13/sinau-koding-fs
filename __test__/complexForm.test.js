import "@testing-library/jest-dom"
import {render, screen, waitFor, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ComplexForm from '@/components/ComplexForm'

describe('Uji Coba ComplexForm component', () => {
	it('Should update filed user input', async () => {
		const consoleMock = jest.spyOn(console, 'log')
		// const alertMock = jest.spyOn(window, 'alert')

		render(<ComplexForm />)

		const firstNameInput = screen.getByLabelText('First Name:')
		await userEvent.type(firstNameInput, 'Tukang')

		const submitButton = screen.getByText('Submit')
		fireEvent.click(submitButton)

		// await waitFor(() => {
		// 	expect(alertMock).toHaveBeenCalledWith('Form submitted (check console)')
		// })

		await waitFor(() => {
			expect(consoleMock).toHaveBeenCalledWith('Form Data:', {
				firstName: 'Tukang',
				lastName: '',
				email: '',
				phoneNumber: '',
				addressLine1: '',
				addressLine2: '',
				city: '',
				state: '',
				zipCode: '',
				country: '',
				comments: ''
			})
		})

		consoleMock.mockRestore()
		// alertMock.mockRestore()
	})
})