import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './CartReducer';
import authSlice from './authSlice';
import userOrdersSlice from './userOrdersSlice';
import ProductSlice from './ProductSlice';

export default configureStore({
	reducer: {
		//
		product: ProductSlice,
		cart: CartReducer,
		auth: authSlice,
		order: userOrdersSlice,
	},
});
