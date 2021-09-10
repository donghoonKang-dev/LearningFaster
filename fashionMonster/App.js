import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import BottomNavigator from './components/common/BottomNavigator';

const THEME_PURPLE = '#6A0DAD';
const THEME_WHITE = '#FFFFFF';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.topSafeAreaContainer} />
      <SafeAreaView style={styles.mainSafeAreaContainer}>
        <StatusBar barStyle="light-content"/>
        <BottomNavigator />
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

export default App;
