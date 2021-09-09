import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Header from './components/common/Header';
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
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>이것은 홈입니다.</Text>
          </View>
          <BottomPopup 
            isOpen={logOutPopupOpen}
            onClose={logOut}
            onTouchOutside={closeLogOutPopup} 
          />
        </ScrollView>
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
