import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductManagement from '../pages/ProductManagement/ProductManagement';
import ProductRegistration from '../pages/ProductRegistration/ProductRegistration';

const THEME_PURPLE = '#6A0DAD';
const THEME_GRAY = '#808080';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <NavigationContainer>
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
          component={ProductManagement}
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
    </NavigationContainer>
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