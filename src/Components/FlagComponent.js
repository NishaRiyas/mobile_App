// FlagDropdown.js

import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Colors } from '../assest/Colors';

const flagsData = [
  { code: '+91', image: require('../assest/images/image1.png') },
  { code: '+92', image: require('../assest/images/image2.png') },
  { code: '+93', image: require('../assest/images/image5.png') },
  { code: '+94', image: require('../assest/images/image6.png') },
  { code: '+95', image: require('../assest/images/image7.png') }, 
];

const FlagDropdown = ({ onSelectFlag }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(flagsData[0]);

  const handleFlagSelect = (flag) => {
    setSelectedFlag(flag);
    onSelectFlag(flag);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity style={styles.flagContainer} onPress={() => setModalVisible(true)}>
        <Image source={selectedFlag.image} style={styles.flag} />
        <Text style={styles.phoneCode}>{selectedFlag.code}</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          {flagsData.map((flag) => (
            <TouchableOpacity key={flag.code} style={styles.flagItem} onPress={() => handleFlagSelect(flag)}>
              <Image source={flag.image} style={styles.flag} />
              <Text style={styles.phoneCode}>{flag.code}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.Bordercolor,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  flag: {
    width: 25,
    height: 16,
    marginRight: 8,
  },
  phoneCode: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Bordercolor,
  },
  flagItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: Colors.BlueColor,
    borderRadius: 10,
    padding: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default FlagDropdown;
