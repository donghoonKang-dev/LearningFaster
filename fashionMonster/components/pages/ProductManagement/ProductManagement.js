import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Header from './PMHeader';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
import FilterContainer from './FilterContainer';
import ProductList from './ProductList';
import BottomPopup from './BottomPopup';

const THEME_WHITE = '#FFFFFF';

const ProductManagement = () => {
  const [logOutPopupOpen, setLogOutPopupOpen] = useState(false);
  const [filterPopupOpen, setFilterPopupOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('sortByDate');
  const [isSearchBarClicked, setIsSearchBarClicked] = useState(false);

  const showLogOutPopup = () => {
    setLogOutPopupOpen(true);
  };
  const closeLogOutPopup = () => {
    setLogOutPopupOpen(false);
  };
  const showFilterPopup = () => {
    setFilterPopupOpen(true);
  };
  const closeFilterPopup = () => {
    setFilterPopupOpen(false);
  };
  const logOut = () => {
    setLogOutPopupOpen(false);
    alert('로그아웃 되었습니다.');
  };
  const sortByDate = () => {
    setSelectedFilter('sortByDate');
    setFilterPopupOpen(false);
    alert('최근 등록일순 정렬 되었습니다.');
  };
  const sortByPriceAsc = () => {
    setSelectedFilter('sortByPriceAsc');
    setFilterPopupOpen(false);
    alert('가격 낮은순 정렬 되었습니다.');
  };
  const sortByPriceDsc = () => {
    setSelectedFilter('sortByPriceDsc');
    setFilterPopupOpen(false);
    alert('가격 높은순 정렬 되었습니다.');
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
        style={{ flex: 1, backgroundColor: THEME_WHITE }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <SearchBar
          pressed={isSearchBarClicked}
          searchBarOpen={searchBarOpen}
          searchBarClose={searchBarClose}
        />
        {isSearchBarClicked ?
          <SearchList />:
          <View style={{ flex: 1 }}>
            <FilterContainer selectedFilter={selectedFilter} onClick={showFilterPopup}/>
            <ProductList selectedFilter={selectedFilter} />
          </View>
        }
        {logOutPopupOpen &&
          <BottomPopup
            name="logOut"
            isOpen={logOutPopupOpen}
            onClose={logOut}
            onTouchOutside={closeLogOutPopup} 
          />
        }
        {filterPopupOpen &&
          <BottomPopup
            name="filter"
            isOpen={filterPopupOpen}
            sortBy={selectedFilter}
            sortByDate={sortByDate}
            sortByPriceAsc={sortByPriceAsc}
            sortByPriceDsc={sortByPriceDsc}
            onTouchOutside={closeFilterPopup} 
          />
        }
      </View>
    </>
  );
};

export default ProductManagement;
