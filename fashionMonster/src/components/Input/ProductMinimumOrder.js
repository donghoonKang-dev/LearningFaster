import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { THEME_PURPLE, THEME_LIGHTGRAY, THEME_WHITE } from '../../styles/color';

function ProductMinimumOrder({ canEach, setCanEach }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>최소 주문 단위</Text>
      <View style={styles.minimunOrderContainer}>
        <TouchableWithoutFeedback onPress={() => setCanEach(true)}>
          <View style={[styles.minimumOrderBox, canEach && { backgroundColor: THEME_PURPLE }]}>
            <Text style={[styles.minimunOrderText, canEach && { color: THEME_WHITE }]}>
              낮장 주문 가능
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setCanEach(false)}>
          <View style={[styles.minimumOrderBox, !canEach && { backgroundColor: THEME_PURPLE }]}>
            <Text style={[styles.minimunOrderText, !canEach && { color: THEME_WHITE }]}>
              낮장 주문 불가
            </Text>
          </View>
        </TouchableWithoutFeedback>
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
  minimunOrderContainer: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  minimumOrderBox: {
    width: '48%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: THEME_PURPLE,
    backgroundColor: THEME_LIGHTGRAY,
  },
  minimunOrderText: {
    fontSize: 14,
    color: THEME_PURPLE,
  },
  minimumOrderInputContainer: {
    width: '65%',
    height: 40,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: THEME_LIGHTGRAY,
  },
});

export default ProductMinimumOrder;
