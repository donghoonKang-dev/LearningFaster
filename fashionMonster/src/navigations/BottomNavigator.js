import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductManagement from '../screens/ProductManagement';
import ProductRegistration from '../screens/ProductRegistration';
import { THEME_PURPLE, THEME_GRAY } from '../styles/color';

const Tab = createBottomTabNavigator();

function BottomNavigator({ goToLogin }) {
  return (
    <Tab.Navigator screenOptions={() => ({
      header: () => { return null; },
      headerBackgroundContainerStyle: { height: 0 },
      position: 'absolute',
      tabBarHideOnKeyboard: true,
      tabBarShowLabel: false,
      tabBarStyle: {
        borderTopWidth: 0.2,
        borderTopColor: THEME_GRAY,
      },
    })}>
      <Tab.Screen
        name="ProductManagement"
        children={() => <ProductManagement goToLogin={goToLogin} />}
        options={{
          tabBarLabel: 'ProductManagement',
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                <Text style={styles.labelFocusedStyle}>상품 관리</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Text style={styles.labelStyle}>상품 관리</Text>
              </View>
            )
          }
        }}
      />
      <Tab.Screen
        name="ProductRegistration"
        component={ProductRegistration}
        options={{
          tabBarLabel: 'ProductRegistration',
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                <Text style={styles.labelFocusedStyle}>상품 등록</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Text style={styles.labelStyle}>상품 등록</Text>
              </View>
            )
          }
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    width: '33%',
    alignItems: 'center',
  },
  labelFocusedContainer: {
    width: '33%',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: THEME_PURPLE,
  },
  labelFocusedStyle: {
    marginVertical: 8,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: THEME_PURPLE,
    fontSize: 16,
    fontWeight: '500',
  },
  labelStyle: {
    marginVertical: 8,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: THEME_GRAY,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default BottomNavigator;