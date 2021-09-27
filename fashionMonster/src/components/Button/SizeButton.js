import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { THEME_LIGHTGRAY, THEME_GRAY, THEME_PURPLE, THEME_WHITE } from '../../styles/color';

function SizeButton({ sizeData, onChangeSize, selected }) {
  return (
    <TouchableWithoutFeedback onPress={() => onChangeSize(sizeData)}>
      {sizeData.value === 'FREE'
        ?
        <View style={[styles.sizeBox, { width: '100%' }, selected && styles.selectedBox]}>
          <Text style={[styles.sizeText, selected && styles.selectedText]}>{sizeData.value}</Text>
        </View>
        :
        <View style={[styles.sizeBox, selected && styles.selectedBox]}>
          <Text style={[styles.sizeText, selected && styles.selectedText]}>{sizeData.value}</Text>
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
  selectedBox: {
    backgroundColor: THEME_PURPLE,
  },
  selectedText: {
    color: THEME_WHITE,
  }
});

export default SizeButton;
