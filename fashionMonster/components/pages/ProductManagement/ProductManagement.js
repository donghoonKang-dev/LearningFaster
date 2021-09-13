import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Header from './PMHeader';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
import BottomPopup from './BottomPopup';

const ProductManagement = () => {
  const [logOutPopupOpen, setLogOutPopupOpen] = useState(false);
  const [isSearchBarClicked, setIsSearchBarClicked] = useState(false);

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
  const searchBarOpen = () => {
    setIsSearchBarClicked(true)
  }
  const searchBarClose = () => {
    setIsSearchBarClicked(false)
  }
  

  return (
    <>
      <Header iconClick={showLogOutPopup} />
      <View
        contentInsetAdjustmentBehavior="automatic">
        <SearchBar
          pressed={isSearchBarClicked}
          searchBarOpen={searchBarOpen}
          searchBarClose={searchBarClose}
        />
        {isSearchBarClicked ?
          <SearchList />:
          <Text>상품 관리 페이지 입니다.</Text>
        }
        <BottomPopup 
          isOpen={logOutPopupOpen}
          onClose={logOut}
          onTouchOutside={closeLogOutPopup} 
        />
      </View>
    </>
  );
};

export default ProductManagement;
