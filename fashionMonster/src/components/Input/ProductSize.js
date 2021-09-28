import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SizeButton from '../Button/SizeButton';
import ManualSizeInput from './ManualSizeInput';
import { THEME_LIGHTGRAY, THEME_GRAY } from '../../styles/color';
import { clothesSize, shoesSize } from '../../assets/data/sizes';

function ProductSize({ sizes, onChangeSize, manualSizes, setManualSizes, category, selectSizeKindOf }) {
  const [kindOf, setKindOf] = useState(selectSizeKindOf(category));

  useEffect(() => {
    setKindOf(selectSizeKindOf(category))
  }, [category]);

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>상품 사이즈</Text>
      {category === '' &&
        <Text style={styles.itemDesc}>카테고리를 선택하면 사이즈 선택이 가능합니다.</Text>
      }
      {kindOf === 'clothes' &&
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
      {kindOf === 'shoes' &&
        <>
          <Text style={styles.itemDesc}>판매중인 상품 사이즈를 중복으로 선택 가능합니다.</Text>
          <View style={styles.buttonContainer}>
            {shoesSize.map((size) => <SizeButton key={size.id} sizeText={size.value} />)}
          </View>
        </>
      }
      {category !== '' && kindOf === 'others' &&
        <>
          <Text style={styles.itemDesc}>판매중인 상품 사이즈를 추가해주세요.</Text>
          <ManualSizeInput sizes={manualSizes} setSizes={setManualSizes} />
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
