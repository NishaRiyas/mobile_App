import React, { useRef, useState } from 'react'
import { Alert, ImageBackground } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { Colors } from '../assest/Colors'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons';

export default function OTPVerification() {
  const navigation = useNavigation();
  const firstInput = useRef()
  const secondInput = useRef()
  const thirdInput = useRef()
  const forthInput = useRef()
  const actualOTP = '0000';
  const [otp, setOtp] = useState({1: '', 2: '', 3:'', 4:''})
  const handleBackButton = () => {
    navigation.goBack();
    }

  const handleOTPVerification = () => {
    const enteredOTP = `${otp[1]}${otp[2]}${otp[3]}${otp[4]}`;

    if (enteredOTP === actualOTP) {
  
      console.log('OTP is correct. Navigating to Login page.');
      navigation.navigate('Register');
    } else {
      
      console.log('Incorrect OTP. Please try again.');
      Alert.alert('Incorrect OTP', 'Please enter the correct OTP or Resend the Code.',
      [
        {
            text: 'OK',
            onPress: () => {
              navigation.navigate('ResendCode');
             
          },
        },
        {
          text:'Cancel',
        }
      ]);
    }
  };
  const handleResend = () => {
    
    navigation.navigate('ResendCode');
  };
  
  return (
    <ImageBackground source={require('../assest/images/back.jpg')} style={styles.background}>

    <View style={styles.container}>
    <FontAwesome5 name="arrow-left" size={30} color="white" onPress={handleBackButton} />
      <Text style={styles.text}>Verification</Text>
      <Text style={styles.text1}>Enter the OTP from the phone we just sent you.</Text>
      <View style={styles.otpcontainer}>
        <View  style={styles.otpbox}>
          <TextInput style={styles.otptext} keyboardType='number-pad' maxLength={1}
          ref={firstInput}
          onChangeText={text=>{
            setOtp({...otp, 1:text})
            text && secondInput.current.focus();
           }}/>
        </View>
        <View style={styles.otpbox}>
          <TextInput style={styles.otptext} keyboardType='number-pad' maxLength={1}
           ref={secondInput}
           onChangeText={text=>{
            setOtp({...otp, 2:text})
            text ? thirdInput.current.focus() : firstInput.current.focus()
           }}/>
        </View>
        <View style={styles.otpbox}>
          <TextInput style={styles.otptext} keyboardType='number-pad' maxLength={1}
           ref={thirdInput}
           onChangeText={text=>{
            setOtp({...otp, 3:text})
            text ? forthInput.current.focus() : secondInput.current.focus()
           }}/>
        </View>
        <View style={styles.otpbox}>
          <TextInput style={styles.otptext} keyboardType='number-pad' maxLength={1}
           ref={forthInput}
           onChangeText={text=>{
            setOtp({...otp, 4:text})
            !text && thirdInput.current.focus();
           }}/>
        </View>
      </View>
      <View style={styles.bottom}>
      <Text style={styles.text1}> Didn't receive OTP Code! </Text><Text style={{fontWeight:900,color:'#fff', fontSize: 15,}} onPress={handleResend}>Resend</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleOTPVerification} >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
      )
}
const styles = StyleSheet.create({
  container:{
    flex :1,
    marginTop:'20%',
    paddingHorizontal: '10%',
    opacity:0.7,
  },
  text:{
    color:'#fff',
    marginTop:'10%',
   
    fontSize: 22,
    fontWeight: '700',
    
  },
 
    background:{
      width:'100%',
      height:'100%',

    },
  otpcontainer:{
    marginHorizontal:'10%',
    marginVertical:'10%',
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'row',
  },
  otpbox:{
    borderRadius: 10,
    backgroundColor:Colors.Bordercolor,
    marginHorizontal:'10%',
  
  },
  otptext:{
    fontSize:20,
    color:'#fff',
    textAlign:'center',
    paddingHorizontal:18,
    paddingVertical:10,
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
  text1:{
    color:'#fff',
    fontSize: 15,
    fontWeight: '400',

  },
  bottom:{
    flexDirection:'row',
    justifyContent:'space-around',
  }

})
