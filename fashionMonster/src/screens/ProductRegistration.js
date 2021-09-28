import React, { useState, useRef, useCallback } from 'react';
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
import { clothesCategory, shoesCategory } from '../assets/data/category';
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
  const [colors, setColors] = useState([]);
  const [manualSizes, setManualSizes] = useState(initialManualSizeState);
  const [sizes, setSizes] = useState([]);

  function deleteImage(id) {
    setImages(images.filter(image => image.id !== id))
  };

  const selectSizeKindOf = useCallback((categoryName) => {
    const tempName = categoryName.split('/')[0];
    const mainName = tempName.substring(0, tempName.length - 1);
    if (clothesCategory.includes(mainName)) return 'clothes';
    else if (shoesCategory.includes(mainName)) return 'shoes';
    else return 'others';
  }, [clothesCategory, shoesCategory]);

  function onChangeColor(colorData) {
    const isExist = colors.findIndex(color => color.id === colorData.id) !== -1;
    isExist
      ? setColors(prev => prev.filter(v => v.id !== colorData.id))
      : setColors([...colors, colorData]);
  };

  function onChangeSize(sizeData) {
    const isFreeSize = sizeData.value === 'FREE';
    const isExist = sizes.findIndex(size => size.id === sizeData.id) !== -1;
    if (isFreeSize) return setSizes([sizeData]);
    else setSizes(prev => prev.filter(sz => sz.value !== 'FREE'))
    isExist
      ? setSizes(prev => prev.filter(sz => sz.id !== sizeData.id))
      : setSizes(prev => [...prev, sizeData]);
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
            <ProductSize
              sizes={sizes}
              onChangeSize={onChangeSize}
              manualSizes={manualSizes}
              setManualSizes={setManualSizes}
              category={category}
              selectSizeKindOf={selectSizeKindOf}
            />
            {selectSizeKindOf(category) === 'clothes' &&
              <ProductActualSize
                category={category}
                sizes={sizes}
              />
            }
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