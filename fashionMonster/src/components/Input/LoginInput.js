import React from 'react';
import { StyleSheet, TextInput, View, Dimensions } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { THEME_PLACEHOLDER, THEME_WHITE } from '../../styles/color';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function LoginInput({ iconName, placeholder, keyboardType, onChangeText, value }) {
  return (
    <View style={styles.container}>
      <MCIcon style={{ marginRight: 22 }} name={iconName} size={30} color={THEME_WHITE} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={THEME_PLACEHOLDER}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 14,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: THEME_WHITE,
  },
  textInput: {
    width: '85%',
    height: '100%',
    fontSize: 12,
    color: THEME_WHITE,
  },
});

export default LoginInput;