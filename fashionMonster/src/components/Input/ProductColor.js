import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ColorButton from '../Button/ColorButton';
import { colors as colorData } from '../../assets/data/colors';

function ProductColor({ colors, onChangeColor }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>상품 색상</Text>
      <View style={styles.buttonContainer}>
        {
          colorData.map(
            (color) => (
              <ColorButton
                key={color.id}
                colorData={color}
                onChangeColor={onChangeColor}
                selected={colors.findIndex(v => v.id === color.id) !== -1}
              />
            )
          )
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 36,
  },
  itemTitle: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});

export default ProductColor;