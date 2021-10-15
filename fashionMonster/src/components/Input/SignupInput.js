import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { THEME_LIGHTGRAY, THEME_WARNING } from '../../styles/color';

function SignupInput({ desc, keyboardType, placeholder, text, setText, isSecure, emailError }) {
  return (
    <View style={styles.container}>
      <Text style={styles.desc}>{desc}</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={setText}
        value={text}
        secureTextEntry={isSecure}
        autoCapitalize='none'
      />
      {emailError ?
        <Text style={styles.emailErrorText}>{emailError}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  desc: {
    marginBottom: 12,
    fontSize: 16,
  },
  inputContainer: {
    width: '100%',
    height: 48,
    paddingHorizontal: 16,
    justifyContent: 'center',
    fontSize: 12,
    backgroundColor: THEME_LIGHTGRAY,
    borderRadius: 12,
  },
  emailErrorText: {
    marginTop: 8,
    alignSelf: 'flex-end',
    fontSize: 14,
    color: THEME_WARNING,
  },
});

export default SignupInput;