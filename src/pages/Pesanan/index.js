import React, {useState}   from 'react'

import { StyleSheet, Text, View,TextInput,ImageBackground,ScrollView,Dimensions,Item,SafeAreaView,TouchableOpacity,Modal } from 'react-native'
import { BackgroundSatu, Logo } from '../../assets';
import {Pick} from '../../components/Pick'
import { Pick2 } from '../../components/Pick2';
import { Pick3 } from '../../components/Pick3';
import ButtonIcon from '../../components/ButtonIcon';


const Pesanan = ({navigation, onPress,onLongPress }) => {
	const handleGoTo=screen=>{
		navigation.navigate(screen);
	};
	
	const Pilih = ()=>{
	const [chooseData, setchooseData] = useState('Pilih Jenis Sepatu');

	const [isModalVisible, setisModalVisible] = useState(false);

		const changeModalVisibility = (bool) =>{
			setisModalVisible(bool)
		}

		const setData=(option)=>{
			setchooseData(option)
		}

		return(
		<SafeAreaView style={styles.container}>
			<TouchableOpacity onPress={()=>changeModalVisibility(true)} 
			style={styles.touch}>
				<Text style={styles.text}>
				{chooseData}
				</Text>
			</TouchableOpacity>
			<Modal transparent={true} animationType='fade' visible={isModalVisible} 
			nRequestClose={() =>changeModalVisibility(false) } >
				<Pick changeModalVisibility={changeModalVisibility}
				setData={setData}/>
			</Modal >
		</SafeAreaView>
		)
	}
	
	const Pilih2 = ()=>{
		const [chooseData, setchooseData] = useState('Pilih Waktu Pengerjaan');
	
		const [isModalVisible, setisModalVisible] = useState(false);
	
			const changeModalVisibility = (bool) =>{
				setisModalVisible(bool)
			}
	
			const setData=(option)=>{
				setchooseData(option)
			}
	
			return(
			<SafeAreaView style={styles.container}>
				<TouchableOpacity onPress={()=>changeModalVisibility(true)} 
				style={styles.touch}>
					<Text style={styles.text}>
					{chooseData}
					</Text>
				</TouchableOpacity>
				<Modal transparent={true} animationType='fade' visible={isModalVisible} 
				nRequestClose={() =>changeModalVisibility(false) } >
					<Pick2 changeModalVisibility={changeModalVisibility}
					setData={setData}/>
				</Modal >
			</SafeAreaView>
			)
		}
	

		const Pilih3 = ()=>{
			const [chooseData, setchooseData] = useState('Pilih Metode Pembayaran');
		
			const [isModalVisible, setisModalVisible] = useState(false);
		
				const changeModalVisibility = (bool) =>{
					setisModalVisible(bool)
				}
		
				const setData=(option)=>{
					setchooseData(option)
				}
		
				return(
				<SafeAreaView style={styles.container}>
					<TouchableOpacity onPress={()=>changeModalVisibility(true)} 
					style={styles.touch}>
						<Text style={styles.text}>
						{chooseData}
						</Text>
					</TouchableOpacity>
					<Modal transparent={true} animationType='fade' visible={isModalVisible} 
					nRequestClose={() =>changeModalVisibility(false) } >
						<Pick3 changeModalVisibility={changeModalVisibility}
						setData={setData}/>
					</Modal >
				</SafeAreaView>
				)
			}
		

	return (
		<View style={styles.page}>
			<ScrollView showsVerticalScrollIndicator={false}>
			<ImageBackground source={BackgroundSatu} style={styles.header}>
					{/* <Image source={Logo} style={styles.logo} /> */}
					{/* <View	style={styles.hello}>
						<Text style={styles.selamat}>Selamat Datang </Text>
						<Text style={styles.username}>Arya Daulat</Text>
					</View> */}
			</ImageBackground>
			{/* <Text>Nama</Text> */}
			{/* <TextInput></TextInput> */}
			<Text style={styles.label}>FORMULIR PENYUCIAN</Text>
			<Text style={styles.nama}> Nama</Text>
			<View style={styles.form}>
					<TextInput style={styles.input}></TextInput>
			</View>
			<Text style={styles.nama}>Jenis</Text>
			<TouchableOpacity onPress={onPress} style={styles.pilih}>
				<Pilih />
			</TouchableOpacity>
			<Text style={styles.nama}> Alamat</Text>
			<View style={styles.form}>
					<TextInput style={styles.input}></TextInput>
			</View>
			<Text style={styles.nama}> No.WhatsApp</Text>
			<View style={styles.form}>
					<TextInput style={styles.input}></TextInput>
			</View>
				<Text style={styles.nama}>Waktu Pengerjaan</Text>
				<TouchableOpacity onPress={onPress}
            onLongPress={onLongPress}  style={styles.pilih}>
					<Pilih2 />
				</TouchableOpacity>
				
				<Text style={styles.nama}>Metode Pembayaran</Text>
				<TouchableOpacity onPress={onPress}
            onLongPress={onLongPress}  style={styles.pilih}>
					<Pilih3 />
				</TouchableOpacity>
					<View style={styles.buatpesanan}>
					<ButtonIcon title="BuatPesanan" type="layanan" onPress={()=> handleGoTo('AkhirForm')}/>

					</View>

			</ScrollView>
		</View>
	)

}

export default Pesanan
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
	label: {
		 paddingHorizontal:100 ,
		fontSize: 18,
		fontFamily: 'TitilliumWeb-Bold'
	},
	form: {
		padding: 1,
		backgroundColor:'#BBEDE9',
		flexDirection: 'row',
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,	
		elevation: 1,
		marginVertical: windowHeight*0.02,
		alignItems: 'center'
	},
	input: {
		
	},
	nama: {
		fontSize:18,
		fontFamily: 'TitilliumWeb-Bold'
	},
	pick:{
		padding: 1,
		backgroundColor:'#BBEDE9',
		flexDirection: 'row',
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,	
		elevation: 1,
		marginVertical: windowHeight*0.02,
		alignItems: 'center'
	},
	touch:{
		padding : 17,
		backgroundColor: '#BBEDE9',
		alignSelf: 'stretch',
		paddingHorizontal: 20
	},
	pilih:{
		padding: 1,
		backgroundColor:'#BBEDE9',
		flexDirection: 'row',
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,	
		elevation: 1,
		marginVertical: windowHeight*0.02,
		alignItems: 'center'
	},
	container:{
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	
	},
	buatpesanan:{
		// flex: 1,
		// backgroundColor: '#BBEDE9',
		// alignItems: 'center',
		// width: windowWidth* 0.5,
		// height: windowHeight * 0.09	,
		// paddingHorizontal: 25,
		// paddingTop: 25,
		backgroundColor: '#BBEDE9',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 17,
		marginHorizontal: 90,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,
		marginTop: windowHeight*0.02,
		marginBottom: windowHeight*0.05,
		flexDirection:'row'
	},
	textpesanan:{
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	buatpesanan:{
		marginLeft:25,
		padding: 15,
		alignItems: 'center',
		// justifyContent: 'center',
	}
})
