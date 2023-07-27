import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Colors } from '../assest/Colors';

const CustomTextInput = ({ placeholder }) => {
  return (
    <TextInput
      style={styles.textinput}
      placeholder={placeholder}
      placeholderTextColor="#fff"
      fontSize={22}
      paddingVertical={12}
      paddingHorizontal={50}
    />
  );
};

const styles = StyleSheet.create({
  textinput: {
    color: '#fff',
    marginVertical: '5%',
    width: '100%',
    borderRadius: 50,
    
    backgroundColor: Colors.Bordercolor,
    padding: '4%',
    // opacity:0.5,
  },
});

export default CustomTextInput;
