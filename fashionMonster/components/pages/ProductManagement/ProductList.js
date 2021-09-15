import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ProductListItem from './ProductListItem';
import DATA from '../../../assets/data/data';

const dateParser = (dateString) => {
  const date = dateString.slice(0, 10);
  const time = dateString.slice(11);

  const dates = date.split('-')
  const times = time.split(':')

  return parseInt(dates.join('') + times.join(''));
};

const ProductList = ({ selectedFilter }) => {
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
      { selectedFilter === 'sortByDate' && 
        <FlatList
          data={DATA.sort((x,y) => dateParser(y.uploadDate) - dateParser(x.uploadDate))}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      }
      { selectedFilter === 'sortByPriceAsc' && 
        <FlatList
          data={DATA.sort((x,y) => parseInt(x.price) - parseInt(y.price))}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      }
      { selectedFilter === 'sortByPriceDsc' && 
        <FlatList
          data={DATA.sort((x,y) => parseInt(y.price) - parseInt(x.price))}
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