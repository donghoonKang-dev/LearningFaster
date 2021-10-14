import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useProduct } from '../../modules/product';
import { THEME_GRAY, THEME_PURPLE } from '../../styles/color';

function FilterContainer({ selectedFilter, onClick, keyword }) {
  const { totalCnt, loadProductCntDispatch } = useProduct();

  useEffect(() => {
    loadProductCntDispatch({ keyword: keyword ? keyword : '' });
  }, [keyword]);

  return (
    <View style={styles.filterBar}>
      {keyword === ''
        ?
        <Text style={styles.cntText}>총 {totalCnt}개의 등록된 상품</Text>
        :
        <Text style={styles.cntText}>총 {totalCnt}개의 {keyword} 검색결과</Text>
      }
      <TouchableOpacity style={styles.filterBox} onPress={onClick}>
        <FeatherIcon name="chevron-down" size={15} color={THEME_PURPLE} />
        <Text style={styles.filterText}>
          {selectedFilter === 'created' && '최근 등록일순'}
          {selectedFilter === 'name' && '이름순'}
          {selectedFilter === 'price' && '가격순'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  filterBar: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cntText: {
    marginLeft: 10,
    fontSize: 14,
    color: THEME_GRAY,
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