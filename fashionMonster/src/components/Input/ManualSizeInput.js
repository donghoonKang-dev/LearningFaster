import React from 'react';
import { StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import FIcon from 'react-native-vector-icons/Feather';
import { THEME_PURPLE, THEME_WHITE, THEME_LIGHTGRAY } from '../../styles/color';

function SizeRow({ size, setSizes, index, last }) {
  const onPressButton = () => {
    if (last - 1 === index) {
      setSizes(prev => [...prev, { id: last + 1, size: '' },])
    } else {
      setSizes(prev => prev.filter((v, i) => i !== index))
    }
  };

  const onChangeText = (value) => {
    setSizes(prev => {
      const arr = [...prev];
      arr[index].size = value;
      return arr;
    });
  };

  return (
    <View key={size.id} style={styles.rowContainer}>
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
          onChangeText={onChangeText}
          value={size.size}
        />
      </View>
    </View>
  );
};

function ManualSizeInput({ sizes, setSizes }) {
  return (
    <View>
      {sizes.map((size, index) =>
        <SizeRow
          key={size.id}
          size={size}
          setSizes={setSizes}
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