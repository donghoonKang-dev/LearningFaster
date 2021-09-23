import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { THEME_LIGHTGRAY } from '../../styles/color';

function ProductName() {
  const [name, setName] = useState('');

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>상품명</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="상품명을 입력해주세요. (최대40자)"
          maxLength={40}
          style={{ height: '100%', width: '100%' }}
          onChangeText={setName}
          value={name}
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

export default ProductName;
