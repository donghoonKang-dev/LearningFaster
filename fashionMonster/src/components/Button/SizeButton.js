import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { THEME_LIGHTGRAY, THEME_GRAY } from '../../styles/color';

function SizeButton({ sizeText }) {
  return (
    <TouchableWithoutFeedback>
      {sizeText === 'FREE'
        ?
        <View style={[styles.sizeBox, { width: '100%' }]}>
          <Text style={styles.sizeText}>{sizeText}</Text>
        </View>
        :
        <View style={styles.sizeBox}>
          <Text style={styles.sizeText}>{sizeText}</Text>
        </View>
      }
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  sizeBox: {
    width: '30%',
    height: 40,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: THEME_LIGHTGRAY,
  },
  sizeText: {
    fontSize: 14,
    color: THEME_GRAY,
  },
});

export default SizeButton;
