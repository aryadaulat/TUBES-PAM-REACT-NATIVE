import React from 'react'
import { StyleSheet, Text, View ,Image } from 'react-native'
import {IconGopay,IconArrow,IconHigh,IconHiking,IconSneakers,IconLoafers
	,IconHeels,IconFlat,IconRoger, IconAkun,BuatPesanan,Settings,
	Logout,Order,History} from "../../assets"
import {TouchableOpacity } from 'react-native-gesture-handler';

const ButtonIcon = ({title , type,onPress}) => {
			const Icon = () => {
				if(title =="Gopay") return <IconGopay />

				if(title =="Arrow") return <IconArrow />

				if(title == "High") return <IconHigh />
				
				if(title == "Hiking") return <IconHiking />

				if(title == "Sneakers") return <IconSneakers />

				if(title == "Loafers") return <IconLoafers />

				if(title == "Heels") return <IconHeels />

				if(title == "Flat") return <IconFlat />

				if(title == "Roger") return <IconRoger />

				if(title == "Akun") return <IconAkun />

				if(title == "BuatPesanan") return <BuatPesanan />

				if(title == "Settings") return <Settings />

				if(title == "Logout") return <Logout />

				if(title == "Order") return <Order />

				if(title == "History") return <History />

				return <IconGopay />
				
			}

	return (
		<TouchableOpacity style={styles.container(type)} onPress={onPress} >
			<View style={styles.icon(type)}>
				<Icon/>
			</View>
		</TouchableOpacity>
		
	)
}

export default ButtonIcon

const styles = StyleSheet.create({
	container:(type)=> ({
		marginBottom: 12,
		marginRight	:type === "layanan" ? 30 : 0	
	}),
	icon: (type) => ({
		// backgroundColor: 'white',
		padding: type === "layanan" ? 3 : 7,
		borderRadius: 10,
	}),

})
