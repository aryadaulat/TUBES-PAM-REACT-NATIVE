import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native'
import { Loading, Logo } from '../../assets'

const Splash = ({ navigation }) => {
	
	useEffect(() => {
		setTimeout(() => {
				navigation.replace('MainApp');
		},5000)	
		},[navigation]);
	
	return (
		<ImageBackground source=	{Loading} style={styles.background}>
				<Image source={Logo} style={styles.logo}/>
		</ImageBackground>
	)
}

export default Splash

const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'

	},
	logo: {
		width: 269,
		height: 158
	}
})