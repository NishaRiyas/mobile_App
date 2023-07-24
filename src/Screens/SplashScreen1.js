import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../assest/Colors'
import Ellipse from '../Components/Ellipse'
import { useNavigation } from '@react-navigation/native'; 

export default function SplashScreen() {
    const navigation = useNavigation(); // Access the navigation prop

  const handleSkip = () => {
    navigation.navigate('SplashScreen2'); // Navigate to SplashScreen2
  };
  return (
    <View>
        <View style={styles.imagecontainer}>
        <Image  style ={styles.image} source={require('../assest/images/image1.png')}/>
        <Image  style ={styles.image} source={require('../assest/images/image2.png')}/>
        </View>
        <View>
        <Image  style ={styles.imagevertical} source={require('../assest/images/image4.jpeg')}/>
        <View style={styles.textall}>
            <Text style={styles.text}>AT</Text>
            <View>
                <Text style={styles.texts}>ANYWHERE</Text>
                <Text style={styles.texts}> ANYTIME</Text>
            </View>
            </View>
            <View>
                <Text style={styles.bottom}>
                BOOK your appointment online and connect with a doctor to get medical advice at your place with your preferred timings
                </Text>
            </View>
        </View>
        <View style={styles.skip}>
        <View style={styles.ellipse}>
        <Ellipse width={15} height={10}/>
        <Ellipse width={15} height={10}/>
        <Ellipse width={15} height={10}/>
        </View>
        <View>
            <Text onPress={handleSkip}>Skip</Text>
        
        </View>
        
        </View>
    </View>
    
  )
}
const styles = StyleSheet.create({

    image:{
        width : 120,
        height: 120,
        borderWidth: 8,
        borderColor: Colors.Bordercolor,
    },
    imagecontainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop: '10%',
    },
    imagevertical:{
        width : '80%',
        height: '30%',
        borderWidth: 5,
        borderColor: Colors.Bordercolor,
        marginHorizontal:'10%',
        marginTop: '5%',

    },
    text:{
        fontFamily: 'Abhaya Libre',
        fontSize: 70,
        fontWeight: '400',
         lineHeight: 94,
        letterSpacing: 0,
        // textAlign: 'center',
    },
    texts:{
        fontFamily: 'Abhaya Libre',
    fontSize: 25,
    fontWeight: '400',
     lineHeight: 39,
    letterSpacing: 0,
    alignItems:'flex-start',
    },
    textall:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:'5%',
        
    },
    bottom:{
        fontFamily: 'Abhaya Libre',
    fontSize: 25,
    fontWeight: '400',
    // lineHeight: 39,
    letterSpacing: 0,
    // alignItems:'center',
    justifyContent:'center',
    marginHorizontal:'5%',
    },
    ellipse:{
        flexDirection:'row',
    // marginHorizontal:'10%',
    
    },
    skip:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:'10%',
    }
})
