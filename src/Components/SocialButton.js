import React from 'react';
import { TouchableOpacity, Text, Image,StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';     
import { Colors } from '../assest/Colors';
 

const SocialButton = ({ type, onPress }) => {
  const getIconName = () => {
    return type === 'facebook' ? 'sc-facebook' : 'sc-google';
  };

  const getButtonText = () => {
    return type === 'facebook' ? 'Log in With Facebook' : 'Log in with Google';
  };

  const getButtonStyle = () => {
    return type === 'facebook' ? styles.facebook : styles.google;
  };
  const getTextColor = () => {
    return type === 'facebook' ? 'white' : 'black';
  };

  return (
    <TouchableOpacity style={getButtonStyle()} onPress={onPress}>
      {type === 'facebook' && <EvilIcons name={getIconName()} size={28} color="white" />}
      {type === 'google' && <Image style={styles.image} source={require('../assest/images/gimage.jpg')} />}
      <Text style={[styles.buttonText, { color: getTextColor() }]}>{getButtonText()}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;
const styles = StyleSheet.create({
    buttonText: {
        // color: 'black',
        
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
        opacity:0.7
    
      },
})
