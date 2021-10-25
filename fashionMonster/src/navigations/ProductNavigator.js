import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductManagement from '../screens/ProductManagement';
import ProductEdit from '../screens/ProductEdit';
import ProductDetail from '../screens/ProductDetail';

const MainStack = createNativeStackNavigator();

export default function ProductNavigator({ goToLogin }) {
  return (
    <NavigationContainer independent={true}>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"ProductManagement"}
      >
        <MainStack.Screen
          name="ProductManagement"
          initialParams={{
            goToLogin: goToLogin,
          }}
          component={ProductManagement}
        />
        <MainStack.Screen
          name="ProductDetail"
          component={ProductDetail}
        />
        <MainStack.Screen
          name="ProductEdit"
          component={ProductEdit}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};