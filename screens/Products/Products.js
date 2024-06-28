import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
	View,
	Text,
	FlatList,
	Image,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	ActivityIndicator,
} from 'react-native';
import { useSelector } from 'react-redux';
import Searchbar from '../../components/Searchbar';
import ScrollTop from '../../components/ScrollTop';
import { formatCash, calculateDiscount } from '../../ultils';

const Products = (props) => {
	const data = useSelector((state) => state.product.products);

	const [searchTerm, setSearchTerm] = useState('');
	const [filteredProduct, setFilteredProduct] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);

	const ITEMS_PER_PAGE = 10;

	useEffect(() => {
		// Loai bo khoang trang thua
		const searchTermCleaned = searchTerm
			.replace(/\s+/g, ' ')
			.trim()
			.toLowerCase();

		const filtered = data.filter((product) =>
			product.name.toLowerCase().includes(searchTermCleaned)
		);
		setFilteredProduct(filtered.slice(0, ITEMS_PER_PAGE));
		setCurrentPage(1);
		setHasMore(filtered.length > ITEMS_PER_PAGE);
	}, [searchTerm, data]);

	const loadMore = () => {
		if (!hasMore || isLoading) return;

		setIsLoading(true);
		setTimeout(() => {
			// Simulating an API call delay
			const start = currentPage * ITEMS_PER_PAGE;
			const end = start + ITEMS_PER_PAGE;
			const newPageData = data
				.filter((product) => product.name.toLowerCase().includes(searchTerm))
				.slice(start, end);

			setFilteredProduct([...filteredProduct, ...newPageData]);
			setCurrentPage(currentPage + 1);
			setHasMore(newPageData.length === ITEMS_PER_PAGE);
			setIsLoading(false);
		}, 500);
	};

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
										name='star'
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
										name='star'
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

	const getItemCount = () => filteredProduct.length;

	return (
		<SafeAreaView style={styles.container}>
			<Searchbar onSearch={setSearchTerm} />
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					paddingVertical: 20,
				}}
			>
				<Text style={{ fontSize: 16, fontWeight: '600' }}>Tất cả sản phẩm</Text>
				<Text style={{ fontSize: 12, color: 'tomato' }}>
					({getItemCount()} sản phẩm)
				</Text>
			</View>

			<FlatList
				data={filteredProduct}
				renderItem={renderItem}
				numColumns='2'
				keyExtractor={(item) => item.id}
				scrollEnabled={true}
				showsHorizontalScrollIndicator={false}
				onEndReached={loadMore}
				onEndReachedThreshold={0.5}
				ListFooterComponent={() =>
					isLoading ? <ActivityIndicator size='large' color='#0000ff' /> : null
				}
				ListEmptyComponent={() => (
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: '#fff',
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

export default Products;
