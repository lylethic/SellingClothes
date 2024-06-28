import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	View,
	Text,
	SafeAreaView,
	FlatList,
	Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import {
	removeFromCart,
	incrementQuantity,
	decrementQuantity,
	selectTotalAmount,
} from '../../store/CartReducer';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { createOrder } from '../../store/userOrdersSlice';
import { formatCash, calculateDiscount } from '../../ultils';
import styles from './styles';

const CartScreen = (props) => {
	const dispatch = useDispatch();
	const cartItem = useSelector((state) => state.cart.cart);
	// console.log(cartItem);
	const totalAmount = useSelector(selectTotalAmount);

	const handleRemoveItemFromCart = (cartItem) => {
		dispatch(removeFromCart(cartItem));
		// console.log(cartItem);
	};

	const handleIncrement = (item) => {
		dispatch(incrementQuantity(item));
	};

	const handleDecrement = (item) => {
		dispatch(decrementQuantity(item));
	};

	// Handle Payment
	const handlePayment = (method) => {
		const order = {
			items: cartItem,
			totalAmount,
			paymentMethod: method,
			status: method === 'COD' ? 'Pending' : 'Paid',
			date: new Date().toISOString(),
		};

		dispatch(createOrder(order));
		if (method === 'VNPay') {
			// Handle VNPay payment logic here
			// For example, navigate to a VNPay payment screen
			props.navigation.navigate('VNPayPayment', { order });
		} else {
			// Handle COD
			alert('Order placed successfully with COD!');
		}
	};

	const renderItem = ({ item, index }) => (
		<View style={styles.container}>
			<View
				style={{
					// padding: 10,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: 400,
					borderBottomWidth: 0.4,
					position: 'relative',
				}}
				key={index}
			>
				<TouchableOpacity
					style={{
						position: 'absolute',
						justifyContent: 'center',
						alignItems: 'center',
						top: 0,
						right: 20,
						backgroundColor: '#f5f5f5',
						width: 30,
						height: 30,
						marginTop: 10,
						zIndex: 999,
					}}
					onPress={() => handleRemoveItemFromCart(item)}
				>
					<AntDesign name='close' size={20} color='black' />
				</TouchableOpacity>

				{/* Percent */}
				{item.price && item.sale ? (
					<View style={{ position: 'relative' }}>
						<View
							style={{
								flex: 1,
								position: 'absolute',
								zIndex: 999,
								backgroundColor: 'tomato',
								borderRadius: 20,
								paddingVertical: 4,
								width: '50%',
								alignItems: 'center',
								justifyContent: 'center',
								top: 0,
								left: 0,
							}}
						>
							<Text style={{ color: '#fff' }}>
								-{calculateDiscount(item.price, item.sale).toFixed(0)}%
							</Text>
						</View>
						<Image style={styles.image} source={{ uri: item.image }} />
					</View>
				) : (
					<View style={{ position: 'relative' }}>
						<Image style={styles.image} source={{ uri: item.image }} />
					</View>
				)}

				<View style={{ flex: 1, padding: 10, backgroundColor: '#fff' }}>
					<Text
						style={{ fontSize: 12, width: 240, textAlign: 'justify' }}
						numberOfLines={3}
						ellipsizeMode='tail'
					>
						{item.name}
					</Text>
					<Text>{item.size}</Text>
					<Text style={{ textTransform: 'uppercase' }}>{item.color}</Text>

					<Pressable
						style={{
							flexDirection: 'row',
							marginTop: 10,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: '#ee4d2d',
							borderRadius: 5,
							width: 120,
						}}
					>
						<Pressable onPress={() => handleDecrement(item)}>
							<Text
								style={{
									fontSize: 25,
									color: 'white',
									paddingHorizontal: 10,
								}}
							>
								-
							</Text>
						</Pressable>

						<Pressable>
							<Text
								style={{
									fontSize: 20,
									color: '#fff',
									paddingHorizontal: 10,
								}}
							>
								{item.quantity}
							</Text>
						</Pressable>

						<Pressable onPress={() => handleIncrement(item)}>
							<Text
								style={{
									fontSize: 20,
									color: 'white',
									paddingHorizontal: 10,
								}}
							>
								+
							</Text>
						</Pressable>
					</Pressable>
					{item.price && item.sale && item.price !== item.sale ? (
						<View
							style={{
								display: 'flex',
								alignItems: 'flex-start',
								justifyContent: 'center',
								padding: 10,
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center',
								}}
							>
								<Text
									style={[
										{ fontSize: 12, color: '#000', fontWeight: 500 },
										styles.cost,
									]}
								>
									{formatCash(item.sale)} {item.unit}
								</Text>
								<Text
									style={[
										{ color: '#000', marginLeft: 4 },
										styles.original_price,
									]}
								>
									({formatCash(item.price)} {item.unit})
								</Text>
							</View>
							<View
								style={{
									flex: 1,
									width: '100%',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'flex-end',
								}}
							>
								<Text style={{ fontSize: 14, marginRight: 4 }}>
									Thành tiền:
								</Text>
								<Text
									style={[
										{ fontSize: 12, color: 'red', fontWeight: 500 },
										styles.cost,
									]}
								>
									{formatCash(parseFloat(item.sale) * parseInt(item.quantity))}{' '}
									{item.unit}
								</Text>
							</View>
						</View>
					) : (
						<View style={{ justifyContent: 'flex-end', marginTop: 10 }}>
							<Text
								style={[
									{ fontSize: 12, color: '#000', fontWeight: 500 },
									styles.cost,
								]}
							>
								{formatCash(item.price)} {item.unit}
							</Text>
							<View
								style={{
									flex: 1,
									width: '100%',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'flex-end',
								}}
							>
								<Text style={{ fontSize: 14, marginRight: 4 }}>
									Thành tiền:
								</Text>
								<Text
									style={[
										{ fontSize: 12, color: 'red', fontWeight: 500 },
										styles.cost,
									]}
								>
									{formatCash(parseFloat(item.price) * parseInt(item.quantity))}
									{item.unit}
								</Text>
							</View>
						</View>
					)}
				</View>
			</View>
		</View>
	);

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'flex-start',
					width: '100%',
					padding: 20,
				}}
			>
				<Ionicons name='cart' color='tomato' size={28} />
				<Text
					style={{
						fontSize: 20,
						fontWeight: 500,
						color: 'tomato',
					}}
				>
					Sirohouse
				</Text>
				<Text
					style={{
						fontSize: 20,
						marginHorizontal: 10,
						color: 'tomato',
					}}
				>
					|
				</Text>
				<Text
					style={{
						fontSize: 16,
						color: 'tomato',
					}}
				>
					Giỏ hàng
				</Text>
			</View>
			<View
				style={{
					// flex: 1,
					marginBottom: 220,
				}}
			>
				<FlatList
					data={cartItem}
					renderItem={renderItem}
					// numColumns='2'
					scrollEnabled={true}
					// showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item.id}
					ListEmptyComponent={() => (
						<View
							style={{
								flex: 1,
								alignItems: 'center',
								justifyContent: 'center',
								alignSelf: 'center',
							}}
						>
							<Image
								style={{
									width: 134,
									height: 134,
								}}
								source={require('../../assets/NotFound/a60759ad1dabe909c46a.png')}
							/>
							<Text style={{ padding: 10, fontSize: 18 }}>Giỏ hàng trống</Text>
						</View>
					)}
					contentContainerStyle={{ paddingBottom: 20 }}
				/>
			</View>

			{cartItem.length > 0 ? (
				<View style={styles.checkout}>
					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							paddingVertical: 10,
							marginBottom: 10,
							borderBottomWidth: 1,
							borderColor: '#ccc',
						}}
					>
						<Text>Tổng tiền:</Text>
						<Text style={[styles.cost, { color: '#ee4d2d' }]}>
							{formatCash(totalAmount.toString())} VNĐ
						</Text>
					</View>
					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<TouchableOpacity
							style={styles.checkoutButtonPrimary}
							onPress={() => props.navigation.navigate('Checkout')}
						>
							<Text
								style={{
									fontSize: 12,
									color: '#fff',
									textAlign: 'center',
									textTransform: 'uppercase',
								}}
							>
								Thanh toán
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.checkoutButtonSecondary}
							onPress={() => props.navigation.navigate('Shop')}
						>
							<View
								style={{
									flex: 1,
									flexDirection: 'row',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<AntDesign name='back' size={16} color='#ee4d2d' />
								<Text
									style={{
										fontSize: 12,
										color: '#ee4d2d',
										textAlign: 'center',
										marginLeft: 4,
									}}
								>
									Tiếp tục mua sắm
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			) : (
				<></>
			)}
		</SafeAreaView>
	);
};

export default CartScreen;
