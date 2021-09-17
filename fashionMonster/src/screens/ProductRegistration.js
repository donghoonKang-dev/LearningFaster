import React, { useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Header from '../components/Header/PRHeader';
import ProductImage from '../components/Input/ProductImage';
import ProductName from '../components/Input/ProductName';
import ProductPrice from '../components/Input/ProductPrice';
import ProductCategory from '../components/Input/ProductCategory';
import ProductColor from '../components/Input/ProductColor';
import ProductSize from '../components/Input/ProductSize';
import ProductActualSize from '../components/Input/ProductActualSize';
import ProductMixRate from '../components/Input/ProductMixRate';
import ProductMadeIn from '../components/Input/ProductMadeIn';
import ProductMinimumOrder from '../components/Input/ProductMinimumOrder';
import ProductDetail from '../components/Input/ProductDetail';

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