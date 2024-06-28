import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	SafeAreaView,
	KeyboardAvoidingView,
	Platform,
	TouchableOpacity,
	ScrollView,
	TouchableWithoutFeedback,
	Keyboard,
	Image,
	Alert,
	ImageBackground,
} from 'react-native';
import Constants from 'expo-constants';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { login, selectIsLoggedIn } from '../../store/authSlice';
import { dummyUserData } from '../../Navigation/user';
import { validateLogin } from '../../ultils';

const LoginScreen = (props) => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPass, setShowPass] = useState(false);

	const [errors, setErrors] = useState({});

	const isLoggedIn = useSelector(selectIsLoggedIn);

	const handleLogin = () => {
		const validationErrors = validateLogin({ email, password });
		setErrors(validationErrors);

		if (Object.keys(validationErrors).length === 0) {
			if (
				email === dummyUserData.email &&
				password === dummyUserData.password
			) {
				dispatch(login(dummyUserData));
				// Alert.alert(' ', 'Đăng nhập thành công');
				props.navigation.navigate('drawerscreen');
				// console.log(dummyUserData);
			} else {
				Alert.alert(' ', 'Email hoặc mật khẩu không đúng!');
			}
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
					<View style={styles.innerContainer}>
						<View style={styles.innerContainer2}>
							<Text style={styles.header}>Đăng nhập</Text>
							<Image
								style={{ width: 100, height: 100, borderRadius: 50 }}
								source={require('../../assets/imgs/icons8-lock-94.png')}
							/>
							<View style={styles.formGroup}>
								<Text style={styles.text}>Email</Text>
								<TextInput
									style={styles.input}
									placeholder='Nhập email...'
									value={email}
									onChangeText={(username) => setEmail(username)}
								/>
							</View>
							<View
								style={{
									display: 'flex',
									width: '100%',
									marginBottom: 20,
								}}
							>
								{errors.email && (
									<Text style={styles.error}>{errors.email}</Text>
								)}
							</View>
							<View style={[styles.formGroup, { position: 'relative' }]}>
								<Text style={styles.text}>Mật khẩu</Text>
								<TextInput
									style={[styles.input]}
									placeholder='Nhập mật khẩu...'
									value={password}
									onChangeText={(password) => setPassword(password)}
									secureTextEntry={!showPass}
								/>
								{/* Show/Hide Password */}
								<TouchableOpacity
									style={styles.icon}
									onPress={() => setShowPass(!showPass)}
								>
									<Ionicons
										name={showPass ? 'eye-outline' : 'eye-off-sharp'}
										size={24}
										color='black'
									/>
								</TouchableOpacity>
							</View>
							{errors.password && (
								<View
									style={{
										display: 'flex',
										width: '100%',
									}}
								>
									<Text style={styles.error}>{errors.password}</Text>
								</View>
							)}
							<TouchableOpacity
								style={[
									styles.formGroup,
									{ justifyContent: 'center', alignItems: 'flex-end' },
								]}
								onPress={() => null}
							>
								<Text
									style={[styles.text, { textDecorationLine: 'underline' }]}
								>
									Quên mật khẩu
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button} onPress={handleLogin}>
								<Text style={{ color: '#fff' }}>Đăng nhập</Text>
							</TouchableOpacity>
							<View style={{ padding: 20 }}>
								<Text>hoặc</Text>
							</View>
							<TouchableOpacity
								style={{
									marginTop: 10,
									width: '100%',
									alignItems: 'center',
									padding: 10,
									backgroundColor: '#fff',
								}}
								onPress={() => props.navigation.navigate('SignUpScreen')}
							>
								<Text style={{ color: '#ee4d2f' }}>Đăng ký tài khoản</Text>
							</TouchableOpacity>
						</View>
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
		// backgroundColor: '#fff',
	},
	backgroundImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		objectFit: 'fill',
	},
	innerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		// padding: 10,
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
		fontWeight: '600',
		fontSize: 30,
		textTransform: 'uppercase',
		marginBottom: 10,
		color: '#000',
	},
	formGroup: {
		display: 'flex',
		marginBottom: 10,
		width: '100%',
	},
	text: {
		color: '#000',
		marginBottom: 10,
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
		alignItems: 'center',
		backgroundColor: '#ee4d2d',
		padding: 10,
		width: '100%',
		marginTop: 10,
	},
	btnGroup: {
		width: 200,
		flexDirection: 'row',
		marginTop: 20,
		backgroundColor: '#2e41ec',
		alignItems: 'center',
		padding: 6,
	},
	icon: {
		position: 'absolute',
		bottom: '20%',
		right: '4%',
	},
	error: {
		color: 'tomato',
		// marginTop: 4,
	},
});

export default LoginScreen;
