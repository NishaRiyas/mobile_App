import React from 'react';
import { View, StyleSheet } from 'react-native';

const Ellipse = ({ width, height }) => {
  return (
    <View style={[styles.ellipse, { width, height }]} />
  );
};

const styles = StyleSheet.create({
  ellipse: {
    borderRadius: 50, 
    backgroundColor: '#71C549',
  },
});

export default Ellipse;
