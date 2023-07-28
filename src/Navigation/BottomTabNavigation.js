import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import DashBoard from "../Screens/DashBoard";

import Appointment from "../Screens/Appointment";
import Message from "../Screens/Message";
import VectorPlus from "../Screens/VectorPlus";
import UserSetting from "../Screens/UserSetting";
import {Ionicons,Fontisto, AntDesign,FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
1
// const BottomTab = createMaterialBottomTabNavigator();

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <BottomTab.Navigator tabBarOptions={{showLabel: false, }} screenOptions={{headerShown:false}} >
      {/*  activeColor="#DCCFF7"
    inactiveColor="#D6D6D6" labeled="false"  barStyle={{ backgroundColor: '#fff' }}barStyle={{ backgroundColor: '#694fad' }} */}
        <BottomTab.Screen name="Dashboard" component={DashBoard}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          
        }}/>
        <BottomTab.Screen name="Appointment" component={Appointment}
        options={{
          tabBarIcon: ( { color }) => (
            <Fontisto name="date" color={color} size={22} />
          ),
        }}/>
        <BottomTab.Screen name ="Message" component={Message}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-chatbox-ellipses" color={color} size={26}  />
          ),
        }}/>
        <BottomTab.Screen name="Plus" component={VectorPlus}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="plussquareo" color={color} size={22}  />
          ),
        }}/>
        <BottomTab.Screen name="UserSetting" component={UserSetting}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={24}  />
          ),
        }}/>
    </BottomTab.Navigator>
  )
}
// <Entypo name="home" size={24} color="black" />   
// <Ionicons name="ios-chatbox-ellipses" size={24} color="black" />
// <Fontisto name="date" size={24} color="black" />
// <AntDesign name="plussquareo" size={24} color="black" />
// <FontAwesome name="user" size={24} color="black" />