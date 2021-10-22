import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground
} from 'react-native';
import { THEME_LIGHTGRAY, THEME_GRAY } from '../../styles/color';

function ColorButton({ colorData, onChangeColor, selected }) {
  return (
    <TouchableWithoutFeedback onPress={() => onChangeColor(colorData)}>
      {colorData.background[0] === '#'
        || (colorData.background[0] === 'h' && !selected)
        ?
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
        :
        <View
          style={[
            styles.colorBox,
            colorData.id % 3 === 2 && { marginHorizontal: '5%' },
          ]}
        >
          <ImageBackground
            style={styles.imgBg}
            source={{ uri: colorData.background }}
            imageStyle={{ borderRadius: 8 }}
          >
            <Text style={[styles.colorText, { color: colorData.color }]}>
              {colorData.value}
            </Text>
          </ImageBackground>
        </View>
      }
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
  imgBg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  colorText: {
    fontSize: 14,
    fontWeight: '600',
    color: THEME_GRAY,
  },
});

export default ColorButton;