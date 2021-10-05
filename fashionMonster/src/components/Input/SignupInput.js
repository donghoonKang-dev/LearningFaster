import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { THEME_LIGHTGRAY } from '../../styles/color';

function SignupInput({ desc, keyboardType, placeholder, text, setText, isSecure }) {
  return (
    <View style={styles.container}>
      <Text style={styles.desc}>{desc}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onChangeText={setText}
          value={text}
          secureTextEntry={isSecure}
        />
      </View>
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
    padding: 16,
    marginBottom: 24,
    backgroundColor: THEME_LIGHTGRAY,
    borderRadius: 12,
  },
  input: {
    width: '100%',
    height: '100%',
  }
});

export default SignupInput;