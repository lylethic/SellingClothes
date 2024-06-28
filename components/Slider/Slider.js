import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import s1 from '../../assets/imgs/sliderSale50.png';
import s2 from '../../assets/imgs/sliderNewArr.png';
import s3 from '../../assets/imgs/sliderAccessories.png';
import s4 from '../../assets/imgs/sliderTop.png';

const Slider = () => {
	const { width: screenWidth } = Dimensions.get('window');

	const data = [
		{
			id: '1',
			imgUrl: s2,
		},
		{
			id: '2',
			imgUrl: s1,
		},
		{
			id: '3',
			imgUrl: s3,
		},
		{
			id: '4',
			imgUrl: s4,
		},
	];

	const renderItem = ({ item }) => (
		<View style={styles.itemContainer}>
			<Image style={styles.itemImg} source={item.imgUrl} />
		</View>
	);

	return (
		<Carousel
			layout='default'
			data={data}
			renderItem={renderItem}
			sliderWidth={screenWidth}
			itemWidth={screenWidth}
			autoplay={true}
			autoplayInterval={5000} // Increase the interval for slower sliding
			loop={true}
			useScrollView={true}
			inactiveSlideScale={1}
			inactiveSlideOpacity={1}
		/>
	);
};

const styles = StyleSheet.create({
	itemContainer: {
		backgroundColor: 'white',
		borderRadius: 8,
		paddingBottom: 40,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
	},
	itemImg: {
		width: '100%',
		height: 264,
		backgroundColor: 'red',
		borderRadius: 8,
	},
});

export default Slider;
