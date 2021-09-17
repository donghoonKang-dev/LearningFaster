import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import SearchListItem from './SearchListItem';
import DATA from '../../assets/data/searchData';

function SearchList() {
  const renderItem = ({ item }) => (
    <SearchListItem imgSrc={item.image} title={item.title} />
  );

  return (
    <>
      <View style={styles.searchListHeader}>
        <Text style={styles.resentSearch}>최근 검색어</Text>
        <TouchableOpacity>
          <Text style={styles.deleteAll}>전체삭제</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchListHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  resentSearch: {
    fontSize: 16,
  },
  deleteAll: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default SearchList;