import React, { useEffect } from 'react';
import { StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import FIcon from 'react-native-vector-icons/Feather';
import { THEME_PURPLE, THEME_WHITE, THEME_LIGHTGRAY } from '../../styles/color';

function SizeRow({ sizes, setSizes, onChangeText, index, last }) {
  const onPressButton = () => {
    if (last - 1 === index) {
      setSizes(prev => [...prev, { id: 1, value: 'CUSTOM', detail: [{ name: 'custom', value: '' }] },])
    } else {
      setSizes(prev => prev.filter((v, i) => i !== index))
    }
  };

  return (
    <View style={styles.rowContainer}>
      <TouchableWithoutFeedback onPress={onPressButton}>
        <View
          style={[
            styles.buttonContainer,
            { backgroundColor: last - 1 === index ? THEME_PURPLE : THEME_LIGHTGRAY }
          ]}
        >
          <FIcon
            name={last - 1 === index ? "plus" : 'minus'}
            size={24}
            color={last - 1 === index ? THEME_WHITE : THEME_PURPLE}
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="mm / cm / 호 등 사이즈 옵션을 추가해주세요."
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={sizes[index].detail[0].value}
        />
      </View>
    </View>
  );
};

function ManualSizeInput({ sizes, setSizes, cateName }) {
  const onChangeText = (text) => {
    if (sizes.length === 0) {
      setSizes([
        { id: 1, value: 'CUSTOM', detail: [{ name: 'custom', value: text }] },
      ]);
    } else {
      setSizes(prev => {
        const arr = [...prev];
        arr[arr.length - 1] = {
          ...arr[arr.length - 1],
          detail: [{ name: 'custom', value: text }],
        };
        return arr;
      });
    }
  };

  useEffect(() => {
    if (cateName === 'others' && sizes.length === 0) {
      setSizes([
        { id: 1, value: 'CUSTOM', detail: [{ name: 'custom', value: '' }] },
      ]);
    }
  }, [cateName, sizes])

  return (
    <View>
      {sizes.map((size, index) =>
        <SizeRow
          key={index}
          sizes={sizes}
          setSizes={setSizes}
          onChangeText={onChangeText}
          index={index}
          last={sizes.length}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME_PURPLE,
  },
  inputContainer: {
    width: '80%',
    height: 40,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: THEME_LIGHTGRAY,
  },
  input: {
    height: '100%',
    width: '90%',
    fontSize: 11,
  }
});

export default ManualSizeInput;