import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// marginTop: Constants.statusBarHeight || 0,
		backgroundColor: '#fff',
		paddingHorizontal: 10,
	},
	card: {
		width: 200,
		height: 350,
		backgroundColor: '#fff',
		borderWidth: 0.2,
		borderColor: '#ccc',
	},
	cart__inner: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		justifyContent: 'center',
		padding: 10,
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
		height: 200,
		width: '100%',
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
	filterButton: {
		position: 'absolute',
		top: 20,
		right: 20,
		zIndex: 1,
	},
	categoryName: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 6,
	},
});

export default styles;
