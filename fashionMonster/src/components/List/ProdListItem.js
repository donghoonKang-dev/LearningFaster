import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Switch,
  Alert,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import StateBadge from '../Badge/StateBadge';
import { useProduct } from '../../modules/product';
import {
  THEME_LIGHTPURPLE,
  THEME_WHITE,
  THEME_LIGHTGRAY,
  THEME_GRAY,
  THEME_WARNING
} from '../../styles/color';
dayjs.locale('ko');

function ProdListItem({ productData, navigation }) {
  const { toggleActiveDispatch, removeProductDispatch } = useProduct();

  const goToDetail = () => {
    navigation.navigate('ProductEdit', {
      selectedId: productData.id,
      selectedIsUpdated: productData.state === 2 ? true : false,
    })
  }

  const toggleValue = () => {
    toggleActiveDispatch({
      productId: productData.id,
      isActive: productData.isActive === 1 ? 0 : 1,
    });
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
          onPress: () => removeProductDispatch({ ProductId: productData.id, name: productData.name }),
        }
      ]
    )
  };

  const renderRightActions = () => {
    return (
      <View style={styles.swipedRow}>
        <TouchableOpacity style={{ width: '100%' }} onPress={onClickRemove} >
          <View style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>삭제</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.listItemContainer}>
        <TouchableOpacity style={styles.productInfoContainer} onPress={goToDetail}>
          <Image
            style={styles.productImage}
            source={{ uri: `https://faster-seller.s3.ap-northeast-2.amazonaws.com/original/product/${productData.thumbnail}` }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.productName}>{productData.name}</Text>
            <Text style={styles.productInfo}>{dayjs(productData.createdAt).format('YY년 MM월 DD일 HH시')}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.productInfo}>{productData.price.toLocaleString() + ' 원'}</Text>
              <StateBadge state={productData.state} />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: THEME_LIGHTGRAY, true: THEME_LIGHTPURPLE }}
            thumbColor={THEME_WHITE}
            ios_backgroundColor={THEME_LIGHTGRAY}
            onValueChange={toggleValue}
            value={productData.isActive ? true : false}
          />
        </View>
      </View>
    </Swipeable>
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
  },
  swipedRow: {
    width: 100,
  },
  deleteButton: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME_WARNING,
  },
  deleteButtonText: {
    fontSize: 14,
    color: THEME_WHITE,
    fontWeight: 'bold',
  },
});

export default React.memo(ProdListItem);
