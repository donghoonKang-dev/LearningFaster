import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { THEME_PURPLE, THEME_LIGHTGRAY } from '../../styles/color';

function ProductMinimumOrder() {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>최소 주문 단위</Text>
      <View style={styles.minimunOrderContainer}>
        <View style={styles.minimumOrderBox}>
          <Text style={styles.minimunOrderText}>낮장 주문 여부</Text>
        </View>
        <View style={styles.minimumOrderInputContainer}>
          <TextInput
            placeholder="최소 주문 수량을 입력해주세요."
            keyboardType="numeric"
            style={{ height: '100%', width: '90%' }}
          />
          <Text style={{ fontSize: 12, fontWeight: '600' }}>개</Text>
        </View>
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
    width: '30%',
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
