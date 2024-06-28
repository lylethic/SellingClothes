import React, { useRef, useState } from 'react';
import Constants from 'expo-constants';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	Image,
	ScrollView,
	FlatList,
} from 'react-native';
import { categories, clothes } from '../../dummydata/clothes';
import { reviews } from '../../dummydata/reviews';
import { global_Styles } from '../../Global/Global-Styles';
import HeaderScreen from '../../components/Header';
import { FakeProducts } from '../../dummydata/products';
import Slider from '../../components/Slider/Slider';
import ScrollTop from '../../components/ScrollTop';
import { ImageBackground } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Contact from '../../components/Contact';
import { formatCash, calculateDiscount } from '../../ultils';
import styles from './styles';

const HomeScreen = (props) => {
	const ref = useRef(null);
	const [reviewPage, setReviewPage] = useState(1);
	const reviewsPerPage = 5;
	const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
	const CONTENT_OFFSET_THRESHOLD = 200;

	// CATEGORY
	const renderItemCategory = ({ item }) => (
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
	);

	// Featured
	const renderProducts = ({ item }) => (
		<TouchableOpacity
			style={[styles.productItem, { backgroundColor: item.color }]}
			onPress={() =>
				props.navigation.navigate('Detail', { productId: item.id })
			}
		>
			<Image
				source={{ uri: item.image }}
				style={styles.productImage}
				resizeMode='cover'
			/>
			<View style={styles.productInfo}>
				<Text numberOfLines={2} ellipsizeMode='tail' style={styles.productName}>
					{item.name}
				</Text>
				{item.price && item.sale && item.price > item.sale ? (
					<Text style={styles.productPrice}>
						{formatCash(item.sale)} {item.unit}
					</Text>
				) : (
					<Text style={styles.productPrice}>
						{formatCash(item.price)} {item.unit}
					</Text>
				)}
			</View>
			{item.isSale && (
				<Text style={styles.saleBadge}>
					-{calculateDiscount(item.price, item.sale).toFixed(0)}%
				</Text>
			)}
		</TouchableOpacity>
	);

	//REVIEWER
	const renderItemReviewer = ({ item }) => (
		<View style={styles.reviewItem}>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					marginBottom: 10,
				}}
			>
				<Image
					style={{ width: 50, height: 50, borderRadius: 25 }}
					source={item.img}
				/>
				<Text style={styles.reviewAuthor}>{item.author}</Text>
			</View>
			<Text style={styles.reviewText}>"{item.comment}"</Text>
		</View>
	);

	const paginatedReviews = reviews.slice(
		(reviewPage - 1) * reviewsPerPage,
		reviewPage * reviewsPerPage
	);

	const totalPages = Math.ceil(reviews.length / reviewsPerPage);

	return (
		// Khong xoa cai nay
		// <View style={styles.container}>
		// 	<HeaderScreen
		// 		style={styles.header}
		// 		onSearch={handleSearch}
		// 		navigation={() => props.navigation.navigate('FakeProducts')}
		// 	/>
		// 	<ScrollView
		// 		ref={ref}
		// 		onScroll={(event) => {
		// 			setContentVerticalOffset(event.nativeEvent.contentOffset.y);
		// 		}}
		// 	>
		// 		<Slider />
		// 		<TouchableOpacity
		// 			onPress={() => props.navigation.navigate('FakeProducts')}
		// 		>
		// 			<Text style={styles.view}>Test</Text>
		// 		</TouchableOpacity>
		// 		{/* Test chieu cao de Scroll to Top */}
		// 		<FlatList
		// 			style={styles.container}
		// 			data={FakeProducts}
		// 			renderItem={({ item }) => (
		// 				<View style={[styles.view, { backgroundColor: item.color }]}>
		// 					<Text style={styles.text}>{item.title}</Text>
		// 				</View>
		// 			)}
		// 		/>
		// 		{/* End Test. */}
		// 	</ScrollView>
		// 	{contentVerticalOffset > CONTENT_OFFSET_THRESHOLD && (
		// 		<ScrollTop
		// 			handleScrollTop={() => {
		// 				ref.current.scrollTo({ y: 0, animated: true });
		// 			}}
		// 		/>
		// 	)}
		// </View>

		<View style={styles.container}>
			<View style={styles.container}>
				<FlatList
					data={[
						{
							title: 'Shop theo loại sản phẩm',
							data: categories,
							renderItem: renderItemCategory,
						},
						{
							title: 'Sản phẩm đặc trưng',
							data: clothes.filter((product) => product.isNew),
							renderItem: renderProducts,
						},
						{
							title: 'Bán chạy',
							data: clothes.filter((product) => product.sold > 600),
							renderItem: renderProducts,
						},
						{
							title: 'Thương hiệu nội địa',
							data: clothes.filter((product) => product.isBrand),
							renderItem: renderProducts,
						},
					]}
					renderItem={({ item }) => (
						<View style={{ marginBottom: 20 }}>
							<Text style={styles.sectionTitle}>{item.title}</Text>
							<FlatList
								data={item.data}
								renderItem={item.renderItem}
								keyExtractor={(item) => item.id}
								horizontal={item.title !== 'Customer Reviews'}
								showsHorizontalScrollIndicator={false}
								initialNumToRender={10}
								maxToRenderPerBatch={10}
								windowSize={10}
								contentContainerStyle={styles.productList}
							/>
						</View>
					)}
					keyExtractor={(item, index) => index.toString()}
					ListHeaderComponent={() => <Slider />}
					ListHeaderComponentStyle={{ marginBottom: 20 }}
					ListFooterComponent={() => <Contact />}
					ListFooterComponentStyle={{ marginBottom: 20 }}
				/>
			</View>
		</View>
	);
};

export default HomeScreen;
