import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';

const Contact = () => {
	return (
		<View style={styles.container}>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'flex-start',
					paddingVertical: 10,
				}}
			>
				<Image
					style={styles.icon}
					source={require('../../assets/icons/icons8-support-48.png')}
				/>
				<Text style={styles.title}>Hỗ trợ mua hàng</Text>
			</View>
			<View style={styles.contactInfo}>
				<Image
					style={styles.icon}
					source={require('../../assets/icons/icons8-google-mail-48.png')}
				/>
				<Text style={styles.label}>Email:</Text>
				<Text style={styles.value}>lylethic@gmail.com</Text>
			</View>
			<View style={styles.contactInfo}>
				<Image
					style={styles.icon}
					source={require('../../assets/icons/icons8-phone-48.png')}
				/>
				<Text style={styles.label}>Phone:</Text>
				<Text style={styles.phone}>123-456-7890</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		backgroundColor: '#f3f3f3',
	},
	title: {
		fontSize: 14,
		fontWeight: 'bold',
		// marginBottom: 10,
	},
	contactInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 5,
	},
	label: {
		fontWeight: '500',
		marginRight: 5,
	},
	phone: {
		fontSize: 14,
		color: 'red',
	},
	value: {
		flex: 1,
		fontSize: 14,
	},
	icon: {
		height: 24,
		width: 24,
		marginRight: 10,
	},
});

export default Contact;
