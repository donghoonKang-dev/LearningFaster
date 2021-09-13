import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Text, Dimensions } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const THEME_PURPLE = '#6A0DAD';
const THEME_WHITE = '#FFFFFF';
const THEME_LIGHTGRAY = '#E0E0E0'
const THEME_GRAY = '#808080';

const SearchBar = () => {
  const [text, setText] = useState('');
  const [isPressed, setIsPressed] = useState(false);

  const onTogglePressed = () => {
    setIsPressed(prev => !prev);
  }

  return (
    <View style={styles.searchBarContainer}>
      <View style={{...styles.searchBox,width: (isPressed ? '85%' : '100%')}}>
        <FeatherIcon name="search" size={20} color={THEME_GRAY} />
        <TextInput
          style={styles.textInput}
          onChangeText={setText}
          value={text}
          onPressIn={onTogglePressed}
          placeholder="상품명을 입력해주세요."
          keyboardType="default"
        />
      </View>
      {isPressed &&
        <TouchableWithoutFeedback onPress={onTogglePressed}>
          <Text style={styles.cancelText}>취소</Text>
        </TouchableWithoutFeedback>}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchBox: {
    height: 40,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: THEME_LIGHTGRAY,
  },
  textInput: {
    height: 30,
    marginHorizontal: 10,
  },
  cancelText: {
    fontSize: 16,
    marginHorizontal: 10,
  }
});

export default SearchBar;
