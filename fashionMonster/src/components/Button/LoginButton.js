import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { THEME_PURPLE, THEME_WHITE } from '../../styles/color';

function LoginButton({ onPress, text }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: THEME_PURPLE,
    borderRadius: 6,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: THEME_WHITE,
  }
});

export default LoginButton;
