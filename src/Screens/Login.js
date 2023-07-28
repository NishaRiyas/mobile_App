import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View,ScrollView } from 'react-native';
import { Colors } from '../assest/Colors';
import PhoneInput from 'react-native-phone-number-input';
// import { EvilIcons } from '@expo/vector-icons';
// import PhoneInputWithDropdown from '../Components/CoutryPicker';
import { useNavigation } from '@react-navigation/native';
// import FlagDropdown from '../Components/FlagComponent';
import ExternalStyle from '../assest/Style';
import CustomButton from '../Components/CustomButtom';
import SocialButton from '../Components/SocialButton';

export default function Login() {
  const [value, setValue] = useState()
  const navigation = useNavigation();
  // const [selectedFlag, setSelectedFlag] = useState({ code: '+91', image: require('../assest/images/image1.png') });
  
  

  const navigateToOtp = () => {
    
    navigation.navigate('Otpverification');
  };
  const navigateToLogin = () => {
    
    navigation.navigate('Register');
  };

  return (
    <ImageBackground source={require('../assest/images/back.jpg')} style={ExternalStyle.container}>
      <ScrollView style={styles.container}>
        <Text style={[styles.text, styles.text1]}>welcome back</Text>
        <Text style={styles.text2}>Login your own Account!</Text>
        {/* <PhoneInputWithDropdown/> */}
        {/* <View style={styles.flagInputContainer}>
          <FlagDropdown onSelectFlag={setSelectedFlag} />
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
          </View> */}
        {/* <View style={styles.inputContainer}>
          <Image source={require('../assest/images/gimage.jpg')} style={styles.flag} />
          <Text style={styles.phoneCode}>+91</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
          </View> */}
        {/* <TextInput style={styles.textinput} placeholder="Username" /> */}
        <View style={styles.phoneInputContainer}>
          <PhoneInput
            placeholder="Phone Number"
            value={value}
            onChange={setValue}
            textContainerStyle={styles.phoneInputTextContainer}
            flagButtonStyle={styles.flagButtonStyle}
            codeTextStyle={{ color: '#fff' }} // Customize the phone number text color
          />
        </View>
        {/* <TouchableOpacity style={styles.button} onPress={navigateToOtp}>
        <Text style={styles.buttonText} >Continue</Text>
      </TouchableOpacity> */}
      <CustomButton onPress={navigateToOtp} text="Continue" />
      <Text style={{color:'white',marginLeft:'10%',fontSize: 16,marginTop:'5%'}}>We’ll send OTP for Verification</Text>
      {/* <TouchableOpacity style={styles.facebook} >
      <EvilIcons name="sc-facebook" size={28} color="white" />
        <Text style={styles.buttonText}>Log in With Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.google} >
        <Image style={styles.image} source={require('../assest/images/gimage.jpg')}/>
        <Text style={styles.gtext}>Log in with Google</Text>
      </TouchableOpacity> */}
      <SocialButton type="facebook"/>
      <SocialButton type="google"/>
      {/* <TouchableOpacity style={styles.button} onPress={navigateToLogin} >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity> */}
      <CustomButton onPress={navigateToLogin} text="Register" />
     
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    paddingHorizontal: '5%',
    opacity:0.7,
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
  background:{
    width:'100%',
    height:'100%',

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
  // phoneInputContainer: {
  //   borderRadius: 20,
  //   backgroundColor: Colors.Bordercolor,
  //   padding: 10,
  //   marginTop: '10%',
  // },
  phoneInputContainer: {
    marginTop: '10%',
    borderRadius: 30, 
    overflow: 'hidden', 
  },
  phoneInputTextContainer: {
    // borderRadius: 20,
    backgroundColor: Colors.Bordercolor,
    padding: 10,
    
   
  },
  flagButtonStyle: {
    backgroundColor: Colors.Bordercolor, 
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
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 10,
    borderRadius:20,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  phoneCode: {
    fontSize: 18,
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    fontSize: 18,
  },
  flagInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  phoneInput: {
    flex: 1,
    color: '#fff',
    marginVertical: '5%',
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
    backgroundColor: Colors.Bordercolor,
    padding: '4%',
  },
});
