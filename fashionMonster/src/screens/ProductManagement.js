import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import FocusAwareStatusBar from '../components/StatusBar/FocusAwareStatusBar';
import Header from '../components/Header/PMHeader';
import SearchBar from '../components/Search/SearchBar';
import FilterContainer from '../components/Filter/FilterContainer';
import ProductList from '../components/List/ProductList';
import BottomPopup from '../components/Popup/BottomPopup';
import EmptyView from '../components/ImageView/EmptyView';
import { useAuth } from '../modules/auth/hook';
import { useProduct } from '../modules/product/index';
import useFetchMore from '../hooks/useFetchMore';
import { THEME_PURPLE, THEME_WHITE } from '../styles/color';

function ProductManagement({ route, navigation }) {
  const {
    logoutDispatch,
    login: { data: userData },
  } = useAuth();
  const { loadProductListDispatch, loadProductList, hasMore, totalCnt } = useProduct();
  const [FetchMoreTrigger, page, setPage] = useFetchMore(hasMore);
  const [keyword, setKeyword] = useState(null);
  const [logOutPopupOpen, setLogOutPopupOpen] = useState(false);
  const [filterPopupOpen, setFilterPopupOpen] = useState(false);
  const [isSearchBarClicked, setIsSearchBarClicked] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('created');

  const showLogOutPopup = () => setLogOutPopupOpen(true);
  const closeLogOutPopup = () => setLogOutPopupOpen(false);
  const showFilterPopup = () => setFilterPopupOpen(true);
  const closeFilterPopup = () => setFilterPopupOpen(false);
  const openSearchBar = () => setIsSearchBarClicked(true);
  const closeSearchBar = () => setIsSearchBarClicked(false);

  const logOut = () => {
    if (!userData) return;
    setLogOutPopupOpen(false);
    logoutDispatch({ email: userData.email, name: userData.name });
    route.params.goToLogin();
  };

  const sortBy = (type) => {
    setSelectedFilter(type);
    setFilterPopupOpen(false);
  };

  useEffect(() => {
    loadProductListDispatch({ page, keyword: keyword ? keyword : '', sort: selectedFilter });
  }, [page, keyword, selectedFilter]);

  useEffect(() => {
    setPage(1)
  }, [selectedFilter]);

  return (
    <>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={THEME_PURPLE} translucent={true} />
      <Header name={userData.name} iconClick={showLogOutPopup} />
      {totalCnt === 0 && keyword === null
        ?
        <>
          <EmptyView />
          {logOutPopupOpen &&
            <BottomPopup
              name="logOut"
              isOpen={logOutPopupOpen}
              onClose={logOut}
              onTouchOutside={closeLogOutPopup}
            />
          }
        </>
        :
        <View
          style={{ flex: 1, backgroundColor: THEME_WHITE }}
          contentInsetAdjustmentBehavior="automatic"
        >
          <SearchBar
            pressed={isSearchBarClicked}
            keyword={keyword}
            setKeyword={setKeyword}
            openSearchBar={openSearchBar}
            closeSearchBar={closeSearchBar}
          />
          <View style={{ flex: 1 }}>
            <FilterContainer selectedFilter={selectedFilter} onClick={showFilterPopup} keyword={keyword} />
            <ProductList navigation={navigation} keyword={keyword} />
          </View>
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
              selectedFilter={selectedFilter}
              sortBy={sortBy}
              onTouchOutside={closeFilterPopup}
            />
          }
        </View>
      }
    </>
  );
};

export default ProductManagement;
