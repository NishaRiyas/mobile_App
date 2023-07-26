import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../assest/Colors';
import PhoneInput from 'react-native-phone-number-input';
import { EvilIcons } from '@expo/vector-icons';
import PhoneInputWithDropdown from '../Components/CoutryPicker';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  
  

  const navigateToOtp = () => {
    
    navigation.navigate('Otpverification');
  };
  const navigateToLogin = () => {
    
    navigation.navigate('Register');
  };

  return (
    <ImageBackground source={require('../assest/images/image7.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={[styles.text, styles.text1]}>welcome back</Text>
        <Text style={styles.text2}>Login your own Account!</Text>
        <PhoneInputWithDropdown/>
        {/* <TextInput style={styles.textinput} placeholder="Username" /> */}
        {/* <View>
          <PhoneInput
            placeholder="Phone Number"
            value={value}
            onChange={setValue}
            textContainerStyle={styles.phoneInputTextContainer}
            flagButtonStyle={styles.flagButtonStyle}
            codeTextStyle={{ color: '#fff' }} // Customize the phone number text color
          />
        </View> */}
        <TouchableOpacity style={styles.button} onPress={navigateToOtp}>
        <Text style={styles.buttonText} >Continue</Text>
      </TouchableOpacity>
      <Text style={{color:'white',marginLeft:'10%'}}>We’ll send OTP for Verification</Text>
      <TouchableOpacity style={styles.facebook} >
      <EvilIcons name="sc-facebook" size={28} color="white" />
        <Text style={styles.buttonText}>Log in With Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.google} >
        <Image style={styles.image} source={require('../assest/images/gimage.jpg')}/>
        <Text style={styles.gtext}>Log in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToLogin} >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
     
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: '10%',
  },
  text: {
    color: '#fff',
    fontFamily: 'Abhaya Libre',
    marginTop: '10%',
  },
  text1: {
    fontSize: 40,
    fontWeight: '700',
  },
  text2: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  textinput: {
    marginVertical: '10%',
    width: '80%',
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
    backgroundColor: Colors.BlueColor,
    padding: '4%',
    alignItems:'center',
    justifyContent:'center',
    
  },
  phoneInputContainer: {
    borderRadius: 20,
    backgroundColor: Colors.Bordercolor,
    padding: 10,
    marginTop: '10%',
  },
  phoneInputTextContainer: {
    borderRadius: 20,
    backgroundColor: 'black',
    padding: 10,
   
  },
  flagButtonStyle: {
    backgroundColor: 'green', 
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 10,
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
  facebook:{
    flexDirection:'row',
    backgroundColor: Colors.facebookColor,
    paddingVertical: '4%',
    marginTop: '12%',
    borderRadius: 20,
    justifyContent:'center',
    alignItems: 'center',
  },
  google:{
    flexDirection:'row',
    backgroundColor: 'white',
    paddingVertical: '4%',
    marginTop: '12%',
    borderRadius: 20,
    justifyContent:'center',
    alignItems: 'center',
  },
  image:{
    width: 20,
    height: 20,
    marginRight: 10,

  },
  gtext:{
    fontSize: 22,
    fontWeight: '700',
  }
});
