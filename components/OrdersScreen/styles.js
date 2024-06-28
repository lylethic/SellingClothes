import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		position: 'relative',
		paddingHorizontal: 10,
	},
	cart_inner: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	cart__content: {
		width: '100%',
		height: 'auto',
		padding: 10,
	},
	text: {
		fontSize: 14,
		marginTop: 10,
		color: '#383838',
		textAlign: 'left',
	},
	image: {
		objectFit: 'cover',
		height: 100,
		width: 100,
		borderRadius: 8,
		// width: '100%',
		backgroundColor: '#ccc',
	},
	box: {
		width: 200,
		height: 350,
		borderWidth: 0.6,
		borderColor: '#ccc',
		backgroundColor: '#fff',
		marginHorizontal: 2,
		marginBottom: 4,
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
	ratingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	starIcon: {
		marginRight: 2,
	},
	checkout: {
		position: 'absolute',
		flex: 1,
		width: '100%',
		bottom: 0,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderWidth: 1,
		borderColor: '#ccc',
	},
	checkoutButtonPrimary: {
		width: 150,
		paddingVertical: 10,
		backgroundColor: '#ee4d2d',
		borderWidth: 1,
		borderColor: '#ee4d2d',
	},
	checkoutButtonSecondary: {
		width: 150,
		paddingVertical: 10,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#ee4d2d',
	},
});

export default styles;
