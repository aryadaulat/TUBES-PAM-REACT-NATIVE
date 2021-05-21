import React from 'react'
import { StyleSheet, Text, View, ImageBackground,ScrollView } from 'react-native'
import {Loading} from '../../assets'
import {Profile, Saldo , Data} from '../../components'

const Akun = () => {
	return (

					<View style={styles.page}>
						<ImageBackground source={Loading} style={styles.background}>
						<Profile />
						<Saldo />
						<Data />
					</ImageBackground>


		</View>



	)
}

export default Akun

const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	page: {
	flex: 1,
	}
})
