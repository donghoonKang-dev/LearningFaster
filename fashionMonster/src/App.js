import React from 'react';
import { Provider } from 'react-redux';
import SignUpProvider from './hooks/SignUpProvider';
import MainStackNavigator from './navigations/MainStackNavigator';
import store from './modules/index';

function App() {
  return (
    <Provider store={store}>
      <SignUpProvider>
        <MainStackNavigator />
      </SignUpProvider>
    </Provider>
  );
};

export default App;
