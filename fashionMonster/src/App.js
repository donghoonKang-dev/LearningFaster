import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Main from './screens/Main';
import SignUp from './screens/SignUp/SignUp';

const MainStack = createNativeStackNavigator();

function App() {
  return (
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
  );
};

export default App;
