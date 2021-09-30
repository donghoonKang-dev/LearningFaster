import React, { useState, useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Header from '../components/Header/PRHeader';
import ProductImage from '../components/ProductRegistration/ProductImage';
import ProductName from '../components/ProductRegistration/ProductName';
import ProductPrice from '../components/ProductRegistration/ProductPrice';
import ProductCategory from '../components/ProductRegistration/ProductCategory';
import ProductColor from '../components/ProductRegistration/ProductColor';
import ProductSize from '../components/ProductRegistration/ProductSize';
import ProductActualSize from '../components/ProductRegistration/ProductActualSize';
import ProductMixRate from '../components/ProductRegistration/ProductMixRate';
import ProductMadeIn from '../components/ProductRegistration/ProductMadeIn';
import ProductMinimumOrder from '../components/ProductRegistration/ProductMinimumOrder';
import ProductDetail from '../components/ProductRegistration/ProductDetail';
import cateClassifier from '../utils/cateClassifier';
import { THEME_WHITE } from '../styles/color';

function ProductRegistration() {
  const refScroll = useRef(null);
  const nextManualSizeId = useRef(1);

  const initialManualSizeState = [{
    id: nextManualSizeId.current++,
    size: '',
  }];

  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [mainCate, setMainCate] = useState(null);
  const [subCate, setSubCate] = useState(null);
  const [colors, setColors] = useState([]);
  const [manualSizes, setManualSizes] = useState(initialManualSizeState);
  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mixRate, setMixRate] = useState('');
  const [madeIn, setMadeIn] = useState(null);
  const [madeInDetail, setMadeInDetail] = useState('');
  const [canEach, setCanEach] = useState(false);
  const [desc, setDesc] = useState('');

  const resetAllState = () => {
    setImages([]);
    setName('');
    setPrice('');
    setCategory('');
    setMainCate(null);
    setSubCate(null);
    setColors([]);
    setManualSizes(initialManualSizeState);
    setSizes([]);
    setSelectedSize(null);
    setMixRate('');
    setMadeIn(null);
    setMadeInDetail('');
    setCanEach(false);
    setDesc('');
  }

  return (
    <>
      <Header resetAllState={resetAllState} />
      <KeyboardAwareScrollView innerRef={value => { refScroll.current = value }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View style={styles.pageContainer}>
            <ProductImage
              images={images}
              setImages={setImages}
              deleteImage={id => setImages(images.filter(image => image.id !== id))}
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
              main={mainCate}
              setMain={setMainCate}
              sub={subCate}
              setSub={setSubCate}
              fullName={category}
              setFullName={setCategory}
            />
            <ProductColor
              colors={colors}
              setColors={setColors}
            />
            <ProductSize
              sizes={sizes}
              setSizes={setSizes}
              manualSizes={manualSizes}
              setManualSizes={setManualSizes}
              category={category}
            />
            {cateClassifier(category) === 'clothes' &&
              <ProductActualSize
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                category={category}
                sizes={sizes}
                setSizes={setSizes}
              />
            }
            <ProductMixRate
              mixRate={mixRate}
              setMixRate={setMixRate}
            />
            <ProductMadeIn
              madeIn={madeIn}
              setMadeIn={setMadeIn}
              madeInDetail={madeInDetail}
              setMadeInDetail={setMadeInDetail}
            />
            <ProductMinimumOrder
              canEach={canEach}
              setCanEach={setCanEach}
            />
            <ProductDetail
              refScroll={refScroll}
              desc={desc}
              setDesc={setDesc}
            />
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