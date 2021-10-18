import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Text } from 'react-native';
import { THEME_GRAY } from '../../styles/color';
import ProdListItem from './ProdListItem';

function ProductList({
  navigation,
  loadProductList,
  hasMore,
  loadMoreData,
  page,
  isLoading,
  onPullRefresh }) {
  const renderItem = ({ item }) =>
    <ProdListItem
      productData={item}
      navigation={navigation}
    />

  const renderFooter = () => {
    return (
      hasMore ?
        <View style={styles.footerContainer}>
          <ActivityIndicator size="large" />
        </View> :
        <View style={styles.footerContainer}>
          <Text style={{ fontSize: 14, color: THEME_GRAY }}>
            모든 데이터를 불러왔습니다.
          </Text>
        </View>
    )
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={loadProductList.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}${index}+${page}`}
        ListFooterComponent={renderFooter}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0}
        refreshing={isLoading}
        onRefresh={onPullRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  footerContainer: {
    marginVertical: 10,
    alignItems: 'center',
  }
});

export default ProductList;