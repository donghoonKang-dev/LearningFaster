import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import '@react-native-picker/picker';
import EntIcon from 'react-native-vector-icons/Entypo';
import { THEME_LIGHTGRAY, THEME_GRAY, THEME_BLACK, THEME_PURPLE, THEME_WHITE } from '../../styles/color';

const MADE_IN = [
  { label: '대한민국', value: 'KOREA', key: 1 },
  { label: '중국', value: 'CHINA', key: 2 },
  { label: '그외', value: 'OTHER', key: 3 },
];

function ProductMadeIn({ madeIn, setMadeIn, madeInDetail, setMadeInDetail }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>제조국 표기</Text>
      <View style={styles.inputContainer}>
        <RNPickerSelect
          placeholder={{ label: '제조국을 선택해주세요.', value: null }}
          items={MADE_IN}
          style={pickerSelectStyles}
          onValueChange={(value) => setMadeIn(value)}
          value={madeIn}
          fixAndroidTouchableBug={true}
          textInputProps={{ underlineColorAndroid: 'transparent' }}
          useNativeAndroidPickerStyle={false}
        />
        <EntIcon name="select-arrows" size={20} color={THEME_GRAY} />
      </View>
      {madeIn !== null &&
        <View style={styles.madeInContainer}>
          <Text style={styles.madeInText}>
            {madeIn === 'KOREA'
              ? '대한민국'
              : (
                madeIn === 'CHINA'
                  ? '중국'
                  : '그 외'
              )
            }
          </Text>
        </View>
      }
      {madeIn === 'OTHER' &&
        <View style={[styles.inputContainer, { borderWidth: 1, borderColor: THEME_PURPLE }]}>
          <TextInput
            style={{ height: '100%', width: '100%' }}
            placeholder="제조국을 직접 입력해주세요."
            onChangeText={setMadeInDetail}
            value={madeInDetail}
          />
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
  madeInContainer: {
    width: '100%',
    height: 40,
    marginTop: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: THEME_PURPLE,
  },
  madeInText: {
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

export default ProductMadeIn;
