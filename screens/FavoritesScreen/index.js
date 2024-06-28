import React from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	Image,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { formatCash, calculateDiscount } from '../../ultils';
import { themVaoYeuThich } from '../../store/ProductSlice';

const FavoritesScreen = (props) => {
	const data = useSelector((state) => state.product.favoritesProducts);
	const dispatch = useDispatch();

	const handleRemoveFavorite = (productId) => {
		dispatch(themVaoYeuThich(productId));
	};

	// Render View
	if (data.length !== 0) {
		return (
			<View
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<View style={styles.header}>
					<Text style={{ fontSize: 16 }}>Sản phẩm yêu thích của bạn</Text>
				</View>
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<SafeAreaView style={styles.container}>
							<View
								style={{
									flex: 1,
									width: '100%',
									marginBottom: 10,
									backgroundColor: '#fff',
									// padding: 10,
								}}
							>
								<TouchableOpacity
									key={item.id}
									style={{
										flex: 1,
										height: 350,
										marginBottom: 10,
										borderRadius: 20,
										alignItems: 'center',
										justifyContent: 'center',
										padding: 10,
									}}
									onPress={() =>
										props.navigation.navigate('Detail', {
											productId: item.id,
										})
									}
								>
									<View style={styles.cart_inner}>
										<Ionicons
											style={styles.heart}
											name='close'
											color='#000'
											size={30}
											onPress={() => handleRemoveFavorite(item.id)}
										/>
										{item.price && item.sale && item.price > item.sale ? (
											<Text style={styles.cost_dis_per}>
												-{calculateDiscount(item.price, item.sale).toFixed(0)}%
											</Text>
										) : (
											<></>
										)}
										<Image
											style={styles.image2}
											source={{ uri: item.image }}
											resizeMode='cover'
										/>
									</View>
									<View style={styles.cart__content}>
										<Text
											numberOfLines={2}
											ellipsizeMode='tail'
											style={styles.text}
										>
											{item.name}
										</Text>
										{/* Giá gốc, giảm, discount */}
										{item.price && item.sale && item.price != item.sale ? (
											<View style={{ marginTop: 6 }}>
												<Text style={styles.cost}>
													{formatCash(item.sale)} {item.unit}
												</Text>
												<View
													style={{
														flexDirection: 'row',
														justifyContent: 'space-between',
													}}
												>
													<Text style={styles.original_price}>
														{formatCash(item.price)} {item.unit}
													</Text>
												</View>
											</View>
										) : (
											<View style={{ marginTop: 6 }}>
												<Text style={styles.cost}>
													{formatCash(item.price)} {item.unit}
												</Text>
											</View>
										)}
									</View>
								</TouchableOpacity>
							</View>
							{/* ADD TO CART */}
							<View
								style={{
									position: 'absolute',
									bottom: 40,
									right: 14,
									zIndex: 999,
									padding: 10,
									backgroundColor: '#ee4d2d',
									width: 50,
									height: 50,
									borderRadius: 30,
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<TouchableOpacity
									style={{
										width: '100%',
										alignItems: 'center',
										justifyContent: 'center',
									}}
									onPress={() =>
										props.navigation.navigate('Detail', {
											productId: item.id,
										})
									}
								>
									<Ionicons name='cart-outline' color='#fff' size={30} />
								</TouchableOpacity>
							</View>
						</SafeAreaView>
					)}
					// numColumns='2'
					// showsHorizontalScrollIndicator={false}
				/>
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				<Image
					style={styles.imagenotfound}
					source={require('../../assets/NotFound/a60759ad1dabe909c46a.png')}
				/>
				<Text style={{ fontSize: 20, padding: 10 }}>
					Không có sản phẩm yêu thích
				</Text>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#ccc',
	},
	heart: {
		position: 'absolute',
		right: '4%',
		top: '4%',
		color: 'red',
		zIndex: 999,
	},
	header: {
		padding: 10,
		backgroundColor: '#fff',
	},
	imagenotfound: {
		width: 134,
		height: 134,
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
		fontSize: 16,
		fontWeight: 'bold',
		textDecorationLine: 'line-through',
		color: 'black',
	},
	discountedPrice: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'red',
		marginRight: 10,
	},

	cart_inner: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		// borderRadius: 10,
		justifyContent: 'center',
		position: 'relative',
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#ccc',
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
		height: 200,
		width: 200,
	},
	box: {
		width: 190,
		height: 320,
		borderWidth: 0.2,
		borderColor: '#ccc',
		backgroundColor: '#fff',
		marginHorizontal: 2,
		marginBottom: 6,
		backgroundColor: 'red',
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
		fontSize: 18,
		marginVertical: 2,
		color: '#ee4d2d',
	},
	original_price: {
		fontSize: 16,
		textDecorationLine: 'line-through',
	},
	cost_dis_per: {
		fontSize: 18,
		padding: 10,
		flex: 1,
		zIndex: 1,
		borderRadius: 50,
		backgroundColor: '#ee4d2d',
		color: '#fff',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: 10,
		left: '20%',
	},
});

export default FavoritesScreen;
