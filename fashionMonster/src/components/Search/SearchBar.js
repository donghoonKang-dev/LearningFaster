import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Text,
  Keyboard
} from 'react-native';
import _debounce from "lodash/debounce";
import FeatherIcon from 'react-native-vector-icons/Feather';
import { THEME_LIGHTGRAY, THEME_GRAY } from '../../styles/color';

function SearchBar({ pressed, setKeyword, openSearchBar, closeSearchBar }) {
  const [text, setText] = useState('');

  const debounce = useCallback(_debounce((text) => {
    setKeyword(text);
  }, 400), []);

  const onClickCancel = () => {
    setText('');
    closeSearchBar();
    Keyboard.dismiss();
  }

  useEffect(() => {
    debounce(text);
  }, [text]);

  return (
    <View style={styles.searchBarContainer}>
      <View style={{ ...styles.searchBox, width: (pressed ? '85%' : '100%') }}>
        <FeatherIcon name="search" size={20} color={THEME_GRAY} />
        <TextInput
          style={styles.textInput}
          onChangeText={setText}
          value={text}
          onPressIn={openSearchBar}
          placeholder="상품명을 입력해주세요."
          keyboardType="default"
        />
      </View>
      {pressed &&
        <TouchableWithoutFeedback onPress={onClickCancel}>
          <Text style={styles.cancelText}>취소</Text>
        </TouchableWithoutFeedback>}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    height: 50,
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchBox: {
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: THEME_LIGHTGRAY,
  },
  textInput: {
    width: '100%',
    height: '100%',
    marginHorizontal: 10,
  },
  cancelText: {
    fontSize: 16,
    marginHorizontal: 10,
  }
});

export default SearchBar;
