import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	TouchableHighlight,
} from 'react-native';

const Searchbar = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = () => {
		onSearch(searchTerm);
	};

	const handleChangeText = (text) => {
		setSearchTerm(text);
		onSearch(text);
	};

	return (
		<View
			style={{
				marginTop: 10,
				marginLeft: 10,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<TextInput
				style={{
					flex: 1,
					borderWidth: 1,
					borderRadius: 5,
					paddingHorizontal: 10,
					marginRight: 10,
					position: 'relative',
				}}
				placeholder='Tìm kiếm sản phẩm...'
				value={searchTerm}
				onChangeText={handleChangeText}
			/>
			<TouchableHighlight
				style={{
					position: 'absolute',
					right: 20,
					padding: 2,
				}}
				onPress={handleSearch}
			>
				<Ionicons name='search' size={20} color='gray' />
			</TouchableHighlight>
		</View>
	);
};

export default Searchbar;
