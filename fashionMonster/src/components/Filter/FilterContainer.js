import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { THEME_PURPLE } from '../../styles/color';

function FilterContainer({ selectedFilter, onClick }) {
  return (
    <View style={styles.filterBar}>
      <TouchableOpacity style={styles.filterBox} onPress={onClick}>
        <FeatherIcon name="chevron-down" size={15} color={THEME_PURPLE} />
        <Text style={styles.filterText}>
          {selectedFilter === 'sortByDate' && '최근 등록일순'}
          {selectedFilter === 'sortByPriceAsc' && '가격 낮은순'}
          {selectedFilter === 'sortByPriceDsc' && '가격 높은순'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  filterBar: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  filterBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    marginHorizontal: 5,
    color: THEME_PURPLE,
    fontSize: 16,
    fontWeight: '500',
  }
})

export default FilterContainer;