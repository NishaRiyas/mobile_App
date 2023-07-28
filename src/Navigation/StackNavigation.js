import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import SplashScreen from '../Screens/SplashScreen1';
import SplashScreenNext from '../Screens/SplashScreen2';
import Login from '../Screens/Login';
import OTPVerification from '../Screens/OtpVerification';
import Register from '../Screens/Register';
import ResendCode from '../Screens/ResendCode';
import DashBoard from '../Screens/DashBoard';

const stack = createNativeStackNavigator();


export default function StackNavigation() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name ="SplashScreen1" component={SplashScreen} />
        <stack.Screen name ="SplashScreen2" component={SplashScreenNext}/>
        <stack.Screen name ="Login" component={Login}/>
        <stack.Screen name ="Register" component={Register}/>
        <stack.Screen name ="Otpverification" component={OTPVerification}/>
        <stack.Screen name='ResendCode' component={ResendCode}/>
        <stack.Screen name='Dashboard' component={DashBoard}/>
      </stack.Navigator>

    </NavigationContainer>
    
  )
}
