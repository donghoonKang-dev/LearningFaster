import React, { useState } from 'react'
import { 
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback } from 'react-native';
import getColor from '../../utils/getColor';
import { THEME_LIGHTGRAY, THEME_GRAY } from '../../styles/color';

function ColorButton({ colorName }) {
  const [isSelected, setIsSelected] = useState(false);

  const { background, color } = getColor(colorName);

  function onPress() {
    setIsSelected(!isSelected);
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[styles.colorBox, isSelected ? { backgroundColor: background } : null]}
      >
        <Text 
          style={[styles.colorText, isSelected ? { color: color } : null]}
        >
          {colorName}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    width: '30%',
    height: 40,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: THEME_LIGHTGRAY,
  },
  colorText: {
    fontSize: 14,
    fontWeight: '600',
    color: THEME_GRAY,
  },
});

export default ColorButton;