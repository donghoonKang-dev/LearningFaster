import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import ProductListItem from './ProductListItem';

const DATA = [
  {
    id: 'product1',
    imgSrc: require('../../../assets/image/pylee.gif'),
    name: '상품1',
    uploadDate: '2021-09-08 14:49:34',
    price: '11111644',
  },
  {
    id: 'product2',
    imgSrc: require('../../../assets/image/pylee.gif'),
    name: '상품2',
    uploadDate: '2021-09-07 14:49:34',
    price: '252345',
  },
  {
    id: 'product3',
    imgSrc: require('../../../assets/image/pylee.gif'),
    name: '상품3',
    uploadDate: '2021-09-06 14:49:34',
    price: '11564',
  },
  {
    id: 'product4',
    imgSrc: require('../../../assets/image/pylee.gif'),
    name: '상품4',
    uploadDate: '2021-09-05 14:49:34',
    price: '90234587',
  },
  {
    id: 'product5',
    imgSrc: require('../../../assets/image/pylee.gif'),
    name: '상품5',
    uploadDate: '2021-09-04 14:49:34',
    price: '3489567',
  },
  {
    id: 'product6',
    imgSrc: require('../../../assets/image/pylee.gif'),
    name: '상품6',
    uploadDate: '2021-09-03 14:49:34',
    price: '3452',
  },
  {
    id: 'product7',
    imgSrc: require('../../../assets/image/pylee.gif'),
    name: '상품7',
    uploadDate: '2021-09-02 14:49:34',
    price: '150000',
  },
];

const ProductList = () => {
  const renderItem = ({ item }) => (
    <ProductListItem
      imgSrc={item.imgSrc}
      name={item.name}
      uploadDate={item.uploadDate}
      price={item.price}
    />
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={DATA}
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