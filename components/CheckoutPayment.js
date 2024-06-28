import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { checkout } from '../store/CartReducer';

const VNPayPayment = ({ navigation }) => {
	const route = useRoute();
	const dispatch = useDispatch();
	const { order } = route.params;

	useEffect(() => {
		const handleVNPayPayment = async () => {
			try {
				const paymentResult = await processVNPayPayment(order);

				if (paymentResult.success) {
					dispatch(checkout());
					alert('Payment successful!');
					navigation.navigate('OrdersScreen', { order });
				} else {
					alert('Payment failed!');
					navigation.goBack();
				}
			} catch (error) {
				alert('Payment error!');
				navigation.goBack();
			}
		};

		handleVNPayPayment();
	}, [order, dispatch, navigation]);

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<ActivityIndicator size='large' color='#ee4d2d' />
			<Text>Processing payment...</Text>
		</View>
	);
};

export default VNPayPayment;
