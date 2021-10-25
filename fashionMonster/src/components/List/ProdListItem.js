import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Alert,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Switch } from 'react-native-switch';
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
    navigation.navigate('ProductDetail', {
      selectedId: productData.id,
      selectedIsUpdated: productData.state === 2 ? true : false,
      selectedName: productData.name,
    });
  };

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

  const timeExtractor = (data) => {
    const date = dayjs(data);
    return date.year() + '년 ' + date.month() + '월 ' + date.date() + '일 ' + date.hour() + '시 ' + date.minute() + '분'
  }

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
            {productData.UpdatedProduct &&
              productData.UpdatedProduct.name !== productData.name
              ?
              <View style={styles.nameContainer}>
                <Text
                  style={styles.updatedName}
                  ellipsizeMode='tail'
                  numberOfLines={1}
                >
                  {productData.UpdatedProduct.name}
                </Text>
                <Text style={styles.originName}>{productData.name}</Text>
              </View>
              :
              <Text style={[styles.updatedName, { marginBottom: 20 }]}>
                {productData.name}
              </Text>
            }
            <Text style={styles.productInfo}>{timeExtractor(productData.createdAt)}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.productInfo}>{productData.price.toLocaleString() + ' 원'}</Text>
              <StateBadge state={productData.state} />
            </View>
          </View>
        </TouchableOpacity>
        <Switch
          value={productData.isActive ? true : false}
          onValueChange={toggleValue}
          activeText={'판매중'}
          activeTextStyle={{ fontSize: 12 }}
          inActiveText={'품절'}
          inactiveTextStyle={{ fontSize: 12 }}
          backgroundActive={THEME_LIGHTPURPLE}
          backgroundInactive={THEME_GRAY}
          containerStyle={{ marginRight: 12 }}
          changeValueImmediately={true}
          circleSize={30}
          barHeight={18}
          circleBorderWidth={1}
        />
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
  nameContainer: {
    maxWidth: 120,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  updatedName: {
    fontSize: 16,
  },
  originName: {
    marginLeft: 4,
    textDecorationLine: 'line-through',
    fontSize: 12,
    color: THEME_GRAY,
  },
  productInfo: {
    fontSize: 12,
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
