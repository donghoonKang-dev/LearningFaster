import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const THEME_ORANGE = '#FFAE00';
const THEME_LIGHTGRAY = '#EFEFEF';
const THEME_GRAY = '#7D7D7D';

const ProductImage = () => {
  return (
    <View style={styles.itemContainer}>
      <View>
        <View style={styles.imageHeaderTop}>
          <Text style={styles.itemTitle}>상품 이미지</Text>
          <TouchableOpacity>
            <MCIcon name="lightbulb-on" size={20} color={THEME_ORANGE} />
          </TouchableOpacity>
        </View>
        <Text style={styles.imageHeaderDesc}>첫 번째 사진이 대표 이미지로 사용됩니다.</Text>
      </View>
      <View style={styles.imageRegBox}>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <MCIcon name="camera" size={26} color={THEME_GRAY} />
          <Text style={{ fontSize: 12, color: THEME_GRAY, marginTop: 6 }}>사진 등록</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 36,
  },
  imageHeaderTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  imageHeaderDesc: {
    marginTop: 6,
    marginBottom: 26,
    fontSize: 14,
  },
  imageRegBox: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME_LIGHTGRAY,
    borderRadius: 8,
  },
});

export default ProductImage;