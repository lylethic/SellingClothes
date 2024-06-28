import { createSlice } from '@reduxjs/toolkit';
import { clothes } from '../dummydata/clothes';

const ProductSlice = createSlice({
	name: 'product',

	initialState: {
		products: clothes,
		filterProducts: clothes,
		favoritesProducts: [],
	},

	reducers: {
		//TODO
		themVaoYeuThich: (state, action) => {
			const index = state.favoritesProducts.findIndex(
				(product) => product.id === action.payload
			);
			if (index >= 0) {
				state.favoritesProducts.splice(index, 1);
			} else {
				const product = state.products.find(
					(product) => product.id === action.payload
				);
				state.favoritesProducts = state.favoritesProducts.concat(product);
			}
		},

		locSanPham: (state, action) => {
			const filters = action.payload;

			const filteredProducts = state.products.filter((product) => {
				return (
					(!filters.isNew || product.isNew) &&
					(!filters.isSale || product.isSale) &&
					(!filters.brand || product.brandId === filters.brand)
				);
			});

			return { ...state, filterProducts: filteredProducts };
		},
	},
});

export const { themVaoYeuThich, locSanPham } = ProductSlice.actions;

export default ProductSlice.reducer;
