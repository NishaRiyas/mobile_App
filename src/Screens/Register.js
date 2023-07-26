import React from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../assest/Colors'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();
  const navigateToRegister = () => {
    
    navigation.navigate('Login');
  };
  return (

    <ImageBackground source={require('../assest/images/image7.png')} style={styles.background}>

    <View style={styles.container}>
        <Text style={styles.text}>Register</Text>
        <Text style={styles.text1}>Create your Account!</Text>
    
        <TextInput
  style={styles.textinput}
  placeholder="Username"
  placeholderTextColor="#fff" 
  fontSize={22} 
  paddingVertical={12} 
  paddingHorizontal={50} />
  <TextInput
  style={styles.textinput}
  placeholder="Email"
  placeholderTextColor="#fff" 
  fontSize={22} 
  paddingVertical={12} 
  paddingHorizontal={50} />
  <TextInput
  style={styles.textinput}
  placeholder="MobileNumber"
  placeholderTextColor="#fff" 
  fontSize={22} 
  paddingVertical={12} 
  paddingHorizontal={50} />
  <TextInput
  style={styles.textinput}
  placeholder="NIRC Number"
  placeholderTextColor="#fff" 
  fontSize={22} 
  paddingVertical={12} 
  paddingHorizontal={50} />
  <TextInput
  style={styles.textinput}
  placeholder="Password"
  placeholderTextColor="#fff" 
  fontSize={22} 
  paddingVertical={12} 
  paddingHorizontal={50} />
  <TextInput
  style={styles.textinput}
  placeholder="Confirm Password"
  placeholderTextColor="#fff" 
  fontSize={22} 
  paddingVertical={12} 
  paddingHorizontal={50} />
  <TouchableOpacity style={styles.button} onPress={navigateToRegister}>
        <Text style={styles.buttonText} >Continue</Text>
      </TouchableOpacity>

    </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal: '10%'
        },
        text: {
            color: '#fff',
            fontFamily: 'Abhaya Libre',
            marginTop: '10%',
            fontSize: 40,
            fontWeight: '700',
          },
          background:{
            width:'100%',
            height:'100%',

          },
          text1:{
            color: '#fff',
            fontFamily: 'Abhaya Libre',
            marginTop: '5%',
            fontSize: 22,
            fontWeight: '700',
          },
          textinput: {
            color: '#fff',
             marginVertical: '5%',
            width: '100%',
            borderRadius: 50,
            borderColor: '#fff',
            borderWidth: 2,
            backgroundColor: Colors.Bordercolor,
            padding: '4%',
            // alignItems:'center',
            // justifyContent:'center',
           
          },
          textinput1:{
            color: '#fff',
             marginVertical: '5%',
            width: '100%',
            borderRadius: 50,
            borderColor: '#fff',
            borderWidth: 2,
            backgroundColor: Colors.BlueColor,
            padding: '4%',
          },
          button: {
            backgroundColor: Colors.BlueColor,
            paddingVertical: '4%',
            marginTop: '12%',
            borderRadius: 20,
            alignItems: 'center',
            // marginHorizontal:'10%'
            
          },
          buttonText: {
            color: 'white',
            
            fontSize: 22,
            fontWeight: '700',
          },
    
})