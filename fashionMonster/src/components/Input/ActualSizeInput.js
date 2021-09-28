import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import { THEME_LIGHTGRAY } from '../../styles/color';

function ActualSizeInput() {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="가슴 단면"
          keyboardType="numeric"
          style={{ height: '100%', width: '90%' }}
        />
        <Text style={{ fontSize: 12, fontWeight: '600' }}>CM</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="어깨선"
          keyboardType="numeric"
          style={{ height: '100%', width: '90%' }}
        />
        <Text style={{ fontSize: 12, fontWeight: '600' }}>CM</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="소매"
          keyboardType="numeric"
          style={{ height: '100%', width: '90%' }}
        />
        <Text style={{ fontSize: 12, fontWeight: '600' }}>CM</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="총장"
          keyboardType="numeric"
          style={{ height: '100%', width: '90%' }}
        />
        <Text style={{ fontSize: 12, fontWeight: '600' }}>CM</Text>
      </View>
    </>
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

export default ActualSizeInput;