import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './PRHeader';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductCategory from './ProductCategory';
import ProductColor from './ProductColor';
import ProductSize from './ProductSize';
import ProductActualSize from './ProductActualSize';
import ProductMixRate from './ProductMixRate';
import ProductMadeIn from './ProductMadeIn';
import ProductMinimumOrder from './ProductMinimumOrder';
import ProductDetail from './ProductDetail';

const THEME_WHITE = '#FFFFFF';

const ProductRegistration = () => {
  return (
    <>
      <Header />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.pageContainer}>
          <ProductImage />
          <ProductName />
          <ProductPrice />
          <ProductCategory />
          <ProductColor />
          <ProductSize />
          <ProductActualSize />
          <ProductMixRate />
          <ProductMadeIn />
          <ProductMinimumOrder />
          <ProductDetail />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    padding: 20,
    backgroundColor: THEME_WHITE,
  },
});

export default ProductRegistration;