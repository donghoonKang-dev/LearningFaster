import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Main from '../screens/Main';
import SignUpStackNavigator from './SignUpStackNavigator';
import { useAuth } from '../modules/auth/hook';

const MainStack = createNativeStackNavigator();

export default function MainStackNavigator() {
  const {
    login: { data: isLogin },
  } = useAuth();

  return (
    <NavigationContainer independent={true}>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={isLogin ? "Main" : "Login"}
      >
        <MainStack.Screen
          name="Login"
          component={Login}
        />
        <MainStack.Screen
          name="SignUp"
          component={SignUpStackNavigator}
        />
        <MainStack.Screen
          name="Main"
          component={Main}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
