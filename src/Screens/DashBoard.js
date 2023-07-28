import React from 'react'
import { Text, StyleSheet, TextInput } from 'react-native'
import { View } from 'react-native'
import ExternalStyle from '../assest/Style'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons,EvilIcons } from '@expo/vector-icons';
import { Colors } from '../assest/Colors';

export default function DashBoard() {
  return (
    <View style={ExternalStyle.container}>
        <View style={styles.headerSub}>
        <View style={styles.header}>
        <MaterialIcons name="location-pin" size={24} color="black" />
        <Text>Chennai</Text>
        </View>
        
        <Ionicons name="ios-notifications-sharp" size={24} color="black" />
        </View>
        <View style={styles.textinput}>
        <EvilIcons name="search" size={24} color="black" />

        <TextInput  placeholder='What type of Appointment'/>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
         flexDirection:'row',
        justifyContent:'center',
        
    },
    headerSub:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    textinput:{
      
        flexDirection:'row',
        borderRadius:20,
        borderWidth:1,
        marginHorizontal:'2%',
       
        gap:30,
        height:50,
        // paddingHorizontal:'15%',
        alignItems:'center',
    }

})
