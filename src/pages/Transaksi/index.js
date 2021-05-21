import React from 'react'
import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import {Loading} from '../../assets'
import  ButtonIcon  from "../../components/ButtonIcon"

const Transaksi = ({navigation}) => {
	const handleGoTo=screen=>{
		navigation.navigate(screen);
	};
	return (
		<View style={styles.page}>
					<ImageBackground source={Loading} style={styles.background}>
					<View style={styles.judul}>
					<Text style={styles.text}>Transaksi</Text>
					</View>

					<View style={styles.icon}>
					<ButtonIcon title="Order" onPress={()=> handleGoTo('Order')}/>
					
					</View>
					<View  style={styles.logo}> 
					<ButtonIcon title="History" onPress={()=> handleGoTo('History')}/>
					</View>

					<View>
						
					</View>
					
					</ImageBackground>


		</View>
	)
}

export default Transaksi

const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	page: {
	flex: 1,
	},
	judul: {
		marginTop: -400,
		marginBottom: 80,
		marginLeft:-10
	},
	text: {
		fontSize: 40,
		fontFamily: 'AveriaSerifLibre-Bold',

	},
	icons: {
		flexDirection: 'row',
		width:90
	},
	icon: {
		flexDirection : 'row',
		justifyContent: 'space-between',
		marginTop: 10,
		marginRight:200,
		flexWrap: 'wrap'
	},
	logo: {
		marginTop: -43,
		marginLeft:200
	}
})
