import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { THEME_LIGHTGRAY, THEME_GRAY, THEME_PURPLE, THEME_WHITE } from '../../styles/color';

function SizeButton({ sizeData, onChangeSize, sizes }) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(sizes.findIndex(size => size.id === sizeData.id) !== -1)
  }, [sizes]);

  return (
    <TouchableWithoutFeedback onPress={() => onChangeSize(sizeData)}>
      <View
        style={[
          styles.sizeBox,
          sizeData.value === 'FREE' && { width: '100%' },
          isSelected && styles.selectedBox
        ]}
      >
        <Text
          style={[
            styles.sizeText,
            isSelected && styles.selectedText
          ]}
        >
          {sizeData.value}
        </Text>
      </View>
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
