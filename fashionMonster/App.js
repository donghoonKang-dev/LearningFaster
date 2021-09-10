import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Header from './components/common/Header';
import BottomNavigator from './components/common/BottomNavigator';
import BottomPopup from './components/common/BottomPopup';

const THEME_PURPLE = '#6A0DAD';
const THEME_WHITE = '#FFFFFF';

const App = () => {
  const [logOutPopupOpen, setLogOutPopupOpen] = useState(false);

  const showLogOutPopup = () => {
    setLogOutPopupOpen(true);
  };
  const closeLogOutPopup = () => {
    setLogOutPopupOpen(false);
  };
  const logOut = () => {
    setLogOutPopupOpen(false);
    alert('로그아웃 되었습니다.');
  };

  return (
    <>
      <SafeAreaView style={styles.topSafeAreaContainer} />
      <SafeAreaView style={styles.mainSafeAreaContainer}>
        <StatusBar barStyle="light-content"/>
        <Header iconClick={showLogOutPopup}/>
        <BottomNavigator />
        <BottomPopup 
          isOpen={logOutPopupOpen}
          onClose={logOut}
          onTouchOutside={closeLogOutPopup} 
        />
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
