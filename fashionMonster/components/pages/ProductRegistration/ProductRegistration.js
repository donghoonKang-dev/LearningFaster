import React, { useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
  const refScroll = useRef(null);

  return (
    <>
      <Header />
      <KeyboardAwareScrollView innerRef={ value => { refScroll.current = value } }>
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
            <ProductDetail refScroll={refScroll} />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
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