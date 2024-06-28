import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, FlatList, StyleSheet, Image, Alert } from 'react-native';
import { cancelOrder, selectOrders } from '../../store/CartReducer';
import { TouchableOpacity } from 'react-native';
import { formatCash } from '../../ultils';

const OrdersScreen = (props) => {
	const dispatch = useDispatch();
	const orders = useSelector(selectOrders);
	console.log('Order!!!!!!!!!!!!!!!!!!!!!!!!!!!: ', orders);

	const handleCancelOrder = (orderId) => {
		Alert.alert(
			'Hủy đơn hàng',
			'Bạn có chắc chắn muốn hủy đơn hàng này không?',
			[
				{
					text: 'Hủy',
					style: 'cancel',
				},
				{
					text: 'Có',
					onPress: () => {
						dispatch(cancelOrder(orderId));
					},
				},
			]
		);
	};

	const renderOrderItem = ({ item }) => (
		<View style={styles.orderContainer}>
			<Text style={styles.text}>Mã đơn hàng: {item.orderId}</Text>
			<FlatList
				data={item.items}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<View style={styles.itemContainer}>
						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Image
								style={{
									objectFit: 'cover',
									height: 100,
									width: 100,
									marginRight: 4,
								}}
								source={{ uri: item.image }}
							/>
							<Text
								style={{
									flex: 1,
									color: '#ee4d2d',
									fontWeight: 500,
									fontSize: 16,
									textAlign: 'justify',
								}}
							>
								{item.name}
							</Text>
						</View>
						<Text style={styles.text}>Size: {item.size}</Text>
						<Text style={styles.text}>Màu sắc: {item.color}</Text>
						<Text style={styles.text}>Số lượng: {item.quantity}</Text>
					</View>
				)}
			/>
			<View
				style={{
					borderWidth: 1,
					borderColor: '#ccc',
					marginTop: 10,
					padding: 10,
					borderRadius: 10,
					backgroundColor: '#f5f5f5',
				}}
			>
				<Text style={styles.text}>
					Phương thức thanh toán: {item.checkoutMethod}
				</Text>
				<Text style={styles.text}>Thời gian đặt hàng: {item.date}</Text>
				<Text style={styles.text}>Địa chỉ: {item.user.address}</Text>
				<Text style={styles.text}>Điện thoại: {item.user.phone}</Text>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'space-between',
						borderTopWidth: 1,
						borderTopColor: '#ccc',
						paddingVertical: 10,
					}}
				>
					<Text style={styles.text}>Thành tiền:</Text>
					<Text style={[styles.text, { color: '#ee4d2d', fontWeight: 500 }]}>
						{formatCash(item.totalAmount)} VNĐ
					</Text>
				</View>
				<TouchableOpacity
					style={styles.cancelButton}
					onPress={() => handleCancelOrder(item.orderId)}
				>
					<Text style={[styles.text, { color: '#fff' }]}>Hủy đơn hàng</Text>
				</TouchableOpacity>
			</View>
		</View>
	);

	return (
		<View style={styles.container}>
			{orders.length > 0 ? (
				<>
					<View
						style={{
							display: 'flex',
							padding: 10,
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Text style={{ fontSize: 20 }}>Đơn hàng đã đặt</Text>
					</View>

					<FlatList
						data={orders}
						keyExtractor={(item, index) => index.toString()}
						renderItem={renderOrderItem}
					/>
				</>
			) : (
				<View
					style={{
						display: 'flex',
						flex: 1,
						padding: 10,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text style={{ fontSize: 20 }}>Bạn không có đơn hàng nào!</Text>
					<Image
						style={{ width: 200, height: 200 }}
						source={require('../../assets/NotFound/a60759ad1dabe909c46a.png')}
					/>
					<TouchableOpacity
						style={{
							width: 150,
							paddingVertical: 10,
							backgroundColor: '#ee4d2d',
							borderWidth: 1,
							borderColor: '#ee4d2d',
							marginTop: 20,
						}}
						onPress={() => props.navigation.navigate('Products')}
					>
						<Text style={{ textAlign: 'center', color: '#fff' }}>
							Mua sắm ngay!
						</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#fff',
	},
	orderContainer: {
		marginBottom: 20,
		padding: 20,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#ccc',
	},
	itemContainer: {
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		padding: 10,
	},
	cancelButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ee4d2f',
		padding: 10,
		marginVertical: 10,
	},
	text: {
		fontSize: 16,
		textAlign: 'justify',
		marginVertical: 2,
	},
});

export default OrdersScreen;
