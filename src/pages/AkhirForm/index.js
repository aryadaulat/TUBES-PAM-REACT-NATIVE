import React,{useEffect} from 'react'
import { StyleSheet, Text, View,Dimensions,ImageBackground,Image } from 'react-native'
import { BackgroundSatu, PesananBerhasil } from '../../assets';

const AkhirForm = ({navigation}) => {
	useEffect(() => {
		setTimeout(() => {
				navigation.replace('MainApp');
		},2000)	
		},[navigation]);
	
	return (
		<View style={styles.page}>
			<ImageBackground source={BackgroundSatu} style={styles.header}>
					{/* <Image source={Logo} style={styles.logo} /> */}
					{/* <View	style={styles.hello}>
						<Text style={styles.selamat}>Selamat Datang </Text>
						<Text style={styles.username}>Arya Daulat</Text>
					</View> */}
					<Image source={PesananBerhasil} style={styles.pesananberhasil}>

					</Image>
			</ImageBackground>
		</View>
	)
}

export default AkhirForm
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: 'white'
	},

	header: {
		width: windowWidth,
		height: windowHeight * 0.25	,
		paddingHorizontal: 25,
		paddingTop: 25,  
	},
	pesananberhasil:{
		alignItems: 'center',
		justifyContent: 'center',
		width: 223,
		height: 257.25	,
		marginTop: 200,
		marginLeft: 60

	}
})
