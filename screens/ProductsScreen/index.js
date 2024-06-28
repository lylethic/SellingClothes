import React from 'react';
import Constants from 'expo-constants';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Image,
	StyleSheet,
	SafeAreaView,
} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { clothes, categories } from '../../dummydata/clothes';
import { calculateDiscount, formatCash } from '../../ultils';
import styles from './styles';

const ProductsScreen = (props) => {
	const { categoryId } = props.route.params;
	// const availableProducts = useSelector(
	// 	(state) => state.product.filterProducts
	// );
	// const data = availableProducts.filter(
	// 	(item) => item.categoryId === categoryId
	// );
	const data = clothes.filter((item) => item.categoryId === categoryId);
	const category = categories.find((cat) => cat.id === categoryId);
	const categoryName = category ? category.name : 'Unknown Category';
	const product = data.length;

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ alignItems: 'center' }}>
				<Text style={styles.categoryName}>{categoryName}</Text>
				<Text style={{ color: '#ee4d2d', fontSize: 16, paddingBottom: 10 }}>
					({product} sản phẩm)
				</Text>
			</View>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.card}
						onPress={() =>
							props.navigation.navigate('Detail', { productId: item.id })
						}
					>
						<View style={styles.cart__inner}>
							<Image style={styles.image} source={{ uri: item.image }} />
						</View>
						<View style={styles.cart__content}>
							<Text numberOfLines={2} ellipsizeMode='tail' style={styles.text}>
								{item.name}
							</Text>
							<View
								style={{
									marginTop: 6,
								}}
							>
								{item.price && item.sale && item.price > item.sale ? (
									<View>
										<Text style={styles.cost}>
											{formatCash(item.sale)} {item.unit}
										</Text>
										<View
											style={{
												display: 'flex',
												justifyContent: 'space-between',
												flexDirection: 'row',
											}}
										>
											<Text style={styles.original_price}>
												{formatCash(item.price)} VND
											</Text>
											<Text style={styles.cost_dis_per}>
												-{calculateDiscount(item.price, item.sale).toFixed(0)}%
											</Text>
										</View>
									</View>
								) : (
									<View style={{ marginBottom: 12 }}>
										<Text style={styles.cost}>
											{formatCash(item.price)} {item.unit}
										</Text>
									</View>
								)}
								<View>
									<View style={styles.evaluate}>
										<View style={styles.ratingContainer}>
											<Ionicons
												name='star'
												size={16}
												color='#fbc02d'
												style={styles.starIcon}
											/>
											<Ionicons
												name='star'
												size={16}
												color='#fbc02d'
												style={styles.starIcon}
											/>
											<Ionicons
												name='star'
												size={16}
												color='#fbc02d'
												style={styles.starIcon}
											/>
											<Ionicons
												name='star'
												size={16}
												color='#fbc02d'
												style={styles.starIcon}
											/>
											<Ionicons
												name='star-outline'
												size={16}
												color='#fbc02d'
												style={styles.starIcon}
											/>
										</View>
									</View>
								</View>
							</View>
						</View>
					</TouchableOpacity>
				)}
				numColumns='2'
				showsHorizontalScrollIndicator={true}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
};

export default ProductsScreen;
