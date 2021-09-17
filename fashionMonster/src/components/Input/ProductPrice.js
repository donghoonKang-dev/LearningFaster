import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { THEME_LIGHTGRAY } from '../../styles/color';

function ProductPrice() {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>상품 가격 (도매 단가)</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="상품 가격을 입력해주세요."
          keyboardType="numeric"
          style={{ height: '100%', width: '90%' }}
        />
        <Text style={{ fontSize: 12, fontWeight: '600' }}>원</Text>
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

export default ProductPrice;