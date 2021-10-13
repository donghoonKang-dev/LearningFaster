import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Switch,
  Alert
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useProduct } from '../../modules/product';
import {
  THEME_PURPLE,
  THEME_LIGHTPURPLE,
  THEME_WHITE,
  THEME_LIGHTGRAY,
  THEME_GRAY
} from '../../styles/color';
dayjs.locale('ko');

function ProdListItem({ productData }) {
  const { toggleActiveDispatch, removeProductDispatch } = useProduct();

  const toggleValue = () => {
    toggleActiveDispatch({
      productId: productData.id,
      isActive: productData.isActive === 1 ? 0 : 1,
    });
  };

  //const toggleSwitch = () => setSwitchEnabled(previousState => !previousState);

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
          onPress: () => removeProductDispatch({ ProductId: productData.id, name: productData.name }),
        }
      ]
    )
  };

  const swipeoutButtons = [{
    text: '삭제',
    backgroundColor: 'red',
    underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    onPress: onClickRemove
  }];

  return (
    <Swipeout right={swipeoutButtons} buttonWidth={100}>
      <View style={styles.listItemContainer}>
        <TouchableOpacity style={styles.productInfoContainer}>
          <Image
            style={styles.productImage}
            source={{ uri: `https://faster-seller.s3.ap-northeast-2.amazonaws.com/original/product/${productData.thumbnail}` }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.productName}>{productData.name}</Text>
            <Text style={styles.productInfo}>{dayjs(productData.createdAt).format('YY년 MM월 DD일 HH시')}</Text>
            <Text style={styles.productInfo}>{productData.price.toLocaleString() + ' 원'}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: THEME_LIGHTGRAY, true: THEME_LIGHTPURPLE }}
            thumbColor={productData.isActive ? THEME_PURPLE : THEME_WHITE}
            ios_backgroundColor={THEME_LIGHTGRAY}
            onValueChange={toggleValue}
            value={productData.isActive}
          />
        </View>
      </View>
    </Swipeout>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 0.5,
    borderColor: THEME_LIGHTGRAY,
    backgroundColor: THEME_WHITE,
  },
  productInfoContainer: {
    flexDirection: 'row',
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 5,
  },
  textContainer: {
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    marginBottom: 15,
  },
  productInfo: {
    fontSize: 14,
    color: THEME_GRAY,
  },
  switchContainer: {
    alignItems: 'center',
  }
});

export default React.memo(ProdListItem);
