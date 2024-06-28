import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Image,
} from 'react-native';
import { categories } from '../../dummydata/clothes';

const CategoriesScreen = (props) => {
	return (
		<View style={styles.container}>
			{/* <FlatList
				style={styles.flatListContent}
				data={categories}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={[{ backgroundColor: item.color }, styles.button]}
						onPress={() =>
							props.navigation.navigate('Product', { categoryId: item.id })
						}
					>
						<View style={styles.box}>
							<Text style={styles.text}>{item.name}</Text>
						</View>
					</TouchableOpacity>
				)}
				numColumns='2'
				showsHorizontalScrollIndicator={true}
				scrollEnabled={true}
				keyExtractor={(item) => item.id}
				ListEmptyComponent={() => <Text>Không có sản phẩm nào.</Text>}
			/> */}
			<FlatList
				style={styles.flatListContent}
				data={categories}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={[{ backgroundColor: item.color }, styles.button]}
						onPress={() =>
							props.navigation.navigate('Product', { categoryId: item.id })
						}
					>
						<View style={styles.box}>
							<Image style={styles.icon} source={item.icon} />
							<Text style={styles.text}>{item.name}</Text>
						</View>
					</TouchableOpacity>
				)}
				horizontal={true} // Thêm thuộc tính này để cho phép vuốt sang ngang
				showsHorizontalScrollIndicator={false} // Tắt thanh cuộn ngang
				keyExtractor={(item) => item.id}
				ListEmptyComponent={() => <Text>Không có sản phẩm nào.</Text>}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	view: {
		alignItems: 'center',
		borderRadius: 10,
	},
	box: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 13,
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 100,
		height: 100,
		marginRight: 10,
		marginLeft: 10,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
		elevation: 3,
	},
	icon: {
		width: 50,
		height: 50,
	},
});

export default CategoriesScreen;
