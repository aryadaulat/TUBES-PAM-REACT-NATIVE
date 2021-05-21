import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home , Splash, Akun,Transaksi,Pesanan,AkhirForm,Order,History } from '../pages';
import BottomNavigator from '../components/BottomNavigator';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp =() => {
	return (
		<Tab.Navigator  tabBar={props => <BottomNavigator {...props} />}>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Transaksi" component={Transaksi} />
			<Tab.Screen name="Akun" component={Akun} />			
		</Tab.Navigator>
	);
};

const Router = () => {
	return (
		<Stack.Navigator initialRouteName="Splash">
			<Stack.Screen name="Splash" component={Splash} options= {{ headerShown: false}}/>
			<Stack.Screen name="MainApp" component={MainApp} options= {{ headerShown: false}}/>
			<Stack.Screen name="Pesanan" component={Pesanan} options= {{ headerShown: false}}/>
			<Stack.Screen name="AkhirForm" component={AkhirForm} options= {{ headerShown: false}}/>
			<Stack.Screen name="Order" component={Order} options= {{ headerShown: false}}/>
			<Stack.Screen name="History" component={History} options= {{ headerShown: false}}/>
		</Stack.Navigator>
	);
};

export default Router;

const styles = StyleSheet.create({
	bar:{
		backgroundColor:'#BBEDE9',
	},

})
