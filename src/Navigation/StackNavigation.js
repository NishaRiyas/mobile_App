import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import SplashScreen from '../Screens/SplashScreen1';
import SplashScreenNext from '../Screens/SplashScreen2';
import Login from '../Screens/Login';

const stack = createNativeStackNavigator();


export default function StackNavigation() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name ="SplashScreen1" component={SplashScreen} />
        <stack.Screen name ="SplashScreen2" component={SplashScreenNext}/>
        <stack.Screen name ="Login" component={Login}/>
      </stack.Navigator>

    </NavigationContainer>
    
  )
}
