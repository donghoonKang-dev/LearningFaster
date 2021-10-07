import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ProdListItem from './ProdListItem';
import { ProductListItem, useProduct } from '../../modules/product';
import dateParser from '../../utils/dateParser';
import DATA from '../../assets/data/data';
import { THEME_GRAY } from '../../styles/color';

function ProductList({ selectedFilter }) {
  const renderItem = ({ item }) => (
    <ProdListItem
      imgSrc={item.imgSrc}
      name={item.name}
      uploadDate={item.uploadDate}
      price={item.price}
    />
  );

  const renderEmptyContainer = () => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, marginTop: 100, color: THEME_GRAY }}>
        아직 등록된 상품이 없습니다!
      </Text>
    </View>
  )

  return (
    <View style={styles.listContainer}>
      {selectedFilter === 'sortByDate' &&
        <FlatList
          data={DATA.sort((x, y) => dateParser(y.uploadDate) - dateParser(x.uploadDate))}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={renderEmptyContainer}
        />
      }
      {selectedFilter === 'sortByPriceAsc' &&
        <FlatList
          data={DATA.sort((x, y) => parseInt(x.price) - parseInt(y.price))}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={renderEmptyContainer}
        />
      }
      {selectedFilter === 'sortByPriceDsc' &&
        <FlatList
          data={DATA.sort((x, y) => parseInt(y.price) - parseInt(x.price))}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={renderEmptyContainer}
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