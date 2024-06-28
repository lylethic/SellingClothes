import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import { categories } from '../../dummydata/clothes';
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DanhMucSanPham = ({ select }) => {
	const [selectedCategory, setSelectedCategory] = useState(null);

	const handleCategorySelect = (item) => {
		setSelectedCategory(item);
	};

	const renderItem = (item) => {
		return (
			<TouchableOpacity
				style={styles.item}
				onPress={() => handleCategorySelect(item.id)}
			>
				<Text style={styles.textItem}>{item.name}</Text>
				{item.id === selectedCategory && (
					<AntDesign
						style={styles.icon}
						color='black'
						name='Safety'
						size={20}
					/>
				)}
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.container}>
			<Dropdown
				style={styles.dropdown}
				placeholderStyle={styles.placeholderStyle}
				selectedTextStyle={styles.selectedTextStyle}
				inputSearchStyle={styles.inputSearchStyle}
				iconStyle={styles.iconStyle}
				data={categories}
				// search
				maxHeight={200}
				labelField='name'
				valueField='id'
				placeholder='Phân loại'
				// searchPlaceholder='Search...'
				value={selectedCategory}
				onChange={(item) => {
					setSelectedCategory(item.value);
				}}
				renderLeftIcon={() => (
					<AntDesign
						style={styles.icon}
						color='black'
						name='Safety'
						size={20}
					/>
				)}
				renderItem={renderItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		padding: 16,
	},
	dropdown: {
		margin: 16,
		height: 50,
		borderBottomColor: 'gray',
		borderBottomWidth: 0.5,
		color: 'black',
	},
	icon: {
		marginRight: 5,
	},
	placeholderStyle: {
		fontSize: 13,
	},
	selectedTextStyle: {
		fontSize: 13,
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 13,
	},
	item: {
		marginLeft: 10,
		marginTop: 12,
	},
});

export default DanhMucSanPham;
