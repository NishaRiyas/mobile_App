import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Colors } from '../assest/Colors';

const OTPInput = ({ value, onChangeText,  refCallback }) => {
  return (
    <View style={styles.otpbox}>
      <TextInput
        style={styles.otptext}
        keyboardType="number-pad"
        maxLength={1}
        value={value}
        onChangeText={onChangeText}
        ref={refCallback}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  otpbox: {
    borderRadius: 10,
    backgroundColor: Colors.Bordercolor,
    
  },
  otptext: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    padding: 12,
    
  },
});

export default OTPInput;
