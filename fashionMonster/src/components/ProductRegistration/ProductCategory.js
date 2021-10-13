import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import '@react-native-picker/picker';
import EntIcon from 'react-native-vector-icons/Entypo';
import { THEME_LIGHTGRAY, THEME_GRAY, THEME_BLACK, THEME_PURPLE, THEME_WHITE } from '../../styles/color';
import { category } from '../../assets/data/category';

function ProductCategory({ main, setMain, sub, setSub, fullName, setFullName, middle, setMiddle }) {
  const [mainName, setMainName] = useState('');
  const [subName, setSubName] = useState('');

  function selectMainCategory(value) {
    if (sub !== 0) {
      setSub(0);
      setSubName('');
      setMiddle([]);
      setFullName('');
    }
    if (main !== 0 && value === 0) {
      setMain(0);
      setSub(0);
      setMiddle([]);
      setMainName('');
      setSubName('');
    } else {
      setMain(value);
      if (value !== 0) setMiddle(category.find(v => v.id === value).middle);
      if (value !== 0) setMainName(category.find(v => v.id === value).label);
    }
  };

  function selectSubCategory(value) {
    if (value === 0) {
      setFullName('');
      setSubName('');
    }
    else {
      setSub(value);
      setSubName(middle.find(v => v.id === value).label);
      setFullName(mainName + ' / ' + subName);
    }
  };

  useEffect(() => {
    if (subName) setFullName(mainName + ' / ' + subName);
  }, [mainName, subName]);

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>상품 카테고리</Text>
      <View style={styles.inputContainer}>
        <RNPickerSelect
          placeholder={{ id: 0, label: '메인 카테고리를 선택해주세요.', value: 0 }}
          items={category}
          style={pickerSelectStyles}
          onValueChange={(value) => selectMainCategory(value)}
          value={main}
          fixAndroidTouchableBug={true}
          textInputProps={{ underlineColorAndroid: 'transparent' }}
          useNativeAndroidPickerStyle={false}
        />
        <EntIcon name="select-arrows" size={20} color={THEME_GRAY} />
      </View>
      <View style={styles.inputContainer}>
        <RNPickerSelect
          placeholder={{ id: 0, label: '세부 카테고리를 선택해주세요.', value: 0 }}
          items={middle}
          style={pickerSelectStyles}
          onValueChange={(value) => selectSubCategory(value)}
          value={sub}
          fixAndroidTouchableBug={true}
          textInputProps={{ underlineColorAndroid: 'transparent' }}
          useNativeAndroidPickerStyle={false}
        />
        <EntIcon name="select-arrows" size={20} color={THEME_GRAY} />
      </View>
      {fullName !== '' &&
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{'> ' + fullName}</Text>
        </View>
      }
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
  categoryContainer: {
    width: '100%',
    height: 40,
    marginTop: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: THEME_PURPLE,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: THEME_WHITE,
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