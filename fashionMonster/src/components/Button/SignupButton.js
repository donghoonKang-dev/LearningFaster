import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Text, Image } from 'react-native';
import { THEME_PURPLE, THEME_WHITE, THEME_INACTIVEPURPLE } from '../../styles/color';

function SignupButton({ text, onPress, active, number }) {
  return (
    <View style={styles.container}>
      {number === 1 &&
        <Image
          style={styles.image}
          source={require('../../assets/images/speechBubble.png')}
        />
      }
      {number === 2 &&
        <Image
          style={[styles.image, { width: 210 }]}
          source={require('../../assets/images/speechBubble2.png')}
        />
      }
      {number === 3 &&
        <Image
          style={[styles.image, { width: 170 }]}
          source={require('../../assets/images/speechBubble3.png')}
        />
      }
      {number === 4 &&
        <Image
          style={[styles.image, { width: 203 }]}
          source={require('../../assets/images/speechBubble4.png')}
        />
      }
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.buttonContainer, !active && { backgroundColor: THEME_INACTIVEPURPLE }]}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
    marginTop: 'auto',
  },
  image: {
    width: 186,
    height: 37,
    marginBottom: 8,
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    width: '100%',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: THEME_PURPLE,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: THEME_WHITE,
  }
});

export default SignupButton;
