import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Text, View } from 'react-native'
import Ellipse from '../Components/Ellipse'
import { useNavigation } from '@react-navigation/native'; 

export default function SplashScreenNext() {
    const navigation = useNavigation(); // Access the navigation prop

  const handleSkip = () => {
    navigation.navigate('Login'); // Navigate to SplashScreen2
  };
  return (
    <View style={styles.container}>
        
        <Image style={styles.imagecontainer}  source={require('../assest/images/image6.png')}/>
        <Text style={styles.text}> Get consulted with experts through VIDEO CALL, CHAT and VISIT</Text>
        <Text style={styles.text1}>Feeling UNWELL or looking forward to get suggestions with your preference?</Text>
         <View style={styles.skip}>
            <View style={styles.ellipse}>
                <Ellipse  width={15} height={10}/>
                <Ellipse  width={15} height={10}/>
                <Ellipse  width={15} height={10}/>
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
        backgroundColor:'#fff'
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
        marginTop:'30%',
    }

})