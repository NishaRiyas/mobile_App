import React from 'react';
import { View, TextInput,StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const OTPInput = ({ value, maxLength, focusOnNext, focusOnPrevious, onChangeText, inputRef }) => {
  const handleTextChange = (text) => {
    onChangeText(text);
    if (text && focusOnNext) {
      focusOnNext();
    } else if (!text && focusOnPrevious) {
      focusOnPrevious();
    }
  };

  return (
    <View style={styles.otpbox}>
      <TextInput
        style={styles.otptext}
        keyboardType='number-pad'
        maxLength={maxLength}
        ref={inputRef}
        onChangeText={handleTextChange}
        value={value}
      />
    </View>
  );
};

export default OTPInput;
const styles = StyleSheet.create({
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
        padding:15,
      }, 
})
