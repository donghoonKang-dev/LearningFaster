import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const THEME_PURPLE = '#6A0DAD';

const FilterContainer = ({ selectedFilter, onClick }) => {
  return (
    <View style={styles.filterBar}>
      <TouchableOpacity style={styles.filterBox} onPress={onClick}>
        <FeatherIcon name="chevron-down" size={15} color={THEME_PURPLE} />
        <Text style={styles.filterText}>
          {selectedFilter === 'sortByDate' ? '최근 등록일순' : '이름순'}
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
    fontSize: 16,
    fontWeight: '500',
    color: THEME_PURPLE,
  }
})

export default FilterContainer;