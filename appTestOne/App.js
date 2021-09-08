/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/appleLogo.jpg')} style={styles.logo} />
      <Text style={styles.hallo}>Hallo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hallo: {
    marginTop: 20,
    fontSize: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default App;
