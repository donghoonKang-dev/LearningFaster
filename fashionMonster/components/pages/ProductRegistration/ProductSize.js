import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

const THEME_LIGHTGRAY = '#EFEFEF';
const THEME_GRAY = '#7D7D7D';

const ProductSize = () => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>상품 사이즈</Text>
      <Text style={styles.itemDesc}>판매중인 상품 사이즈를 중복으로 선택 가능합니다.</Text>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback>
            <View style={styles.sizeBox}>
              <Text style={styles.sizeText}>XS</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.sizeBox}>
              <Text style={styles.sizeText}>S</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.sizeBox}>
              <Text style={styles.sizeText}>M</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.sizeBox}>
              <Text style={styles.sizeText}>L</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.sizeBox}>
              <Text style={styles.sizeText}>XL</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.sizeBox}>
              <Text style={styles.sizeText}>XXL</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.sizeFreeBox}>
              <Text style={styles.sizeText}>FREE</Text>
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
  itemDesc: {
    marginVertical: 6,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
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
  sizeFreeBox: {
    width: '100%',
    height: 40,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: THEME_LIGHTGRAY,
  },
});

export default ProductSize;
