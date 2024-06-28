import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import {
	View,
	Text,
	FlatList,
	Image,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { formatCash, calculateDiscount } from '../../ultils';

const FilterProductsScreen = (props) => {
	const { categoryId } = props.route.params;
	const availableProducts = useSelector(
		(state) => state.product.filterProducts
	);
	// console.log('log: ', availableProducts);

	const renderItem = ({ item }) => (
		<TouchableOpacity
			key={item.id}
			style={styles.box}
			onPress={() =>
				props.navigation.navigate('Detail', { productId: item.id })
			}
		>
			<View style={styles.cart_inner}>
				<Image style={styles.image} source={{ uri: item.image }} />
			</View>
			<View style={styles.cart__content}>
				<Text numberOfLines={2} ellipsizeMode='tail' style={styles.text}>
					{item.name}
				</Text>
				{item.price && item.sale && item.price > item.sale ? (
					<View style={{ marginTop: 6 }}>
						<Text style={styles.cost}>
							{formatCash(item.sale)} {item.unit}
						</Text>
						<View
							style={{ flexDirection: 'row', justifyContent: 'space-between' }}
						>
							<Text style={styles.original_price}>
								{formatCash(item.price)} {item.unit}
							</Text>
							<Text style={styles.cost_dis_per}>
								{calculateDiscount(item.price, item.sale).toFixed(0)}%
							</Text>
						</View>
						<View style={styles.evaluate}>
							<View style={styles.ratingContainer}>
								{[1, 2, 3, 4, 5].map((star) => (
									<Ionicons
										key={star}
										name={star <= item.rating ? 'star' : 'star-outline'}
										size={16}
										color='#fbc02d'
										style={styles.starIcon}
									/>
								))}
							</View>
						</View>
					</View>
				) : (
					<View style={{ marginTop: 6 }}>
						<Text style={styles.cost}>
							{formatCash(item.price)} {item.unit}
						</Text>
						<View style={styles.evaluate}>
							<View style={styles.ratingContainer}>
								{[1, 2, 3, 4, 5].map((star) => (
									<Ionicons
										key={star}
										name={star <= item.rating ? 'star' : 'star-outline'}
										size={16}
										color='#fbc02d'
										style={styles.starIcon}
									/>
								))}
							</View>
						</View>
					</View>
				)}
			</View>
		</TouchableOpacity>
	);

	const getItemCount = () => availableProducts.length;

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					paddingVertical: 10,
					marginBottom: 20,
					borderBottomColor: '#ccc',
					borderBottomWidth: 1,
				}}
			>
				<Text style={{ fontSize: 14, color: '#ee4d2f', fontWeight: 500 }}>
					(Tất cả {getItemCount()} sản phẩm)
				</Text>
			</View>

			<FlatList
				data={availableProducts}
				renderItem={renderItem}
				numColumns='2'
				scrollEnabled={true}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.id}
				ListEmptyComponent={() => (
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: '#f5f5f5',
						}}
					>
						<Image
							style={{
								width: 134,
								height: 134,
							}}
							source={require('../../assets/NotFound/a60759ad1dabe909c46a.png')}
						/>
						<Text style={{ padding: 10, fontSize: 18 }}>
							Không tìm thấy kết quả nào
						</Text>
						<Text style={{ padding: 10, fontSize: 16, color: '#0000008a' }}>
							Hãy thử sử dụng các từ khóa chung chung hơn
						</Text>
					</View>
				)}
				contentContainerStyle={{ paddingBottom: 20 }}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		height: 'auto',
		// justifyContent: 'center',
		// alignItems: 'center',
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
		height: 200,
		width: '100%',
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
});

export default FilterProductsScreen;
