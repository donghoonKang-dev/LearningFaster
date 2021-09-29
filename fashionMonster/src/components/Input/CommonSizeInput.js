import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { THEME_LIGHTGRAY } from '../../styles/color';

function CommonSizeInput({ placeholder, label, selectedSize, sizes, onChangeInput }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={{ height: '100%', width: '90%' }}
        placeholder={placeholder}
        keyboardType="numeric"
        onChangeText={(text) => onChangeInput(selectedSize, label, text)}
        value={
          sizes.find(v => v.value === selectedSize).detail?.find(v => v.label === label)?.value || ''
        }
      />
      <Text style={{ fontSize: 12, fontWeight: '600' }}>CM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 40,
    marginTop: 6,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: THEME_LIGHTGRAY,
  },
});

export default CommonSizeInput;
