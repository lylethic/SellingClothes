import React, { useRef, useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Animated,
	ScrollView,
	Image,
} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import FakeProduct from '../../screens/FakeProducts/FakeProducts';

const HeaderScreen = ({ navigation, onSearch }) => {
	const [searchText, setSearchText] = useState('');

	const handleSearchChange = (text) => {
		setSearchText(text);
		onSearch(text);
	};

	return (
		<View style={styles.container_top}>
			<View style={styles.container_wrapper}>
				<View style={styles.searchbar}>
					<Ionicons name='search-outline' size={16} />
					<TextInput
						value={searchText}
						onChangeText={handleSearchChange}
						placeholder='Tìm kiếm sản phẩm...'
						style={styles.input}
					/>
					<Ionicons name='camera-outline' size={18} />
				</View>
				<TouchableOpacity
					style={styles.shop_cart}
					onPress={() => navigation.navigate('CartScreen')}
				>
					<Ionicons name='cart-outline' size={24} color='#ffff' />
					<View style={styles.cart_number_badge}>
						<Text style={{ fontSize: 10, color: '#fd5d31' }}>12</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.message_container}
					onPress={() => navigation.navigate('CartScreen')}
				>
					<AntDesign name='message1' size={20} color='#ffff' />
					<View style={styles.message_number_badge}>
						<Text style={{ fontSize: 10, color: '#fd5d31' }}>99+</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container_top: {
		paddingTop: 10,
		paddingBottom: 20,
		paddingHorizontal: 10,
		backgroundColor: '#fd5d31',
	},

	container_wrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: Constants.statusBarHeight || 0,
	},

	searchbar: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		backgroundColor: '#f5f5f5',
		paddingVertical: 4,
		paddingHorizontal: 10,
		width: 300,
	},

	shop_cart: {
		marginHorizontal: 10,
		position: 'relative',
	},

	cart_number_badge: {
		position: 'absolute',
		backgroundColor: '#fff',
		height: 18,
		width: 18,
		borderRadius: 10,
		color: 'orange',
		alignItems: 'center',
		justifyContent: 'center',
		left: 12,
		bottom: 12,
	},

	message_container: {
		marginRight: 6,
		position: 'relative',
	},

	message_number_badge: {
		position: 'absolute',
		backgroundColor: '#fff',
		height: 18,
		width: 18,
		borderRadius: 10,
		color: 'orange',
		alignItems: 'center',
		justifyContent: 'center',
		left: 12,
		bottom: 10,
	},

	input: {
		flex: 1,
		paddingHorizontal: 6,
		borderColor: '#ccc',
		backgroundColor: '#ffff',
	},

	container_slider: {},
});

export default HeaderScreen;
