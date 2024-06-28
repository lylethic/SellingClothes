import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import {
	View,
	Text,
	FlatList,
	Image,
	StyleSheet,
	ScrollView,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { FakeProducts } from '../../dummydata/products';
import { Ionicons } from '@expo/vector-icons';
import ScrollTop from '../../components/ScrollTop';

const FakeProduct = () => {
	const [searchText, setSearchText] = useState('');
	const ref = useRef(null);
	const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
	const CONTENT_OFFSET_THRESHOLD = 300;
	const handleSearchChange = () => null;

	const renderItem = ({ item }) => (
		<View style={styles.container}>
			<View style={styles.box} key={item.id}>
				<TouchableOpacity
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-end',
						width: '100%',
						marginRight: 10,
						marginBottom: 10,
						marginTop: 10,
					}}
				>
					<Ionicons name='heart-outline' color='red' size={20} />
				</TouchableOpacity>
				<View
					style={{
						width: '100%',
						height: 180,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Image
						style={{ width: '100%', height: 150 }}
						resizeMode='contain'
						source={{ uri: item.images[0] }}
					/>
				</View>
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: 10,
						width: '100%',
					}}
				>
					<Text
						numberOfLines={1}
						ellipsizeMode='tail'
						style={{ maxWidth: '80%', fontSize: 13 }}
					>
						{item.title}
					</Text>
					<Text style={{ color: 'red', fontWeight: 500, fontSize: 16 }}>
						{new Intl.NumberFormat('vi-VN', {
							style: 'currency',
							currency: 'VND',
						}).format(item.price)}
					</Text>
					<Text
						style={{
							textDecorationLine: 'line-through',
							color: '#383838',
							fontSize: 12,
						}}
					>
						{item.discountPercentage}&#8363;
					</Text>
				</View>
			</View>
		</View>
	);

	return (
		<View style={styles.container}>
			<View style={{ padding: 10 }}>
				<Text style={{ color: 'tomato', fontStyle: 'italic', fontSize: 16 }}>
					50+ product result
				</Text>
			</View>
			<ScrollView
				ref={ref}
				onScroll={(event) => {
					setContentVerticalOffset(event.nativeEvent.contentOffset.y);
				}}
			>
				<FlatList
					data={FakeProducts}
					renderItem={renderItem}
					numColumns='2'
					showsHorizontalScrollIndicator={false}
					scrollEnabled={true}
					keyExtractor={(item) => item.id}
					ListEmptyComponent={() => <Text>Không có sản phẩm nào.</Text>}
				/>
			</ScrollView>
			{contentVerticalOffset > CONTENT_OFFSET_THRESHOLD && (
				<ScrollTop
					handleScrollTop={() => {
						ref.current.scrollTo({ y: 0, animated: true });
					}}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 4,
	},

	box: {
		alignItems: 'center',
		backgroundColor: '#FFF5FA',
		height: 300,
		marginBottom: 20,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.2,
		shadowRadius: 5.62,
		elevation: 8,
		borderRadius: 6,
	},

	searchbar: {
		backgroundColor: '#ececec',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 10,
		paddingHorizontal: 20,
		marginHorizontal: 10,
		borderWidth: 1,
		borderColor: '#ffff',
	},

	input: {
		flex: 1,
		paddingHorizontal: 6,
		borderColor: '#ccc',
		backgroundColor: '#ececec',
		fontSize: 13,
		paddingVertical: 4,
	},
});

export default FakeProduct;
