import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Main from './screens/Main';
import SignUp1 from './screens/SignUp1';
import SignUp2 from './screens/SignUp2';
import SignUp3 from './screens/SignUp3';
import SignUp4 from './screens/SignUp4';
import SignUp5 from './screens/SignUp5';
import SignUp6 from './screens/SignUp6';
import SignUp7 from './screens/SignUp7';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Main"
          component={Main}
        />
        <Stack.Screen
          name="SignUp1"
          component={SignUp1}
        />
        <Stack.Screen
          name="SignUp2"
          component={SignUp2}
        />
        <Stack.Screen
          name="SignUp3"
          component={SignUp3}
        />
        <Stack.Screen
          name="SignUp4"
          component={SignUp4}
        />
        <Stack.Screen
          name="SignUp5"
          component={SignUp5}
        />
        <Stack.Screen
          name="SignUp6"
          component={SignUp6}
        />
        <Stack.Screen
          name="SignUp7"
          component={SignUp7}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
