import { createSlice, createSelector } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
		paymentStatus: null,
		checkoutMethod: null,
		orders: [],
		user: {
			name: '',
			email: '',
			phone: '',
			address: '',
		},
	},

	reducers: {
		addToCart: (state, action) => {
			// Kt Cart trong??
			const itemInCart = state.cart.find(
				(item) =>
					item.id == action.payload.id &&
					item.size == action.payload.size &&
					item.color == action.payload.color
			);

			if (itemInCart) {
				itemInCart.quantity++;
			} else {
				state.cart.push({
					...action.payload,
					quantity: 1,
				});
			}
		},

		removeFromCart: (state, action) => {
			const removeFromCart = state.cart.filter(
				(item) => item.id !== action.payload.id
			);

			state.cart = removeFromCart;
		},

		incrementQuantity: (state, action) => {
			const itemInCart = state.cart.find(
				(item) => item.id == action.payload.id
			);
			itemInCart.quantity++;
		},

		decrementQuantity: (state, action) => {
			const itemInCart = state.cart.find(
				(item) => item.id == action.payload.id
			);
			if (itemInCart.quantity == 1) {
				const removeFromCart = state.cart.filter(
					(item) => item.id !== action.payload.id
				);

				state.cart = removeFromCart;
			} else {
				itemInCart.quantity--;
			}
		},

		setUserInfo: (state, action) => {
			state.user = action.payload;
		},

		checkout: (state, action) => {
			function generateOrderId() {
				return 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
			}

			const totalAmount = state.cart.reduce((total, item) => {
				const price = item.sale
					? parseFloat(item.sale)
					: parseFloat(item.price);
				return total + price * item.quantity;
			}, 0);

			const newOrder = {
				orderId: generateOrderId(),
				items: [...state.cart],
				totalAmount,
				checkoutMethod: action.payload.checkoutMethod,
				date: new Intl.DateTimeFormat('vi-VN', {
					year: 'numeric',
					month: '2-digit',
					day: '2-digit',
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
				}).format(new Date()),
				user: { ...state.user },
			};
			state.orders.push(newOrder);
			state.cart = [];
			state.paymentStatus = 'success';
			state.checkoutMethod = action.payload.checkoutMethod;
		},

		setPaymentStatus: (state, action) => {
			state.paymentStatus = action.payload;
		},

		cancelOrder: (state, action) => {
			state.orders = state.orders.filter(
				(order) => order.orderId !== action.payload
			);
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	incrementQuantity,
	decrementQuantity,
	checkout,
	setUserInfo,
	setPaymentStatus,
	cancelOrder,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state) => state.cart.cart;
export const selectTotalAmount = createSelector([selectCart], (cart) =>
	cart.reduce((total, item) => {
		const price = item.sale ? parseFloat(item.sale) : parseFloat(item.price);
		return total + price * item.quantity;
	}, 0)
);

export const selectOrders = (state) => state.cart.orders;
