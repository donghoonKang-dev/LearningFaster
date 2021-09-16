import React from 'react';
import { StyleSheet, View,Text, TextInput } from 'react-native';

const THEME_LIGHTGRAY = '#EFEFEF';

const ProductDetail = () => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>상세 설명</Text>
      <View style={styles.detailInputContainer}>
        <TextInput
          placeholder="상세설명은 선택사항입니다."
          style={{ height: '100%', width: '100%' }}
        />
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
  detailInputContainer: {
    width: '100%',
    height: 100,
    marginTop: 6,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: THEME_LIGHTGRAY,
  }
});

export default ProductDetail;