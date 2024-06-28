import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const global_Styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight || 0,
	},

	box: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
	},

	image: {
		width: 200,
		height: 200,
	},

	button: {
		marginTop: 10,
		width: 200,
	},
});

export { global_Styles };
