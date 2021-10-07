import React from 'react';
import BottomNavigator from '../navigations/BottomNavigator';

function Main({ navigation }) {
  const goToLogin = () => navigation.navigate('Login', { name: 'Login' });

  return (
    <BottomNavigator goToLogin={goToLogin} />
  );
};

export default Main;