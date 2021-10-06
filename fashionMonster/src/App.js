import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Main from './screens/Main';
import SignUp from './screens/SignUp/SignUp';
import SignUpProvider from './hooks/SignUpProvider';

const MainStack = createNativeStackNavigator();

function App() {
  return (
    <SignUpProvider>
      <NavigationContainer independent={true}>
        <MainStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainStack.Screen
            name="Login"
            component={Login}
          />
          <MainStack.Screen
            name="Main"
            component={Main}
          />
          <MainStack.Screen
            name="SignUp"
            component={SignUp}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </SignUpProvider>
  );
};

export default App;
