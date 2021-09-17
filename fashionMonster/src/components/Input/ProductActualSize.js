import React from 'react';
import { 
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput } from 'react-native';
import { THEME_PURPLE, THEME_WHITE, THEME_LIGHTGRAY } from '../../styles/color';

function ProductActualSize() {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>실측 사이즈</Text>
      <Text style={styles.itemDesc}>상품 사이즈별 실측 사이즈를 입력해주세요.</Text>
      <View style={styles.realSizeButtonContainer}>
        <TouchableWithoutFeedback>
          <View style={styles.realSizeButtonBox}>
            <Text style={styles.realSizeText}>XS</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="가슴 단면"
          keyboardType="numeric"
          style={{ height: '100%', width: '90%' }}
        />
        <Text style={{ fontSize: 12, fontWeight: '600' }}>CM</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="어깨선"
          keyboardType="numeric"
          style={{ height: '100%', width: '90%' }}
        />
        <Text style={{ fontSize: 12, fontWeight: '600' }}>CM</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="소매"
          keyboardType="numeric"
          style={{ height: '100%', width: '90%' }}
        />
        <Text style={{ fontSize: 12, fontWeight: '600' }}>CM</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="총장"
          keyboardType="numeric"
          style={{ height: '100%', width: '90%' }}
        />
        <Text style={{ fontSize: 12, fontWeight: '600' }}>CM</Text>
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
  realSizeButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  realSizeButtonBox: {
    width: 46,
    height: 28,
    backgroundColor: THEME_PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  realSizeText: {
    fontSize: 14,
    color: THEME_WHITE,
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

export default ProductActualSize;
