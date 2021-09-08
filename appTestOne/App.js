/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

const App = () => {
  const [isPressed, setIsPressed] = useState(false);

  const onClickIcon = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View style={styles.container}>
      {isPressed && (
        <Image source={require('./assets/appleLogo.jpg')} style={styles.logo} />
      )}
      <Button title="Hallo" onPress={onClickIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default App;
