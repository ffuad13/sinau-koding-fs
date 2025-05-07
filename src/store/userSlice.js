import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	isAuthenticated: false,
	user: null,
	token: null
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginSuccess: (state, action) => {
			state.isAuthenticated = true
			state.user = action.payload.user
			state.token = action.payload.token
		},
		logout: (state) => {
			state.isAuthenticated = false
			state.user = null
			state.token = null
		},
		updateUser: (state, action) => {
			state.user = {...state.user, ...action.payload}
		}
	}
})

export const {loginSuccess, logout, updateUser} = userSlice.actions
export const selectIsAuthenticated = (state) => state.user.isAuthenticated
export const selectUser = (state) => state.user.user
export const selectToken = (state) => state.user.token

export default userSlice.reducer