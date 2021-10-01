import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import BottomNavigator from '../navigations/BottomNavigator';
import { THEME_PURPLE, THEME_WHITE } from '../styles/color';

function Main({ navigation }) {
  const logOut = () => navigation.navigate('Login', { name: 'Login' });

  return (
    <>
      <SafeAreaView style={styles.topSafeAreaContainer} />
      <SafeAreaView style={styles.mainSafeAreaContainer}>
        <StatusBar barStyle="light-content" />
        <BottomNavigator logOut={logOut} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topSafeAreaContainer: {
    flex: 0,
    backgroundColor: THEME_PURPLE,
  },
  mainSafeAreaContainer: {
    flex: 1,
    backgroundColor: THEME_WHITE,
  },
});

export default Main;