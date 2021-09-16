import React from 'react';
import { 
  StyleSheet,
  View,
  Text } from 'react-native';
import EntIcon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import '@react-native-picker/picker';

const THEME_LIGHTGRAY = '#EFEFEF';
const THEME_GRAY = '#7D7D7D';
const THEME_BLACK = '#000000';

const PRODUCT_CATEGORY = [
  { label: '여성상의', value: 'womanTop', key: 1},
  { label: '남성상의', value: 'manTop', key: 2 },
  { label: '여성 아우터', value: 'womanOuter', key: 3 },
  { label: '남성 아우터', value: 'manOuter', key: 4 },
  { label: '여성하의', value: 'womanBottom', key: 5 },
  { label: '남성하의', value: 'manBottom', key: 6 },
  { label: '원피스', value: 'onePiece', key: 7 },
  { label: '스커트', value: 'skirt', key: 8 },
  { label: '여성가방', value: 'womanBag', key: 9 },
  { label: '남성가방', value: 'manBag', key: 10 },
  { label: '여성신발', value: 'womanShoes', key: 11 },
  { label: '남성신발', value: 'manShoes', key: 12 },
  { label: '여성 악세사리', value: 'womanAcc', key: 13 },
  { label: '남성 악세사리', value: 'manAcc', key: 14 },
];

const ProductCategory = () => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>상품 카테고리</Text>
      <View style={styles.inputContainer}>
        <RNPickerSelect
          placeholder={{ label: '카테고리를 선택해주세요.' }}
          style={pickerSelectStyles}
          onValueChange={(value) => console.log(value)}
          items={PRODUCT_CATEGORY}
          fixAndroidTouchableBug={true}
          textInputProps={{ underlineColorAndroid: 'transparent'}}
          useNativeAndroidPickerStyle={false}
        />
        <EntIcon name="select-arrows" size={20} color={THEME_GRAY} />
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: 14,
      height: '100%', 
      width: 250,
      color: THEME_BLACK,
      backgroundColor: THEME_LIGHTGRAY,
  },
  inputAndroid: {
      fontSize: 16,
      height: '100%',
      width: 250,
      color: THEME_BLACK,
      backgroundColor: THEME_LIGHTGRAY,
  },
});

export default ProductCategory;