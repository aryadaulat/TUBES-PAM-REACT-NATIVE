import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import { WARNA_UTAMA } from '../utils/constant';
import  ButtonIcon  from "../ButtonIcon/index";
import Gap from '../Gap';

const Profile = () => {
	return (
		<View style={styles.container}>
				<View style={styles.buttonAksi}>
					<ButtonIcon title="Roger" />	
					<Gap width ={10}/>			
				</View>		
			<View style={styles.informasiSaldo}>
				<View style={styles.text}>
					{/* <Text style={styles.labelSaldo}>Saldo :</Text> */}
					<Text style={styles.valueSaldo}>Gold D.Roger</Text>
				</View>
				<View style={styles.text}>
					<Text style={styles.labelGopay}>Raja Bajak Laut </Text>
					{/* <Text style={styles.valueGopay}>RP. 100,000</Text> */}
				</View>
			</View>
			{/* <View style={styles.buttonArrow}>
					<ButtonIcon title= "Arrow"/>				
				</View>	 */}
	
		</View>
	);
};

export default Profile;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		// backgroundColor: 'white',
		padding: 17,
		marginHorizontal: -10,
		borderRadius: 15,
		// shadowColor: "#000",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 3,
		// },
		// shadowOpacity: 0.29,
		// shadowRadius: 4.65,

		// elevation: 7,
		marginTop: -300,
		flexDirection:'row'
	},
	text: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	informasiSaldo: {
		width: '60%',
		// backgroundColor: 'white'
	},
	labelSaldo: {
		fontSize: 20,
		fontFamily: 'TitilliumWeb-Reguler'
	},
	valueSaldo: {
		fontSize: 20,
		fontFamily: 'TitilliumWeb-Bold'
	},
	// labelGopay: {
	// 	fontSize: 20,
	// 	fontFamily: 'TitilliumWeb-Reguler'
	// },
	// valueGopay: {
	// 	fontSize: 20,
	// 	fontFamily: 'TitilliumWeb-Bold',
	// 	color: WARNA_UTAMA
	// },
	buttonAksi: {
		flexDirection: 'row',
		marginLeft: 0
	},
	buttonArrow: {
		flexDirection: 'row',
		marginLeft: 40
	}

})
