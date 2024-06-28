import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		// marginTop: Constants.statusBarHeight || 0,
	},
	view: {
		height: '100%',
		alignItems: 'center',
		paddingHorizontal: 10,
		backgroundColor: '#f8f9fd',
	},
	text: {
		fontSize: 16,
		color: '#000',
	},
	image: {
		width: 250,
		height: 250,
		objectFit: 'cover',
	},
	desc: {
		display: 'flex',
		borderBottomWidth: 0.4,
		borderColor: '#ccc',
	},
	originalPrice: {
		fontSize: 13,
		fontWeight: 'bold',
		textDecorationLine: 'line-through',
		color: 'black',
	},
	discountedPrice: {
		fontSize: 15,
		fontWeight: 'bold',
		color: 'red',
		marginRight: 10,
	},

	cart_inner: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		justifyContent: 'center',
	},
	cart__content: {
		width: '100%',
		height: 'auto',
		padding: 10,
	},
	text: {
		fontSize: 14,
		color: '#383838',
		textAlign: 'left',
	},
	image2: {
		objectFit: 'cover',
		height: 200,
		width: '100%',
	},
	box: {
		width: 190,
		height: 320,
		borderWidth: 0.2,
		borderColor: '#ccc',
		backgroundColor: '#fff',
		marginHorizontal: 2,
		marginBottom: 6,
	},
	icons: {
		width: 50,
		textAlign: 'center',
		backgroundColor: 'green',
		borderRadius: 10,
		paddingVertical: 2,
	},
	cost: {
		fontWeight: '500',
		fontSize: 14,
		marginVertical: 2,
	},
	original_price: {
		fontSize: 10,
		textDecorationLine: 'line-through',
	},
	cost_dis_per: {
		fontSize: 12,
		width: 40,
		backgroundColor: '#feeeea',
		color: 'red',
		textAlign: 'center',
	},
});

export default styles;
