import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert, ScrollView, View, Text } from 'react-native';
import FocusAwareStatusBar from '../components/StatusBar/FocusAwareStatusBar';
import Header from '../components/Header/PRHeader';
import { useProduct } from '../modules/product';
import { THEME_BLACK, THEME_GRAY, THEME_LIGHTGRAY, THEME_WHITE } from '../styles/color';

function ProductDetail({ route, navigation }) {
  const { loadDetailDispatch, loadDetail, removeProductDispatch } = useProduct();

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [madeIn, setMadeIn] = useState(0);
  const [madeInDetail, setMadeInDetail] = useState('');

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
  }

  useEffect(() => {
    loadDetailDispatch({ type: route.params.selectedIsUpdated ? 'updated' : 'exist', productId: route.params.selectedId });
  }, []);

  useEffect(() => {
    if (!loadDetail.data) return;
    const { data } = loadDetail;
    setName(data.name);
    setMadeIn(data.CountryId);
    setMadeInDetail(data.countryName);
    setDesc(data.detail);
  }, [loadDetail.data]);

  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={THEME_WHITE} translucent={true} />
      <Header
        goToBack={goToBack}
        goToEdit={goToEdit}
        headerName="상품 디테일"
        title={name}
        onClickRemove={onClickRemove}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.pageContainer}>
          <View style={styles.descContainer}>
            <Text style={styles.rowTitle}>제조국</Text>
            <Text style={styles.rowContent}>{madeIn !== 3 ? getMadeIn(madeIn) : madeInDetail}</Text>
          </View>
          <View style={[styles.descContainer, { flexDirection: 'column', borderBottomWidth: 0 }]}>
            <Text style={styles.rowTitle}>상품 상세정보</Text>
            <Text style={styles.colContent}>{desc}</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: THEME_WHITE,
  },
  rowTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  rowContent: {
    fontSize: 16,
    fontWeight: '700',
    marginRight: 40,
  },
  colContent: {
    fontSize: 16,
    fontWeight: '700',
  },
  descContainer: {
    padding: 10,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: THEME_LIGHTGRAY,
  },
});

export default ProductDetail;
