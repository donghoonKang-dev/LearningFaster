import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { THEME_LIGHTGRAY } from '../../styles/color';

function SignupInput({ desc, keyboardType, placeholder, text, setText, isSecure }) {
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
  },
  desc: {
    marginBottom: 12,
    fontSize: 16,
  },
  inputContainer: {
    width: '100%',
    height: 48,
    paddingHorizontal: 16,
    marginBottom: 24,
    justifyContent: 'center',
    fontSize: 12,
    backgroundColor: THEME_LIGHTGRAY,
    borderRadius: 12,
  },
});

export default SignupInput;