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
import ProductDetail from '../components/ProductRegistration/ProductDetail';
import cateClassifier from '../utils/cateClassifier';
import { category as cate } from '../assets/data/category';
import { useProduct } from '../modules/product/hook';
import { useAuth } from '../modules/auth/hook';
import { useDispatch } from 'react-redux';
import { resetDetail } from '../modules/product/slice';
import { THEME_WHITE } from '../styles/color';

function ProductEdit({ route, navigation }) {
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

  const goToBack = () => navigation.navigate('ProductManagement', { name: 'ProductManagement' });

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
    if (images.length === 0) return alert('이미지를 1개이상 입력해주세요');
    if (!name.trim()) return alert('상품명을 기입해주세요');
    if (!price.trim()) return alert('상품가격을 기입해주세요');
    if (!mainCate && !subCate) return alert('카테고리를 선택해주세요');
    if (colors.length === 0) return alert('색상을 선택해주세요');
    if (sizes.length === 0) return alert('사이즈를 입력해주세요');
    if (!mixRate.trim()) return alert('소재 혼용률을 입력해주세요');
    if (madeIn == null && madeInDetail == '') return alert('제조국가를 입력해주세요');
    if (madeIn === 3 && madeInDetail === '') return alert('제조국가명을 입력해주세요');
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
    alert('저장되었습니다.');
    navigation.navigate('ProductManagement', { name: 'ProductManagement' });
  };

  useEffect(() => {
    loadDetailDispatch({ type: route.params.selectedIsUpdated ? 'updated' : 'exist', productId: route.params.selectedId });
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
    setMiddle(cate.find(v => v.id === data.CategoryMain.id)?.middle);
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
  }, [category]);

  useEffect(() => {
    return () => {
      dispatch(resetDetail());
    };
  }, [dispatch]);

  console.log(sizes)

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
          <Header resetAllState={resetAllState} goToBack={goToBack} onSubmit={onSubmit} headerName="상품 수정" />
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
                <ProductDetail
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