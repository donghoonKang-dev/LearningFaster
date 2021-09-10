import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import Header from './PRHeader';

const ProductRegistration = () => {
  return (
    <>
      <Header />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>상품 등록 페이지 입니다.</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductRegistration;