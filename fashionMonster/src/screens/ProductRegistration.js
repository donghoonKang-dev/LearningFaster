import React, { useState, useRef } from 'react';
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
import { THEME_WHITE } from '../styles/color';

function ProductRegistration() {
  const refScroll = useRef(null);

  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [colors, setColors] = useState([]);

  const deleteImage = (id) => {
    setImages(images.filter(image => image.id !== id))
  };

  const onChangeColor = (colorData) => {
    const isExist = colors.findIndex(color => color.id === colorData.id) !== -1;
    isExist
      ? setColors(prev => prev.filter(v => v.id !== colorData.id))
      : setColors([...colors, colorData]);
  };

  return (
    <>
      <Header />
      <KeyboardAwareScrollView innerRef={value => { refScroll.current = value }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View style={styles.pageContainer}>
            <ProductImage
              images={images}
              setImages={setImages}
              deleteImage={deleteImage}
            />
            <ProductName
              name={name}
              setName={setName}
            />
            <ProductPrice
              price={price}
              setPrice={setPrice}
            />
            <ProductCategory
              fullName={category}
              setFullName={setCategory}
            />
            <ProductColor
              colors={colors}
              onChangeColor={onChangeColor}
            />
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