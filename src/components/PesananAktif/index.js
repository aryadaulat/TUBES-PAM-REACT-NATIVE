import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native';	
import { IconPesanan } from "../../assets"
import { WARNA_ABU, WARNA_WARNING } from '../../utils/constant';
import { WARNA_UTAMA } from '../utils/constant';

const PesananAktif  = ({title,status}) => {
	return (
		<TouchableOpacity style={styles.container}>
			<IconPesanan/>
			<View style={styles.text}>
			<Text style={styles.title}>   {title}</Text>
			<Text style={styles.status(status)}>   {status}</Text>
			</View>
		</TouchableOpacity>

	)
}

export default PesananAktif;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
	container:{
			padding: 17,
			backgroundColor:'white',
			flexDirection: 'row',
			borderRadius: 10,
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 3,
			},
			shadowOpacity: 0.29,
			shadowRadius: 4.65,	
			elevation: 7,
			marginVertical: windowHeight*0.02,
			alignItems: 'center'
	},
	text:{
		marginLeft: windowWidth*0.05,
	},
	text:{
		fontSize:18,
		fontFamily: 'TitilliumWeb-SemiBold'
	},
	status: (status)=> ({
		fontSize:14,
		fontFamily: 'TitilliumWeb-Light',
		color: status  === 'Sudah Selesai' ? WARNA_UTAMA : status === 'Dalam Proses Pengerjaan' ? WARNA_WARNING : WARNA_ABU,
		}),
		touch:{
		backgroundColor: 'orange',
		alignSelf: 'stretch',
		paddingHorizontal: 20
	}
});
