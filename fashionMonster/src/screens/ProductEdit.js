import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FocusAwareStatusBar from '../components/StatusBar/FocusAwareStatusBar';
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
import ProductDesc from '../components/ProductRegistration/ProductDesc';
import cateClassifier from '../utils/cateClassifier';
import { useProduct } from '../modules/product/hook';
import { useAuth } from '../modules/auth/hook';
import { useUI } from '../modules/ui';
import { useDispatch } from 'react-redux';
import { resetDetail } from '../modules/product/slice';
import getCategory from '../utils/getCategory';
import { THEME_WHITE } from '../styles/color';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Each child in a list should have a unique "key" prop',
]);

function ProductEdit({ route, navigation }) {
  const { categoryList, loadCategoryDispatch } = useUI();
  const { loadDetailDispatch, loadDetail, updateProductDispatch } = useProduct();
  const {
    login: { data: userData },
  } = useAuth();
  const dispatch = useDispatch();

  const refScroll = useRef(null);

  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [cateName, setCateName] = useState('');
  const [mainCate, setMainCate] = useState(0);
  const [subCate, setSubCate] = useState(0);
  const [middle, setMiddle] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mixRate, setMixRate] = useState('');
  const [madeIn, setMadeIn] = useState(0);
  const [madeInDetail, setMadeInDetail] = useState('');
  const [canEach, setCanEach] = useState(false);
  const [desc, setDesc] = useState('');
  const [cateArray, setCateArray] = useState('');

  const goToBack = () => navigation.goBack();

  const resetAllState = () => {
    setImages([]);
    setName('');
    setPrice('');
    setCategory('');
    setCateName('');
    setMainCate(0);
    setSubCate(0);
    setMiddle([]);
    setColors([]);
    setSizes([]);
    setSelectedSize(null);
    setMixRate('');
    setMadeIn(0);
    setMadeInDetail('');
    setCanEach(false);
    setDesc('');
  }

  const onSubmit = () => {
    if (!userData) return;
    if (images.length === 0) return alert('???????????? 1????????? ??????????????????');
    if (!name.trim()) return alert('???????????? ??????????????????');
    if (!price.trim()) return alert('??????????????? ??????????????????');
    if (!mainCate && !subCate) return alert('??????????????? ??????????????????');
    if (colors.length === 0) return alert('????????? ??????????????????');
    if (sizes.length === 0) return alert('???????????? ??????????????????');
    if (!mixRate.trim()) return alert('?????? ???????????? ??????????????????');
    if (madeIn == null && madeInDetail == '') return alert('??????????????? ??????????????????');
    if (madeIn === 3 && madeInDetail === '') return alert('?????????????????? ??????????????????');
    updateProductDispatch({
      BrandId: userData.id,
      CategoryMainId: mainCate,
      CategoryMiddleId: subCate,
      images: images,
      name: name,
      price: price,
      isPiece: canEach,
      composition: mixRate,
      country: madeIn,
      countryName: madeInDetail,
      sizes: sizes,
      detail: desc,
      colors: colors,
      ProductId: route.params?.selectedId,
    });
    alert('?????????????????????.');
    navigation.navigate('ProductManagement', { name: 'ProductManagement' });
  };

  useEffect(() => {
    loadCategoryDispatch();
    loadDetailDispatch({ type: route.params.selectedIsUpdated ? 'updated' : 'exist', productId: route.params.selectedId });
  }, []);

  useEffect(() => {
    if (!categoryList) return;
    setCateArray(categoryList.map(category => getCategory(category)));
  }, []);

  useEffect(() => {
    if (!loadDetail.data) return;
    const { data } = loadDetail;
    const mappedColor = data.ProductColors.map(color => color.Color);
    const mappedSize = data.ProductSizes.map(sz => {
      const arr = Object.entries(sz)
        .map(([key, value]) => {
          if (key !== 'id' && key !== 'SizeOpt' && value)
            return { name: key, value: value };
        })
        .filter(v => v !== undefined);
      return {
        id: sz.SizeOpt.id,
        value: sz.SizeOpt.name,
        detail: arr,
      };
    });
    setName(data.name);
    setPrice(data.price + '');
    setImages(data.pImages);
    setMainCate(data.CategoryMain.id);
    if (cateArray.length !== 0) setMiddle(cateArray.find(v => v.id === data.CategoryMain.id)?.middle);
    setSubCate(data.CategoryMiddle.id);
    setColors(mappedColor);
    setMixRate(data.composition);
    setMadeIn(data.CountryId);
    setMadeInDetail(data.countryName);
    setCanEach(data.isPiece);
    setDesc(data.detail);
    setSizes(mappedSize);
  }, [loadDetail.data]);

  useEffect(() => {
    setCateName(cateClassifier(category));
    setSizes([]);
  }, [category]);

  useEffect(() => {
    return () => {
      dispatch(resetDetail());
    };
  }, [dispatch]);

  return (
    <>
      {!loadDetail.data ? (
        <>
          <FocusAwareStatusBar barStyle="dark-content" backgroundColor={THEME_WHITE} translucent={true} />
          <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" />
          </SafeAreaView>
        </>
      ) : (
        <>
          <FocusAwareStatusBar barStyle="dark-content" backgroundColor={THEME_WHITE} translucent={true} />
          <Header resetAllState={resetAllState} goToBack={goToBack} onSubmit={onSubmit} headerName="?????? ??????" />
          <KeyboardAwareScrollView innerRef={value => { refScroll.current = value }}>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic">
              <View style={styles.pageContainer}>
                <ProductImage
                  images={images}
                  setImages={setImages}
                  deleteImage={filename => setImages(images.filter(image => image.filename !== filename))}
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
                  middle={middle}
                  setMiddle={setMiddle}
                />
                <ProductColor
                  colors={colors}
                  setColors={setColors}
                />
                <ProductSize
                  sizes={sizes}
                  setSizes={setSizes}
                  cateName={cateName}
                />
                {cateName !== '' && cateName !== 'others' &&
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
                <ProductDesc
                  refScroll={refScroll}
                  desc={desc}
                  setDesc={setDesc}
                />
              </View>
            </ScrollView>
          </KeyboardAwareScrollView>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    padding: 20,
    backgroundColor: THEME_WHITE,
  },
});

export default ProductEdit;