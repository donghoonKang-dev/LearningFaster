import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ProdListItem from './ProdListItem';
import { useProduct } from '../../modules/product/index';
import useFetchMore from '../../hooks/useFetchMore';
import { THEME_GRAY } from '../../styles/color';

function ProductList({ navigation }) {
  const { loadProductListDispatch, loadProductList, hasMore } = useProduct();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);

  const renderItem = ({ item }) =>
    <ProdListItem
      productData={item}
      navigation={navigation}
    />

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={loadProductList.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  }
});

export default ProductList;