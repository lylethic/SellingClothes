import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	flatListContent: {},
	view: {
		alignItems: 'center',
		borderRadius: 10,
	},
	box: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 13,
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 100,
		height: 100,
		marginRight: 10,
		marginLeft: 10,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
		elevation: 3,
	},
	icon: {
		width: 50,
		height: 50,
	},
	banner: {
		width: '100%',
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bannerText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fff',
		textShadowColor: 'rgba(0, 0, 0, 0.5)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		paddingHorizontal: 20,
		marginTop: 20,
	},
	categoryItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 15,
		marginRight: 10,
		borderRadius: 10,
		minWidth: 120,
	},
	categoryName: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	productList: {
		marginTop: 10,
		paddingHorizontal: 20,
	},
	productItem: {
		width: 150,
		marginRight: 10,
		borderRadius: 10,
		overflow: 'hidden',
	},
	productImage: {
		width: '100%',
		height: 150,
	},
	productInfo: {
		padding: 10,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
	productName: {
		fontSize: 13,
		fontWeight: 'bold',
		color: '#fff',
	},
	productPrice: {
		fontSize: 14,
		color: '#fff',
	},
	saleBadge: {
		position: 'absolute',
		top: 5,
		left: 5,
		backgroundColor: 'red',
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 10,
		color: '#fff',
		fontWeight: 'bold',
	},
	reviewItem: {
		marginBottom: 10,
		padding: 10,
		backgroundColor: '#f5f5f5',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
		elevation: 3,
		marginHorizontal: 4,
	},
	reviewText: {
		fontSize: 13,
	},
	reviewAuthor: {
		fontSize: 14,
		fontWeight: 'bold',
		marginTop: 5,
		marginLeft: 20,
	},
	pagination: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	pageButton: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
		marginHorizontal: 5,
		backgroundColor: '#ccc',
	},
	activePageButton: {
		backgroundColor: '#007bff',
	},
	pageButtonText: {
		color: '#fff',
	},
});

export default styles;
