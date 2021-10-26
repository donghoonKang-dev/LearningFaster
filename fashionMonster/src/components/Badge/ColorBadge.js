import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { THEME_BLACK } from '../../styles/color';

function ColorBadge({ name, color, background }) {
  return (
    <>
      {background?.indexOf('#') !== -1
        ?
        <View style={[styles.container, { backgroundColor: background }]}>
          <Text style={[styles.text, { color: color }]}>{name}</Text>
        </View>
        :
        <View style={styles.container}>
          <ImageBackground
            style={styles.imgBg}
            source={{ uri: background }}
          >
            <Text style={[styles.text, { color: color }]}>{name}</Text>
          </ImageBackground>
        </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 30,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: THEME_BLACK,
  },
  imgBg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
  },
});

export default ColorBadge;