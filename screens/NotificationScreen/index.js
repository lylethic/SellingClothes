import React, { useEffect } from 'react';
import { View, Text, Button, Platform } from 'react-native';

const NotificationScreen = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Notification Page</Text>
			<Button title='Send Notification' />
		</View>
	);
};

export default NotificationScreen;
