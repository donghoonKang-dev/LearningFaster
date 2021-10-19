import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import SignUpProvider from './hooks/SignUpProvider';
import MainStackNavigator from './navigations/MainStackNavigator';
import store from './modules/index';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <SignUpProvider>
        <MainStackNavigator />
      </SignUpProvider>
    </Provider>
  );
};

export default App;
