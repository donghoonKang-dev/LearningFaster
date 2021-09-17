import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { THEME_LIGHTGRAY } from '../../styles/color';

function ProductMixRate() {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>소재 혼용률</Text>
      <Text style={styles.itemDesc}>사용된 소재와 혼용률을 입력해주세요.</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="ex_ 면 50, 레이온 40, 린넨 10"
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
  itemDesc: {
    marginVertical: 6,
    fontSize: 14,
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

export default ProductMixRate;
