import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ProdListItem from './ProdListItem';
import { useProduct } from '../../modules/product/index';
import useFetchMore from '../../hooks/useFetchMore';

function ProductList({ navigation, keyword }) {
  const {
    loadProductListDispatch,
    loadProductList,
    hasMore,
    page,
    setPageDispatch,
    reloadBlock,
  } = useProduct();
  const [FetchMoreTrigger] = useFetchMore(hasMore);

  useEffect(() => {
    loadProductListDispatch({
      keyword: keyword ? keyword : '',
    });
  }, [keyword]);

  const renderItem = ({ item }) =>
    <ProdListItem
      productData={item}
      navigation={navigation}
    />

  return (
    <View style={styles.listContainer}>
      {keyword === ''
        ?
        <FlatList
          data={loadProductList.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        :
        <FlatList
          data={loadProductList.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  }
});

export default ProductList;