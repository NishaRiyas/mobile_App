import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'; 
import { TextInput } from 'react-native';
import { Colors } from '../assest/Colors';
import ExternalStyle from '../assest/Style';

export default function SplashScreenNext() {
    const navigation = useNavigation(); 

  const handleSkip = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={ExternalStyle.container}>
        
        <Image style={styles.imagecontainer}  source={require('../assest/images/image6.png')}/>
        <Text style={styles.text}> Get consulted with experts through VIDEO CALL, CHAT and VISIT</Text>
        <Text style={styles.text1}>Feeling UNWELL or looking forward to get suggestions with your preference?</Text>
         <View style={styles.skip}>
            <View style={styles.ellipse}>
            <TextInput style={styles.textinput}/>
           
            <TextInput style={styles.textinput}/>
            <TextInput style={styles.textInput1}/>
            </View>
            <View>
                <Text onPress={handleSkip}>Skip</Text>
            </View>

         
         </View>
    </View>
  )
}
const styles = StyleSheet.create({
    
    imagecontainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:'20%',
        marginHorizontal:'10%',
    },
    container:{
        backgroundColor:'#fff',
        flex:1,
        marginTop:'10%',
    },
    text:{
        fontFamily: 'Abhaya Libre',
        fontSize: 30,
        fontWeight: '700',
         lineHeight: 40,
         marginTop:'10%',
       
         textAlign: 'center',
    },
    text1:{
        marginTop:'10%',
        fontFamily: 'Abhaya Libre',
        fontSize: 20,
        fontWeight: '400',
         lineHeight: 25,
        
         textAlign: 'center',
    },
    ellipse:{
        flexDirection:'row',
    // marginHorizontal:'10%',
    
    },
    skip:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:'10%',
        marginTop:'40%',
    },
    textinput:{
        borderRadius:50,
        height:10,
        width:15,
        backgroundColor: Colors.Bordercolor,
    },
    textInput1:{
        backgroundColor : '#71C549',
        borderRadius:50,
        height:10,
        width:15,
    },

})
// AbhayaLibre-Regular
// //