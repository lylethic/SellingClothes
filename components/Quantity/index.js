import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

const QuantityInput = ({ quantity, increaseQuantity, decreaseQuantity }) => {
	return (
		<View
			style={{
				flex: 1,
				flexDirection: 'row',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<Text style={{ width: '20%' }}>Số lượng: </Text>
			<Button
				title='-'
				color='blue'
				onPress={decreaseQuantity}
				disabled={quantity === 1}
			/>

			<Pressable>
				<Text
					style={{
						fontSize: 20,
						color: 'black',
						paddingHorizontal: 10,
					}}
				>
					{quantity}
				</Text>
			</Pressable>

			<Button title='+' color='blue' onPress={increaseQuantity} />
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		width: 40,
		backgroundColor: 'blue',
	},
});

export default QuantityInput;
