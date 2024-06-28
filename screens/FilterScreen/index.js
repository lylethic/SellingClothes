import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	Switch,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	TouchableHighlight,
} from 'react-native';
import CATEGORIES from '../../dummydata/categories';
import { useDispatch, useSelector } from 'react-redux';
import { locSanPham } from '../../store/ProductSlice';
import { brands } from '../../dummydata/clothes';

const FilterScreen = (props) => {
	const dispatch = useDispatch();

	const [isNew, setIsNew] = useState(false);
	const [isSale, setIsSale] = useState(false);
	const [selectedBrand, setSelectedBrand] = useState('');

	const filters = {
		isNew: isNew,
		isSale: isSale,
		brand: selectedBrand,
	};

	const handleFilter = () => {
		dispatch(locSanPham(filters));
		return props.navigation.navigate('FilterProductsScreen', {
			filters: filters,
		});
	};

	const handleBrandToggle = (brandId) => {
		setSelectedBrand((prevSelectedBrands) => ({
			...prevSelectedBrands,
			[brandId]: !prevSelectedBrands[brandId],
		}));
	};

	useEffect(
		() =>
			props.navigation.setOptions({
				headerTitle: 'Lọc sản phẩm',
				headerTitleAlign: 'center',
				headerLeft: () => (
					<TouchableOpacity>
						<Ionicons
							name='menu'
							size={30}
							color='black'
							onPress={() => props.navigation.openDrawer()}
						/>
					</TouchableOpacity>
				),
				headerRight: () => (
					<TouchableOpacity onPress={handleFilter}>
						<AntDesign name='filter' size={30} color='tomato' />
					</TouchableOpacity>
				),
			}),
		[props.navigation, filters]
	);

	return (
		<View style={styles.container}>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					padding: 20,
					backgroundColor: '#f8f8f8',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Entypo name='new' size={24} color='tomato' />
				<Text
					style={[
						styles.text,
						{ color: '#ee4d2f', fontWeight: '600', marginLeft: 10 },
					]}
				>
					Hàng mới/Hàng khuyến mãi
				</Text>
			</View>
			<View style={styles.box}>
				<Text style={styles.text}>Hàng mới</Text>
				<Switch
					value={isNew}
					onValueChange={(newValue) => setIsNew(newValue)}
				/>
			</View>
			<View style={styles.box}>
				<Text style={styles.text}>Hàng khuyến mãi</Text>
				<Switch
					value={isSale}
					onValueChange={(newValue) => setIsSale(newValue)}
				/>
			</View>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					padding: 20,
					backgroundColor: '#f8f8f8',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<MaterialIcons name='branding-watermark' size={24} color='tomato' />
				<Text
					style={[
						styles.text,
						{ color: '#ee4d2f', fontWeight: '600', marginLeft: 10 },
					]}
				>
					Thương hiệu
				</Text>
			</View>
			{brands.map((brand) => (
				<View key={brand.id} style={styles.box}>
					<Text style={styles.text}>{brand.name}</Text>
					<Switch
						value={selectedBrand === brand.id}
						onValueChange={() =>
							setSelectedBrand(selectedBrand === brand.id ? '' : brand.id)
						}
					/>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	box: {
		flexDirection: 'row',
		padding: 10,
		backgroundColor: '#fff',
		marginBottom: 10,
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	text: {
		fontSize: 20,
		marginLeft: 20,
	},
});

export default FilterScreen;
