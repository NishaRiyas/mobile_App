import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Modal, FlatList, TouchableOpacity, Text } from 'react-native';
import { Colors } from '../assest/Colors';

const countriesData = [
  { id: 1, name: 'India', code: '+91', flag: require('../assest/images/fimage.jpg') },
  { id: 2, name: 'UK', code: '+910', flag: require('../assest/images/gimage.jpg') },

];

const PhoneInputWithDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState(countriesData[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCountrySelection(item)} style={styles.countryItem}>
      <Image source={item.flag} style={styles.flag} />
      <Text style={styles.phoneCode}>{item.code}</Text>
    </TouchableOpacity>
  );

  const handleCountrySelection = (item) => {
    setSelectedCountry(item);
    setModalVisible(false);
  };

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.countryItem}>
        <Image source={selectedCountry.flag} style={styles.flag} />
        <Text style={styles.phoneCode}>{selectedCountry.code}</Text>
      </TouchableOpacity>
      <Modal animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <FlatList
            data={countriesData}
            renderItem={renderCountryItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </Modal>
      <TextInput
        style={styles.phoneInput}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={selectedCountry.code} 
        onChangeText={(code) => {
          
          setSelectedCountry({ ...selectedCountry, code });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop:'12%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor:Colors.Bordercolor,
    paddingVertical:'2%',

  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 5,
  },
  phoneCode: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
  },
});

export default PhoneInputWithDropdown;
