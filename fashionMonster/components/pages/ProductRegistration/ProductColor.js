import React from 'react';
import { 
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback } from 'react-native';

const THEME_LIGHTGRAY = '#EFEFEF';
const THEME_GRAY = '#7D7D7D';

const ProductColor = () => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>상품 색상</Text>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>블랙</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>화이트</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>그레이</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>다크그레이</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>아이보리</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>크림</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>베이지</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>오트밀</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>레드</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>오렌지</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>옐로우</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>머스타드</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>그린</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>소라</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>블루</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>네이비</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>민트</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>카키</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>브라운</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>핑크</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.colorBox}>
            <Text style={styles.colorText}>보라</Text>
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
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  colorBox: {
    width: '30%',
    height: 40,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: THEME_LIGHTGRAY,
  },
  colorText: {
    fontSize: 14,
    color: THEME_GRAY,
  },
});

export default ProductColor;