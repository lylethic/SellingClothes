import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import React, { useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';

const ScrollTop = ({ handleScrollTop }) => {
	return (
		<TouchableOpacity
			style={styles.scrollToTopButton}
			onPress={handleScrollTop}
		>
			<Ionicons name='chevron-up-outline' size={24} color='#383838' />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	scrollToTopButton: {
		position: 'absolute',
		top: '90%',
		right: 10,
		bottom: 0,
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
		backgroundColor: '#f5f5f5',
		borderWidth: 1,
		borderColor: '#f8f8f8',
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.18,
		shadowRadius: 4.59,
		elevation: 5,
	},
});

export default ScrollTop;
