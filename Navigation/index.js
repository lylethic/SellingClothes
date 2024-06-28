import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	HomeScreen,
	ProductsScreen,
	DetailScreen,
	FavoritesScreen,
	FilterScreen,
} from '../screens';
import FakeProduct from '../screens/FakeProducts/FakeProducts';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import logo2 from '../assets/logo2_sz100.png';
import HeaderScreen from '../components/Header';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CartScreen from '../screens/CartScreen';
import Products from '../screens/Products/Products';
import FilterProductsScreen from '../screens/FilterProductsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import DanhMucSanPham from '../components/DanhMucSP';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';
import CheckoutScreen from '../screens/Checkout/CheckoutScreen';
import VNPayPayment from '../components/CheckoutPayment';
import OrdersScreen from '../components/OrdersScreen/OrdersScreen';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsLoggedIn, selectUser } from '../store/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const CustomHeaderRight = ({ navigation }) => (
	<View
		style={{
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginRight: 10,
			alignItems: 'center',
			padding: 4,
			width: 70,
		}}
	>
		{/* <TouchableOpacity onPress={() => null}>
			<Ionicons name='person-circle-outline' size={24} color='black' />
		</TouchableOpacity> */}
		<TouchableOpacity onPress={() => navigation.navigate('OrdersScreen')}>
			<Ionicons name='bag-handle-outline' size={24} color='black' />
		</TouchableOpacity>
	</View>
);

const HomeScreenNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='HomeScreen'
				component={HomeScreen}
				options={{
					headerTitle: 'Loại sản phẩm',
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Product'
				component={ProductsScreen}
				options={{
					headerShown: false,
					headerTitle: 'Sản phẩm',
					headerTitleStyle: {
						fontSize: 20,
						color: '#383838',
					},
				}}
			/>
			<Stack.Screen
				name='Detail'
				component={DetailScreen}
				options={{
					headerShown: false,
					headerTitle: 'Chi tiết sản phẩm',
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='FakeProducts'
				component={FakeProduct}
				options={{ headerTitle: 'Sản phẩm', headerTitleAlign: 'center' }}
			/>
			<Stack.Screen
				name='Category'
				component={CategoriesScreen}
				options={{
					headerTitle: 'Phân loại sản phẩm',
					headerTitleAlign: 'center',
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='OrdersScreen'
				component={OrdersScreen}
				options={{
					headerTitle: 'Đơn hàng',
					headerTitleAlign: 'center',
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

const FavStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='FavoritesScreen'
				component={FavoritesScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='Detail'
				component={DetailScreen}
				options={{
					headerShown: false,
					headerTitle: 'Chi tiết sản phẩm',
				}}
			/>
		</Stack.Navigator>
	);
};

const FilterStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='FilterScreen' component={FilterScreen} />
			<Stack.Screen
				name='FilterProductsScreen'
				component={FilterProductsScreen}
				options={{
					headerShown: true,
					title: 'Lọc sản phẩm',
					headerTitleAlign: 'center',
				}}
			/>
			<Stack.Screen
				name='Detail'
				component={DetailScreen}
				options={{
					headerShown: true,
					headerTitle: 'Chi tiết sản phẩm',
				}}
			/>
		</Stack.Navigator>
	);
};

const MainTab = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'Home') {
						iconName = focused ? 'home' : 'home-outline';
					} else if (route.name === 'Favorites') {
						iconName = focused ? 'star' : 'star-outline';
					}
					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: 'tomato',
				tabBarInactiveTintColor: 'gray',
			})}
		>
			<Tab.Screen
				name='Home'
				component={HomeScreenNavigator}
				options={{
					headerShown: false,
					title: 'Trang chủ',
					tabBarIcon: ({ focused, color, size }) => (
						<Ionicons
							name={focused ? 'home' : 'home-outline'}
							size={20}
							color={color}
						/>
					),
					tabBarActiveTintColor: 'tomato',
					tabBarInactiveTintColor: 'gray',
				}}
			/>
			<Tab.Screen
				name='Favorites'
				component={FavStack}
				options={{ headerShown: false, title: 'Yêu thích' }}
			/>
			<Tab.Screen
				name='Shop'
				component={ShowAllProduct}
				options={{
					headerShown: false,
					title: 'Cửa hàng',
					tabBarIcon: ({ focused, color, size }) => (
						<Ionicons
							name={focused ? 'basket' : 'basket-outline'}
							size={size}
							color={color}
						/>
					),
					tabBarActiveTintColor: 'tomato',
					tabBarInactiveTintColor: 'gray',
				}}
			/>
			<Tab.Screen
				name='CartStack'
				component={CartStack}
				options={{
					headerShown: false,
					title: 'Giỏ hàng',
					tabBarIcon: ({ focused, color, size }) => (
						<Ionicons
							name={focused ? 'cart' : 'cart-outline'}
							size={size}
							color={color}
						/>
					),
					tabBarActiveTintColor: 'tomato',
					tabBarInactiveTintColor: 'gray',
				}}
			/>
		</Tab.Navigator>
	);
};

const CartStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Cart'
				component={CartScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Checkout'
				component={CheckoutScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='OrdersScreen'
				component={OrdersScreen}
				options={{
					headerShown: false,
				}}
			/>
			{/* <Stack.Screen
				name='Products'
				component={Products}
				options={{
					headerShown: false,
				}}
			/> */}
		</Stack.Navigator>
	);
};

const ShowAllProduct = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Products'
				component={Products}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='Detail'
				component={DetailScreen}
				options={{
					headerShown: false,
					headerTitle: 'Chi tiết sản phẩm',
				}}
			/>
			<Stack.Screen
				name='DanhMucSanPham'
				component={DanhMucSanPham}
				options={{ headerTitle: 'Phân loại' }}
			/>
			<Stack.Screen
				name='Product'
				component={ProductsScreen}
				options={{
					headerShown: false,
					headerTitle: 'Sản phẩm',
					headerTitleStyle: {
						fontSize: 20,
						color: '#383838',
					},
				}}
			/>
		</Stack.Navigator>
	);
};

const MainStack = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const user = useSelector(selectUser);
	// console.log(user.map((name) => name.name));

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name='HomeMain'
				component={MainTab}
				options={({ navigation }) => ({
					title: 'Trang chủ',
					headerTitle: () => (
						<View>
							<Image
								style={{
									width: 40,
									height: 40,
									borderRadius: 20,
									objectFit: 'cover',
								}}
								source={require('../assets/logo1.jpg')}
							/>
							{/* <Text style={{ fontFamily: 'open-sans' }}>Sun&Moon</Text> */}
						</View>
					),
					headerTitleAlign: 'center',
					headerRight: () => <CustomHeaderRight navigation={navigation} />,
				})}
			/>
			<Drawer.Screen
				name='ShowAllProduct'
				component={ShowAllProduct}
				options={{
					title: 'Tất cả sản phẩm',
					headerTitle: (props) => (
						<View>
							<Image
								style={{
									width: 40,
									height: 40,
									borderRadius: 20,
									objectFit: 'cover',
								}}
								source={require('../assets/logo1.jpg')}
							/>
							{/* <Text style={{ fontFamily: 'open-sans' }}>Sun&Moon</Text> */}
						</View>
					),
					headerTitleAlign: 'center',
					headerRight: () => (
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								marginRight: 10,
								alignItems: 'center',
								padding: 4,
								width: 70,
							}}
						>
							{/* <TouchableOpacity onPress={() => null}>
								<Ionicons
									name='person-circle-outline'
									size={24}
									color='black'
								/>
							</TouchableOpacity> */}
							<TouchableOpacity onPress={() => null}>
								<Ionicons name='bag-handle-outline' size={24} color='black' />
							</TouchableOpacity>
						</View>
					),
				}}
			/>
			<Drawer.Screen
				name='Filter'
				component={FilterStack}
				options={{ headerShown: false, title: 'Lọc sản phẩm' }}
			/>

			{isLoggedIn ? (
				<Drawer.Screen
					name='Logout'
					component={LoginScreen} // This screen will not be shown, it's just to trigger the action
					options={{
						headerShown: false,
						title: 'Đăng xuất',
						drawerLabel: ({ navigation }) => (
							<TouchableOpacity onPress={handleLogout}>
								{/* <Text>{user.name}</Text> */}
								<Text style={{ padding: 10 }}>Đăng xuất</Text>
							</TouchableOpacity>
						),
					}}
				/>
			) : (
				<Drawer.Screen
					name='Login'
					component={LoginScreen}
					options={{ headerShown: false, title: 'Đăng nhập' }}
				/>
			)}
		</Drawer.Navigator>
	);
};

const LoginStack = () => {
	return (
		<Stack.Navigator initialRouteName='LoginScreen'>
			<Stack.Screen
				name='LoginScreen'
				component={LoginScreen}
				options={{
					headerTitle: 'Login',
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='SignUpScreen'
				component={SignUpScreen}
				options={{
					headerTitle: 'SignUpScreen',
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

const Navigator = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(selectIsLoggedIn);
	console.log('Auth: ', isLoggedIn);

	useEffect(() => {
		const checkLoginStatus = async () => {
			const user = await AsyncStorage.getItem('user');
			if (user) {
				dispatch(login(JSON.parse(user)));
			}
		};
		checkLoginStatus();
	}, [dispatch]);

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='LoginStack'>
				{!isLoggedIn ? (
					<Stack.Screen
						name='LoginStack'
						component={LoginStack}
						options={{
							headerTitle: 'Login',
							headerShown: false,
						}}
					/>
				) : (
					<Stack.Screen
						name='drawerscreen'
						component={MainStack}
						options={{
							headerTitle: 'MainStack',
							headerShown: false,
						}}
					/>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;
