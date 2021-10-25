import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { THEME_LIGHTGRAY } from '../../styles/color';

function ProductDesc({ refScroll, desc, setDesc }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>상세 설명</Text>
      <View style={styles.detailInputContainer}>
        <TextInput
          ref={refScroll}
          placeholder="상세설명은 선택사항입니다."
          style={{ height: '100%', width: '100%' }}
          onChangeText={setDesc}
          value={desc}
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

export default ProductDesc;