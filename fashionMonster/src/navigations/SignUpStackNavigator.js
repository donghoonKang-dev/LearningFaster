import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp1 from '../screens/SignUp/SignUp1';
import SignUp2 from '../screens/SignUp/SignUp2';
import SignUp3 from '../screens/SignUp/SignUp3';
import SignUp4 from '../screens/SignUp/SignUp4';
import SignUp5 from '../screens/SignUp/SignUp5';
import SignUp6 from '../screens/SignUp/SignUp6';
import SignUp7 from '../screens/SignUp/SignUp7';

const SignUpStack = createNativeStackNavigator();

function SignUpStackNavigator({ navigation }) {
  const goToLogin = () => navigation.navigate('Login', { name: 'Login' });

  return (
    <NavigationContainer independent={true}>
      <SignUpStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <SignUpStack.Screen
          name="SignUp1"
          component={SignUp1}
        />
        <SignUpStack.Screen
          name="SignUp2"
          component={SignUp2}
        />
        <SignUpStack.Screen
          name="SignUp3"
          component={SignUp3}
        />
        <SignUpStack.Screen
          name="SignUp4"
          component={SignUp4}
        />
        <SignUpStack.Screen
          name="SignUp5"
          component={SignUp5}
        />
        <SignUpStack.Screen
          name="SignUp6"
          component={SignUp6}
        />
        <SignUpStack.Screen
          name="SignUp7"
          children={() => <SignUp7 goToLogin={goToLogin} />}
        />
      </SignUpStack.Navigator>
    </NavigationContainer>
  );
};

export default SignUpStackNavigator;