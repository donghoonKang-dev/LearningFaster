import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { THEME_LIGHTGRAY, THEME_GRAY } from '../../styles/color';

function ColorButton({ colorData, onChangeColor, selected }) {
  return (
    <TouchableWithoutFeedback onPress={() => onChangeColor(colorData)}>
      <View
        style={[
          styles.colorBox,
          colorData.id % 3 === 2 && { marginHorizontal: '5%' },
          selected && colorData.id === 2 && { borderWidth: 1 },
          selected && { backgroundColor: colorData.background }
        ]}
      >
        <Text
          style={[styles.colorText, selected ? { color: colorData.color } : null]}
        >
          {colorData.value}
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