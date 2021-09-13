import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Header from './PMHeader';
import SearchBar from './SearchBar';
import BottomPopup from './BottomPopup';

const ProductManagement = () => {
  const [logOutPopupOpen, setLogOutPopupOpen] = useState(false);

  const showLogOutPopup = () => {
    setLogOutPopupOpen(true);
  };
  const closeLogOutPopup = () => {
    setLogOutPopupOpen(false);
  };
  const logOut = () => {
    setLogOutPopupOpen(false);
    alert('로그아웃 되었습니다.');
  };

  return (
    <>
      <Header iconClick={showLogOutPopup} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <SearchBar />
          <Text>상품 관리 페이지 입니다.</Text>
        </View>
        <BottomPopup 
          isOpen={logOutPopupOpen}
          onClose={logOut}
          onTouchOutside={closeLogOutPopup} 
        />
      </ScrollView>
    </>
  );
};

export default ProductManagement;
