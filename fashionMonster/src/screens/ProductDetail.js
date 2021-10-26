import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Alert,
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
  ActivityIndicator
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { DataTable } from 'react-native-paper';
import FocusAwareStatusBar from '../components/StatusBar/FocusAwareStatusBar';
import ColorBadge from '../components/Badge/ColorBadge';
import Header from '../components/Header/PRHeader';
import { useProduct } from '../modules/product';
import getCateSize from '../utils/getCateSize';
import getColor from '../utils/getColor';
import { THEME_GRAY, THEME_LIGHTGRAY, THEME_LIGHTPURPLE, THEME_PURPLE, THEME_WHITE } from '../styles/color';

const WIDTH = Dimensions.get('window').width;

function ProductDetail({ route, navigation }) {
  const { loadDetailDispatch, loadDetail, removeProductDispatch } = useProduct();

  const [imgIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [isActive, setIsActive] = useState(1);
  const [mainCate, setMainCate] = useState('');
  const [subCate, setSubCate] = useState('');
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [mixRate, setMixRate] = useState('');
  const [canEach, setCanEach] = useState(false);
  const [madeIn, setMadeIn] = useState(0);
  const [madeInDetail, setMadeInDetail] = useState('');
  const [desc, setDesc] = useState('');

  const isCarousel = useRef(null);

  const goToBack = () => navigation.goBack();
  const goToEdit = () => {
    navigation.navigate('ProductEdit', {
      selectedId: route.params.selectedId,
      selectedIsUpdated: route.params.selectedIsUpdated === 2 ? true : false,
    })
  };

  const onClickRemove = () => {
    Alert.alert("경고", "정말 삭제하시겠습니까?",
      [
        {
          text: "취소",
          onPress: () => { },
          style: "cancel"
        },
        {
          text: "확인",
          onPress: () => {
            removeProductDispatch({ ProductId: route.params.selectedId, name: route.params.selectedName });
            navigation.navigate('ProductManagement');
          }
        }
      ]
    )
  };

  const getMadeIn = (id) => {
    if (id === 1) return '대한민국'
    if (id === 2) return '중국'
  };

  const getImages = (imgs) => {
    if (!imgs) return [];
    return imgs.map(v => ({
      original: `https://faster-seller.s3.ap-northeast-2.amazonaws.com/original/product/${v.filename}`,
      thumbnail: `$https://faster-seller.s3.ap-northeast-2.amazonaws.com/resize/300/product/${v.filename}`,
      originalAlt: `${v.id}`,
    }));
  }

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
    setPrice(data.price);
    setImages(data.pImages);
    setIsActive(data.isActive);
    setMainCate(data.CategoryMain.name);
    setSubCate(data.CategoryMiddle.name)
    setColors(mappedColor);
    setSizes(mappedSize);
    setMixRate(data.composition);
    setCanEach(data.isPiece);
    setMadeIn(data.CountryId);
    setMadeInDetail(data.countryName);
    setDesc(data.detail);
  }, [loadDetail.data]);

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: item.original }} />
      </View>
    );
  };

  return (
    <>
      {!loadDetail.data ?
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View> :
        <>
          <FocusAwareStatusBar barStyle="dark-content" backgroundColor={THEME_WHITE} translucent={true} />
          <Header
            goToBack={goToBack}
            goToEdit={goToEdit}
            headerName="상품 디테일"
            title={name}
            onClickRemove={onClickRemove}
          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{ backgroundColor: THEME_WHITE }}
          >
            <Carousel
              layout={"default"}
              ref={isCarousel}
              data={getImages(images)}
              sliderWidth={WIDTH}
              itemWidth={WIDTH}
              renderItem={renderItem}
              inactiveSlideShift={0}
              useScrollView={true}
              onSnapToItem={(index) => setImageIndex(index)}
            />
            <Pagination
              dotsLength={getImages(images).length}
              activeDotIndex={imgIndex}
              carouselRef={isCarousel}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: THEME_LIGHTPURPLE
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              tappableDots={true}
            />
            <View style={styles.cateTextContainer}>
              <Text style={styles.categoryText}>{mainCate + ' > ' + subCate}</Text>
              <Text style={styles.stateText}>{isActive === 1 ? '판매중' : '품절'}</Text>
            </View>
            <Text style={styles.titleText}>{name}</Text>
            <Text style={styles.priceText}>{price.toLocaleString() + ' 원'}</Text>
            <Text style={[styles.rowTitle, { marginHorizontal: 20, marginBottom: 10 }]}>
              상품 색상
            </Text>
            <View style={styles.colorBadgeContainer}>
              {colors.length !== 0 && colors.map(color => {
                return (
                  <ColorBadge
                    name={color.name}
                    color={getColor(color).color}
                    background={getColor(color).background}
                  />
                )
              })}
            </View>
            <Text style={[styles.rowTitle, { marginHorizontal: 20, marginBottom: 20 }]}>
              상품 사이즈
            </Text>
            <DataTable style={{ backgroundColor: THEME_WHITE }}>
              <DataTable.Header style={{ borderBottomWidth: 0, }}>
                <DataTable.Title
                  style={{
                    justifyContent: 'center',
                    borderRightWidth: 0.5,
                    borderBottomWidth: 0.5,
                    backgroundColor: THEME_LIGHTGRAY
                  }}
                >
                  <Text style={{ fontWeight: 'bold', fontSize: 14, }}>사이즈</Text>
                </DataTable.Title>
                {sizes.length !== 0 && sizes[0].detail.map(v => {
                  return (
                    <DataTable.Title
                      style={{
                        justifyContent: 'center',
                        borderBottomWidth: 0.5,
                        backgroundColor: THEME_LIGHTGRAY
                      }}
                    >
                      <Text style={{ fontWeight: 'bold', fontSize: 14, }}>{getCateSize(v.name)}</Text>
                    </DataTable.Title>
                  )
                })}
              </DataTable.Header>
              {sizes.map(size => {
                return (
                  <DataTable.Row style={{ borderBottomWidth: 0, }}>
                    <DataTable.Cell
                      style={{ justifyContent: 'center', borderRightWidth: 0.5, backgroundColor: THEME_WHITE }}
                    >
                      <Text style={{ fontWeight: 'bold' }}>{size.value}</Text>
                    </DataTable.Cell>
                    {size.detail.map(v => {
                      return (
                        <DataTable.Cell
                          style={{ justifyContent: 'center', backgroundColor: THEME_WHITE }}
                        >
                          {v.value}
                        </DataTable.Cell>
                      )
                    })}
                  </DataTable.Row>
                );
              })}
            </DataTable>
            <View style={styles.descContainer}>
              <Text style={styles.rowTitle}>소재 혼용률</Text>
              <Text style={styles.rowContent}>{mixRate}</Text>
            </View>
            <View style={styles.descContainer}>
              <Text style={styles.rowTitle}>최소 주문 단위</Text>
              <Text style={styles.rowContent}>{canEach ? '낱장 주문 가능' : '낱장 주문 불가능'}</Text>
            </View>
            <View style={styles.descContainer}>
              <Text style={styles.rowTitle}>제조국</Text>
              <Text style={styles.rowContent}>{madeIn !== 3 ? getMadeIn(madeIn) : madeInDetail}</Text>
            </View>
            <View style={[styles.descContainer, { marginTop: 15, flexDirection: 'column', borderBottomWidth: 0 }]}>
              <Text style={styles.rowTitle}>상품 상세정보</Text>
              <Text style={styles.colContent}>{desc}</Text>
            </View>
          </ScrollView>
        </>
      }
    </>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    width: WIDTH,
    height: WIDTH,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  cateTextContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '500',
    color: THEME_GRAY,
  },
  stateText: {
    fontSize: 18,
    fontWeight: '700',
  },
  titleText: {
    marginLeft: 20,
    textAlign: 'left',
    fontSize: 24,
    fontWeight: '700',
  },
  priceText: {
    marginRight: 20,
    textAlign: 'right',
    fontSize: 24,
    fontWeight: '700',
  },
  colorBadgeContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rowTitle: {
    width: WIDTH * 0.3,
    fontSize: 16,
    marginBottom: 10,
  },
  rowContent: {
    width: WIDTH * 0.7,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  colContent: {
    fontSize: 16,
    fontWeight: '700',
  },
  descContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: THEME_LIGHTGRAY,
  },
});

export default ProductDetail;
