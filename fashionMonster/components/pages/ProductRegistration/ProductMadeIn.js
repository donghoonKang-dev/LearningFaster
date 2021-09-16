import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import EntIcon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import '@react-native-picker/picker';

const THEME_LIGHTGRAY = '#EFEFEF';
const THEME_GRAY = '#7D7D7D';
const THEME_BLACK = '#000000';

const MADE_IN = [
  { label: '대한민국', value: 'KOREA', key: 1},
  { label: '중국', value: 'CHINA', key: 2 },
  { label: '그외', value: 'OTHER', key: 3 },
];

const ProductMadeIn = () => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>제조국 표기</Text>
      <View style={styles.inputContainer}>
        <RNPickerSelect
          placeholder={{ label: '제조국을 선택해주세요.' }}
          style={pickerSelectStyles}
          onValueChange={(value) => console.log(value)}
          items={MADE_IN}
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

export default ProductMadeIn;
