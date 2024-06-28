import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn: false,
		user: null,
	},

	reducers: {
		login: (state, action) => {
			state.isLoggedIn = true;
			state.user = action.payload;
		},

		signUp: (state, action) => {
			state.isLoggedIn = true;
			state.user = action.payload;
		},

		logout: (state) => {
			state.isLoggedIn = false;
			state.user = null;
		},
	},
});

export const { login, logout, signUp } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
