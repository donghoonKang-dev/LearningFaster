import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SizeButton from '../Button/SizeButton';
import ManualSizeInput from '../Input/ManualSizeInput';
import { THEME_LIGHTGRAY, THEME_GRAY } from '../../styles/color';
import { clothesSize, shoesSize } from '../../assets/data/sizes';

function ProductSize({ sizes, setSizes, cateName }) {
  const onChangeSize = (sizeData) => {
    const isFreeSize = sizeData.value === 'FREE';
    const isExist = sizes.findIndex(size => size.id === sizeData.id) !== -1;
    if (isFreeSize) {
      isExist
        ? setSizes([])
        : setSizes([sizeData])
    } else {
      setSizes(prev => prev.filter(size => size.value !== 'FREE'))
      isExist
        ? setSizes(prev => prev.filter(size => size.id !== sizeData.id))
        : setSizes(prev => [...prev, sizeData]);
    }
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>상품 사이즈</Text>
      {cateName === '' &&
        <Text style={styles.itemDesc}>카테고리를 선택하면 사이즈 선택이 가능합니다.</Text>
      }
      {cateName === 'clothes' &&
        <>
          <Text style={styles.itemDesc}>판매중인 상품 사이즈를 중복으로 선택 가능합니다.</Text>
          <View style={styles.buttonContainer}>
            {clothesSize.map((size) =>
              <SizeButton
                key={size.id}
                sizeData={size}
                onChangeSize={onChangeSize}
                sizes={sizes}
              />
            )}
          </View>
        </>
      }
      {cateName === 'shoes' &&
        <>
          <Text style={styles.itemDesc}>판매중인 상품 사이즈를 중복으로 선택 가능합니다.</Text>
          <View style={styles.buttonContainer}>
            {shoesSize.map((size) =>
              <SizeButton
                key={size.id}
                sizeData={size}
                onChangeSize={onChangeSize}
                sizes={sizes}
              />
            )}
          </View>
        </>
      }
      {cateName !== '' && cateName === 'others' &&
        <>
          <Text style={styles.itemDesc}>판매중인 상품 사이즈를 추가해주세요.</Text>
          <ManualSizeInput sizes={sizes} setSizes={setSizes} cateName={cateName} />
        </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 36,
  },
  itemTitle: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  itemDesc: {
    marginVertical: 6,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  sizeBox: {
    width: '30%',
    height: 40,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: THEME_LIGHTGRAY,
  },
  sizeText: {
    fontSize: 14,
    color: THEME_GRAY,
  },
  sizeFreeBox: {
    width: '100%',
    height: 40,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: THEME_LIGHTGRAY,
  },
});

export default ProductSize;
