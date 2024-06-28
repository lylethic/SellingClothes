import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { formatCash } from '../../ultils';
import {
	checkout,
	selectTotalAmount,
	setUserInfo,
} from '../../store/CartReducer';
import { Alert } from 'react-native';
import { dummyUserData } from '../../Navigation/user';

const CheckoutScreen = (props) => {
	const dispatch = useDispatch();
	const cartItem = useSelector((state) => state.cart.cart);
	const totalAmount = useSelector(selectTotalAmount);

	// const handlePayment = (method) => {
	// 	const order = {
	// 		items: cartItem,
	// 		totalAmount,
	// 		paymentMethod: method,
	// 		status: method === 'COD' ? 'Pending' : 'Paid',
	// 		date: new Date().toISOString(),
	// 	};

	// 	dispatch(createOrder(order));
	// 	if (method === 'VNPay') {
	// 		// Handle VNPay payment logic here
	// 		props.navigation.navigate('VNPayPayment', { order });
	// 	} else {
	// 		// Handle COD
	// 		alert('Order placed successfully with COD!');
	// 		props.navigation.navigate('OrdersScreen');
	// 	}
	// };

	const handleCODCheckout = () => {
		dispatch(
			setUserInfo({
				name: dummyUserData.name,
				email: dummyUserData.email,
				phone: dummyUserData.Phone_number,
				address: `${dummyUserData.Street}, ${dummyUserData.City}, ${dummyUserData.Country}`,
			})
		);
		Alert.alert(
			'Thanh toán thành công',
			'Đơn hàng của bạn sẽ được trả bằng tiền mặt khi giao hàng.',
			[
				{
					text: 'OK',
					onPress: () => {
						dispatch(checkout({ checkoutMethod: 'COD' }));

						props.navigation.navigate('OrdersScreen');
					},
				},
			]
		);
	};

	const renderItem = ({ item, index }) => (
		<View style={styles.itemContainer} key={index}>
			<Image style={styles.image} source={{ uri: item.image }} />
			<View style={styles.itemDetails}>
				<Text style={styles.itemName} numberOfLines={3} ellipsizeMode='tail'>
					{item.name}
				</Text>
				<Text>{item.size}</Text>
				<Text style={{ textTransform: 'uppercase' }}>{item.color}</Text>
				<Text>{item.quantity}</Text>
				<Text style={styles.itemPrice}>
					{formatCash(item.sale ? item.sale : item.price)}
					{item.unit}
				</Text>
			</View>
		</View>
	);

	return (
		<View style={styles.container}>
			<View
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: 10,
				}}
			>
				<Text style={{ fontSize: 20 }}>Thanh toán</Text>
			</View>
			<FlatList
				data={cartItem}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				ListFooterComponent={() => (
					<View style={styles.footer}>
						<Text style={styles.totalAmount}>
							Thành tiền: {formatCash(totalAmount.toString())}
						</Text>
						<TouchableOpacity
							style={[
								styles.paymentButton,
								{
									backgroundColor: '#ee4d2d',
								},
							]}
							onPress={handleCODCheckout}
						>
							<Text style={[styles.paymentButtonText, { color: '#fff' }]}>
								Thanh toán COD
							</Text>
						</TouchableOpacity>
						{/* <TouchableOpacity
							style={[
								styles.paymentButton,
								{
									backgroundColor: '#f5f5f5',
								},
							]}
							onPress={handleCODCheckout}
						>
							<Text style={[styles.paymentButtonText, { color: '#ee4d2d' }]}>
								Thanh toán VnPay
							</Text>
							<Text style={[styles.paymentButtonText, { color: '#ee4d2d' }]}>
								(Thanh toán khi nhận hàng)
							</Text>
						</TouchableOpacity> */}
					</View>
				)}
			/>
		</View>
	);
};

export default CheckoutScreen;

const styles = {
	// Add your styles here
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	itemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
		borderBottomWidth: 1,
		borderColor: '#ddd',
	},
	image: {
		width: 100,
		height: 100,
	},
	itemDetails: {
		flex: 1,
		padding: 10,
	},
	itemName: {
		fontSize: 16,
	},
	itemPrice: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#ee4d2d',
	},
	footer: {
		padding: 20,
		borderTopWidth: 1,
		borderColor: '#ddd',
	},
	totalAmount: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#ee4d2d',
	},
	paymentButton: {
		padding: 15,
		borderRadius: 5,
		marginBottom: 10,
		borderColor: '#ee4d2d',
		borderWidth: 1,
	},
	paymentButtonText: {
		textAlign: 'center',
		fontSize: 16,
	},
};
