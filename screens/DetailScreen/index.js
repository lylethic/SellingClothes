import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Constants from 'expo-constants';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	FlatList,
	TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { themVaoYeuThich } from '../../store/ProductSlice';
import { Alert } from 'react-native';
import { addToCart } from '../../store/CartReducer';
import { formatCash, calculateDiscount } from '../../ultils';
import styles from './styles';

const DetailScreen = (props) => {
	const dispatch = useDispatch();

	const { productId } = props.route.params;

	const [showMessage, setShowMessage] = useState(false);

	const [isFavorite, setIsFavorite] = useState(false);

	const [selectedColor, setSelectedColor] = useState('');
	const [selectedSize, setSelectedSize] = useState('');
	const [quantity, setQuantity] = useState(1);

	const availableProducts = useSelector((state) => state.product.products);
	const product = availableProducts.find((item) => item.id === productId);

	const related = availableProducts.filter(
		(item) => item.categoryId === product.categoryId && item.id !== productId
	);
	// console.log(related);

	// Get the favourites from store redux
	const favorites = useSelector((state) => state.product.favoritesProducts);

	useEffect(() => {
		const isProductFavorited = favorites.some(
			(product) => product.id === productId
		);
		setIsFavorite(isProductFavorited);
	}, [favorites, productId]); // Update isFavorite

	const handleAddToFavorites = () => {
		dispatch(themVaoYeuThich(productId));
		setIsFavorite(!isFavorite); // Update local state
	};

	const handleColorSelection = (color) => {
		setSelectedColor(color);
	};

	const handleSizeSelection = (size) => {
		setSelectedSize(size);
	};

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const addItemToCart = () => {
		if (selectedSize && selectedColor) {
			const itemToAdd = {
				id: product.id,
				name: product.name,
				size: selectedSize,
				color: selectedColor,
				image: product.image,
				price: product.price,
				sale: product.sale,
				unit: product.unit,
			};

			dispatch(addToCart(itemToAdd));
			Alert.alert(' ', 'Đã thêm vào giỏ hàng.');
			setSelectedSize('');
			setSelectedColor('');
			setQuantity(1);
		} else {
			Alert.alert(' ', 'Vui lòng chọn size, màu sắc!');
		}
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.view}>
					<View
						style={{
							height: 300,
							width: '100%',
							alignItems: 'center',
						}}
					>
						<Image style={styles.image} source={{ uri: product.image }} />
					</View>
					<View
						style={{
							width: '100%',
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							backgroundColor: '#f5f5f5',
							paddingVertical: 20,
						}}
					>
						<Text style={[{ width: '80%' }, styles.text]}>{product.name}</Text>
						<TouchableOpacity
							onPress={handleAddToFavorites}
							style={{
								width: 40,
								height: 40,
								backgroundColor: '#fff',
								// padding: 10,
								borderRadius: 20,
								marginRight: 4,
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Ionicons
								name={isFavorite ? 'heart' : 'heart-outline'}
								color='red'
								size={26}
							/>
						</TouchableOpacity>
					</View>

					{/* Giá tiền ở đây */}
					{product.sale && (
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								// backgroundColor: 'red',
								width: '100%',
								paddingVertical: 10,
							}}
						>
							<Text style={styles.discountedPrice}>
								{formatCash(product.sale)} {product.unit}
							</Text>
							<Text style={styles.originalPrice}>
								{formatCash(product.price)} {product.unit}
							</Text>
						</View>
					)}
					{!product.sale && (
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								// backgroundColor: 'red',
								width: '100%',
								paddingVertical: 10,
							}}
						>
							<Text style={styles.discountedPrice}>
								{formatCash(product.price)} {product.unit}
							</Text>
						</View>
					)}

					{/* SIZE HERE */}
					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							alignItems: 'center',
							width: '100%',
							paddingVertical: 10,
							borderBottomWidth: 0.4,
							borderColor: '#ccc',
						}}
					>
						<Text style={[{ width: '20%' }, styles.text]}>Size: </Text>
						{product.size.map((key, index) => (
							<TouchableOpacity
								style={[
									{
										padding: 10,
										backgroundColor: '#fff',
										borderWidth: 0.4,
										borderColor: '#ccc',
										marginRight: 10,
										width: 40,
										height: 40,
										alignItems: 'center',
										justifyContent: 'center',
									},
									selectedSize === key && { backgroundColor: '#ccc' },
								]}
								key={index}
								onPress={() => handleSizeSelection(key)}
							>
								<Text style={{ fontSize: 12 }}>{key}</Text>
							</TouchableOpacity>
						))}
					</View>

					{/* Color here */}
					<View
						style={{
							width: '100%',
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							marginVertical: 10,
							paddingVertical: 10,
							borderBottomWidth: 0.4,
							borderColor: '#ccc',
						}}
					>
						<Text style={[{ width: '20%' }, styles.text]}>Màu sắc</Text>
						<View
							style={{
								display: 'flex',
								flex: 1,
								flexDirection: 'row',
								flexWrap: 'wrap',
							}}
						>
							{product.colorName.map((color, index) => (
								<TouchableOpacity
									style={[
										{
											// flex: 1,
											flexDirection: 'row',
											alignItems: 'center',
											justifyContent: 'center',
											borderWidth: 0.4,
											borderColor: '#ccc',
											padding: 10,
											marginLeft: 10,
											marginTop: 10,
										},
										selectedColor === color && { backgroundColor: '#ccc' },
									]}
									key={index}
									onPress={() => handleColorSelection(color)}
								>
									{/* <Image
										style={{ width: 40, height: 40 }}
										source={{ uri: product.image }}
									/> */}
									<Text style={{ textTransform: 'uppercase' }}>{color}</Text>
								</TouchableOpacity>
							))}
						</View>
					</View>

					{/* Description here */}
					<View
						style={{
							width: '100%',
							paddingVertical: 10,
							marginBottom: 80,
							marginBottom: 10,
						}}
					>
						<Text style={[{}, styles.text]}>Mô tả</Text>
						{product.desc.map((item, index) => (
							<View style={styles.desc} key={index}>
								<Text
									style={{
										marginBottom: 10,
										flex: 1,
										flexWrap: 'wrap',
										color: '#000',
									}}
								>
									Kích cỡ: {item.size}
								</Text>
								<Text
									style={{
										flex: 1,
										flexWrap: 'wrap',
										color: '#000',
										textAlign: 'justify',
										// marginBottom: 10,
									}}
								>
									Cấu trúc sản phẩm: {item.productStructure}
								</Text>
								<Text
									style={{
										color: '#000',
										flex: 1,
										flexWrap: 'wrap',
										marginBottom: 10,
										textAlign: 'justify',
									}}
								>
									Màu sắc: {item.color}
								</Text>
								<Text
									style={{
										color: '#000',
										flex: 1,
										flexWrap: 'wrap',
										marginBottom: 10,
										textAlign: 'justify',
									}}
								>
									Mặt trước: {item.front}
								</Text>
							</View>
						))}
						<View
							style={{
								flex: 1,
							}}
						>
							<View
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									padding: 20,
								}}
							>
								<Text
									style={{
										fontSize: 18,
										color: '#000',
										fontWeight: '600',
									}}
								>
									Sản phẩm liên quan
								</Text>
							</View>
						</View>

						{/* Sửa */}
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								flexWrap: 'wrap',
								alignItems: 'center',
								justifyContent: 'space-between',
								marginBottom: 40,
							}}
						>
							{related.length > 0 ? (
								related.map((item) => (
									<TouchableOpacity
										key={item.id}
										style={styles.box}
										onPress={() =>
											props.navigation.navigate('Detail', {
												productId: item.id,
											})
										}
									>
										<View style={styles.cart_inner}>
											<Image
												style={styles.image2}
												source={{ uri: item.image }}
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
													<View>
														<View
															style={{
																flexDirection: 'row',
																justifyContent: 'space-between',
															}}
														>
															<Text style={styles.original_price}>
																{formatCash(item.price)} {item.unit}
															</Text>
															<Text style={styles.cost_dis_per}>
																{calculateDiscount(
																	item.price,
																	item.sale
																).toFixed(0)}
																%
															</Text>
														</View>
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
								))
							) : (
								<Text style={{ padding: 10, fontSize: 18 }}>
									Không có sản phẩm liên quan nào.
								</Text>
							)}
						</View>
					</View>
				</View>
			</ScrollView>

			{/* BUY NOW OR ADD TO CART */}

			<View
				style={{
					bottom: 0,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					// marginHorizontal: 60,
					width: 200,
					backgroundColor: '#fff',
				}}
			>
				<TouchableOpacity
					style={{
						display: 'flex',
						width: '100%',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#ee4d2d',
						padding: 10,
						borderWidth: 1,
						borderColor: '#ee4d2d',
						borderRadius: 10,
					}}
					onPress={addItemToCart}
				>
					<Ionicons name='cart-outline' color='#fff' size={20} />
					<Text style={{ fontSize: 16, color: '#fff' }}>Thêm vào giỏ hàng</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default DetailScreen;
