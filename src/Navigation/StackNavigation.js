import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../Screens/SplashScreen1';
import SplashScreenNext from '../Screens/SplashScreen2';
import Login from '../Screens/Login';
import OTPVerification from '../Screens/OtpVerification';
import Register from '../Screens/Register';
import ResendCode from '../Screens/ResendCode';
import DashBoard from '../Screens/DashBoard';
import BottomTabNavigation from './BottomTabNavigation';

const stack = createNativeStackNavigator();

export default function StackNavigation() {
  const [appHasBeenLaunched, setAppHasBeenLaunched] = useState(false);

  useEffect(() => {
   
    const checkAppLaunchedStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('@appLaunched');
        if (value === null) {
          
          setAppHasBeenLaunched(false);
         
          await AsyncStorage.setItem('@appLaunched', 'true');
        } else {
          
          setAppHasBeenLaunched(true);
        }
      } catch (error) {
        console.log('Error checking app launched status:', error);
      }
    };

    checkAppLaunchedStatus();
  }, []);

  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        {appHasBeenLaunched ? (
          <>
            <stack.Screen name="Login" component={Login} />
            <stack.Screen name="Register" component={Register} />
            <stack.Screen name="Otpverification" component={OTPVerification} />
            <stack.Screen name="ResendCode" component={ResendCode} />
            <stack.Screen name="Dashboard" component={BottomTabNavigation} />
          </>
        ) : (
          <>
            <stack.Screen name="SplashScreen1" component={SplashScreen} />
            <stack.Screen name="SplashScreen2" component={SplashScreenNext} />
            <stack.Screen name="Login" component={Login} />
            <stack.Screen name="Register" component={Register} />
            <stack.Screen name="Otpverification" component={OTPVerification} />
            <stack.Screen name="ResendCode" component={ResendCode} />
            <stack.Screen name="Dashboard" component={DashBoard} />
          </>
        )}
      </stack.Navigator>
    </NavigationContainer>
  );
}
