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
import ExternalStyle from '../assest/Style'
import OTPInput from '../Components/OTPInput'

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
      navigation.navigate('Dashboard');
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
  

  
    <ImageBackground source={require('../assest/images/back.jpg')} style={ExternalStyle.container}>

    <View style={styles.container}>
    <FontAwesome5 name="arrow-left" size={30} color="white" onPress={handleBackButton} />
      <Text style={styles.text}>Verification</Text>
      <Text style={styles.text1}>Enter the OTP from the phone we just sent you.</Text>
      {/* <View style={styles.otpcontainer}>
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
      </View> */}
      <View style={styles.otpcontainer}>
      <OTPInput
        value={otp[1]}
        onChangeText={(text) => {
          setOtp({ ...otp, 1: text });
          text && secondInput.current.focus();
        }}
        
        refCallback={firstInput}
      />
      <OTPInput
        value={otp[2]}
        onChangeText={(text) => {
          setOtp({ ...otp, 2: text });
          text ? thirdInput.current.focus() : firstInput.current.focus();
        }}
        
        refCallback={secondInput}
      />
      <OTPInput
        value={otp[3]}
        onChangeText={(text) => {
          setOtp({ ...otp, 3: text });
          text ? forthInput.current.focus() : secondInput.current.focus();
        }}
       
        refCallback={thirdInput}
      />
      <OTPInput
        value={otp[4]}
        onChangeText={(text) => {
          setOtp({ ...otp, 4: text });
          !text && thirdInput.current.focus();
        }}
        
        refCallback={forthInput}
      />
    </View>
      <View style={styles.bottom}>
      <Text style={styles.text1}> Didn't receive OTP Code! </Text>
      <Text style={{fontWeight:900,color:'#fff', fontSize: 15,}} onPress={handleResend}>Resend</Text>
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
    marginTop:'10%',
    paddingHorizontal: '5%',
    opacity:0.7,
  },
  text:{
    color:'#fff',
    marginTop:'10%',
    fontSize: 22,
    fontWeight: '700',
    
  },
 
    // background:{
    //   width:'100%',
    //   height:'100%',

    // },
  otpcontainer:{
   
     flex: 0.3,
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'row',
  },
  otpbox:{
    borderRadius: 10,
    backgroundColor:Colors.Bordercolor,
    // marginHorizontal:'10%',
  
  },
  otptext:{
    fontSize:20,
    color:'#fff',
    textAlign:'center',
    // justifyContent:'space-around',
    //   paddingHorizontal:18,
    //  paddingVertical:10,
    padding:12
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
