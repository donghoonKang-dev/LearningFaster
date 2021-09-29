import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import DetailInputs from './DetailInputs';
import cateNameExtractor from '../../utils/cateNameExtractor';
import { THEME_PURPLE, THEME_WHITE, THEME_LIGHTGRAY, THEME_GRAY } from '../../styles/color';

function ProductActualSize({
  selectedSize,
  setSelectedSize,
  category,
  sizes,
  setSizes }) {
  const [selectedCategory, setSelectedCategory] = useState(cateNameExtractor(category));

  useEffect(() => {
    setSelectedCategory(cateNameExtractor(category))
  }, [category]);

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>실측 사이즈</Text>
      <Text style={styles.itemDesc}>상품 사이즈별 실측 사이즈를 입력해주세요.</Text>
      <View style={styles.realSizeButtonContainer}>
        {sizes.findIndex(i => i.value === 'FREE') !== -1
          ? (
            <TouchableWithoutFeedback onPress={() => setSelectedSize('FREE')}>
              <View
                style={[
                  styles.realSizeButtonBox,
                  selectedSize === 'FREE' && { backgroundColor: THEME_PURPLE }
                ]}
              >
                <Text
                  style={[
                    styles.realSizeText,
                    selectedSize === 'FREE' && { color: THEME_WHITE }
                  ]}
                >
                  FREE
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ) :
          sizes
            .sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0))
            .map((size) => (
              <TouchableWithoutFeedback key={size.id} onPress={() => setSelectedSize(size.value)}>
                <View
                  style={[
                    styles.realSizeButtonBox,
                    size.value === selectedSize && { backgroundColor: THEME_PURPLE }
                  ]}
                >
                  <Text
                    style={[
                      styles.realSizeText,
                      size.value === selectedSize && { color: THEME_WHITE }
                    ]}
                  >
                    {size.value}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))
        }
      </View>
      {selectedSize && sizes.length !== 0 &&
        <DetailInputs
          selectedCategory={selectedCategory}
          selectedSize={selectedSize}
          sizes={sizes}
          setSizes={setSizes}
        />
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
  realSizeButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  realSizeButtonBox: {
    width: 46,
    height: 28,
    marginRight: 14,
    backgroundColor: THEME_LIGHTGRAY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  realSizeText: {
    fontSize: 14,
    color: THEME_GRAY,
    fontWeight: '600',
  },
  inputContainer: {
    width: '100%',
    height: 40,
    marginTop: 6,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: THEME_LIGHTGRAY,
  },
});

export default ProductActualSize;
