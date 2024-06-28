import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/authSlice';
import { validateSignUp } from '../../ultils';
import { ImageBackground } from 'react-native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

const SignUpScreen = (props) => {
	const dispatch = useDispatch();

	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [errors, setErrors] = useState({});

	const handleSignUp = () => {
		const validationErrors = validateSignUp({
			fullName,
			email,
			password,
			confirmPassword,
		});
		setErrors(validationErrors);

		if (Object.keys(validationErrors).length === 0) {
			const userData = { fullName, email, password, confirmPassword };
			dispatch(signUp(userData));
			props.navigation.navigate('drawerscreen');
		}
	};

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View
					// source={require('../../assets/imgs/art4.jpg')}
					style={styles.backgroundImage}
				>
					<View style={styles.innerContainer2}>
						<Text style={styles.title}>Đăng ký</Text>
						<Image
							style={{ width: 100, height: 100, borderRadius: 50 }}
							source={require('../../assets/imgs/25497.jpg')}
						/>
						<View style={styles.formGroup}>
							<Text style={styles.text}>Họ và tên</Text>
							<TextInput
								style={styles.input}
								placeholder='Nhập họ và tên...'
								value={fullName}
								onChangeText={setFullName}
							/>
							{errors.fullName && (
								<Text style={styles.error}>{errors.fullName}</Text>
							)}
						</View>
						<View style={styles.formGroup}>
							<Text style={styles.text}>Email</Text>
							<TextInput
								style={styles.input}
								placeholder='Nhập email...'
								value={email}
								onChangeText={setEmail}
							/>
							{errors.email && <Text style={styles.error}>{errors.email}</Text>}
						</View>
						<View style={styles.formGroup}>
							<Text style={styles.text}>Mật khẩu</Text>
							<TextInput
								style={styles.input}
								placeholder='Nhập mật khẩu...'
								secureTextEntry
								value={password}
								onChangeText={setPassword}
							/>
							{errors.password && (
								<Text style={styles.error}>{errors.password}</Text>
							)}
						</View>
						<View style={styles.formGroup}>
							<Text style={styles.text}>Nhập lại mật khẩu</Text>
							<TextInput
								style={styles.input}
								placeholder='Nhập lại mật khẩu...'
								secureTextEntry
								value={confirmPassword}
								onChangeText={setConfirmPassword}
							/>
							{errors.confirmPassword && (
								<Text style={styles.error}>{errors.confirmPassword}</Text>
							)}
						</View>
						<TouchableOpacity style={styles.button} onPress={handleSignUp}>
							<Text style={[styles.text, { color: '#fff' }]}>Đăng ký</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								marginTop: 10,
								width: '100%',
								alignItems: 'center',
								padding: 10,
								backgroundColor: '#fff',
							}}
							onPress={() => props.navigation.navigate('LoginScreen')}
						>
							<Text style={{ fontSize: 16, color: '#ee4d2f' }}>
								Trở về đăng nhập
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight || 0,
	},
	title: {
		fontWeight: '600',
		fontSize: 30,
		textAlign: 'left',
		marginBottom: 10,
		textTransform: 'uppercase',
	},
	backgroundImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
	},
	innerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		width: '100%',
	},
	innerContainer2: {
		height: 600,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(245, 245, 245, 0.4)',
		padding: 20,
		width: '100%',
	},
	header: {
		fontWeight: '500',
		fontSize: 24,
		textAlign: 'left',
		marginBottom: 20,
	},
	formGroup: {
		marginBottom: 15,
		width: '100%',
	},
	text: {
		fontSize: 16,
		marginBottom: 5,
	},
	input: {
		width: '100%',
		padding: 10,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		backgroundColor: '#fff',
	},
	button: {
		width: '100%',
		padding: 15,
		backgroundColor: '#ee4d2d',
		borderRadius: 5,
		alignItems: 'center',
		marginBottom: 10,
	},
	error: {
		color: 'red',
		marginTop: 5,
	},
	text: {
		fontSize: 16,
	},
});

export default SignUpScreen;
