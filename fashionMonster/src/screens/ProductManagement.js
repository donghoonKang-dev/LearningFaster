import React, { useState, useEffect, useRef } from 'react';
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
import { THEME_PURPLE, THEME_WHITE } from '../styles/color';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

function ProductManagement({ route, navigation }) {
  const {
    logoutDispatch,
    login: { data: userData },
  } = useAuth();
  const {
    loadProductListDispatch,
    loadProductList,
    hasMore,
    page,
    setPageDispatch: setPage,
    reloadBlock,
    setReloadBlockDispatch,
    totalCnt,
    loadProductCntDispatch,
  } = useProduct();
  const [keyword, setKeyword] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('created');
  const [logOutPopupOpen, setLogOutPopupOpen] = useState(false);
  const [filterPopupOpen, setFilterPopupOpen] = useState(false);
  const [isSearchBarClicked, setIsSearchBarClicked] = useState(false);

  const showLogOutPopup = () => setLogOutPopupOpen(true);
  const closeLogOutPopup = () => setLogOutPopupOpen(false);
  const showFilterPopup = () => setFilterPopupOpen(true);
  const closeFilterPopup = () => setFilterPopupOpen(false);
  const openSearchBar = () => setIsSearchBarClicked(true);
  const closeSearchBar = () => setIsSearchBarClicked(false);

  const isNoData = useRef(-1);

  const logOut = () => {
    if (!userData) return;
    setLogOutPopupOpen(false);
    logoutDispatch({ email: userData.email, name: userData?.name });
    route.params.goToLogin();
  };

  const sortBy = (type) => {
    setSelectedFilter(type);
    setFilterPopupOpen(false);
  };

  const loadMoreData = () => {
    setReloadBlockDispatch(false);
    setPage('next');
  }

  const onPullRefresh = () => {
    loadProductListDispatch({ page, keyword: keyword ? keyword : '', sort: selectedFilter });
  }

  useEffect(() => {
    if (!reloadBlock) {
      setPage(1);
    }
  }, [keyword]);

  useEffect(() => {
    if (!reloadBlock) {
      setPage(1);
    }
  }, [selectedFilter]);

  useEffect(() => {
    if (!hasMore && page > 1) return;
    if (reloadBlock) return;
    loadProductListDispatch({ page, keyword: keyword ? keyword : '', sort: selectedFilter });
    if (loadProductList.data?.length === 0) isNoData.current = 0;
  }, [page, hasMore, keyword, selectedFilter]);

  return (
    <>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={THEME_PURPLE} translucent={true} />
      <Header name={userData?.name} iconClick={showLogOutPopup} />
      {totalCnt === 0 && keyword !== '' //&& isNoData.current === -1
        ? <>
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
            setKeyword={setKeyword}
            openSearchBar={openSearchBar}
            closeSearchBar={closeSearchBar}
          />
          <View style={{ flex: 1 }}>
            <FilterContainer selectedFilter={selectedFilter} onClick={showFilterPopup} keyword={keyword} />
            <ProductList
              navigation={navigation}
              loadProductList={loadProductList}
              hasMore={hasMore}
              loadMoreData={loadMoreData}
              page={page}
              isLoading={loadProductList.loading}
              onPullRefresh={onPullRefresh}
            />
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
