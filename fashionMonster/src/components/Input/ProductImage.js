import React, { useState } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView } from 'react-native';
import imagePicker from '../../utils/imagePicker';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { THEME_PURPLE, THEME_LIGHTGRAY, THEME_GRAY } from '../../styles/color';

function ProductImage() {
  const [images, setImages] = useState([]);

  const deleteImage = (id) => {
    setImages(images.filter(image => image.id !== id))
  };

  const renderImage = (assets, index) => {
    return (
      <View>
        <Image
          source={{ uri: assets.uri }}
          style={[styles.loadedImage, index === 0 ? styles.representImage : null]}
        />
        <TouchableOpacity
          style={{ position: 'absolute', top: 0, right: 0 }}
          onPressIn={() => {deleteImage(assets.id)}}
        >
          <View style={styles.deleteImageButton}>
            <FeatherIcon name="x" size={15} color={THEME_GRAY} />
          </View>
        </TouchableOpacity> 
      </View>
    );
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>상품 이미지</Text>
      <Text style={styles.imageHeaderDesc}>
        첫 번째 사진이 대표 이미지로 사용됩니다.
      </Text>
      <ScrollView style={{ flexDirection: 'row' }} horizontal={true}>
        <View style={styles.imageRegBox}>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={()=>{ imagePicker(images, setImages) }}
          >
            <MCIcon name="camera" size={26} color={THEME_GRAY} />
            <Text style={{ marginTop: 6, fontSize: 12, color: THEME_GRAY }}>
              사진 등록
            </Text>
          </TouchableOpacity>
        </View>
        {images.map((assets, index) => renderImage(assets, index))}
      </ScrollView>
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
  loadedImage: {
    width: 100,
    height: 100,
    marginLeft: 20,
    position: 'relative',
    borderRadius: 8,
  },
  representImage: {
    borderColor: THEME_PURPLE,
    borderWidth: 3,
  },
  deleteImageButton: {
    backgroundColor: THEME_LIGHTGRAY,
    borderColor: THEME_GRAY,
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default ProductImage;