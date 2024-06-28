import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	orders: [],
};

export const userOrdersSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		createOrder: (state, action) => {
			state.orders.push(action.payload);
		},
	},
});

export const { createOrder } = userOrdersSlice.actions;

export default userOrdersSlice.reducer;
