import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';
import HelpIconPopup from '../Popup/HelpIconPopup';
import imagePicker from '../../utils/imagePicker';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { THEME_PURPLE, THEME_LIGHTGRAY, THEME_GRAY } from '../../styles/color';

function ProductImage({ images, setImages, deleteImage }) {
  const iconRef = useRef();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [iconPositionX, setIconPositionX] = useState(0);
  const [iconPositionY, setIconPositionY] = useState(0);

  const doMeasure = () => {
    iconRef.current.measure((width, height, px, py, fx, fy) => {
      setIconPositionX(x => x + 30 + fx);
      setIconPositionY(fy);
    })
  }

  const renderImage = (image, index) => {
    return (
      <View key={image.filename}>
        <Image
          source={{ uri: `http://faster-seller.s3.ap-northeast-2.amazonaws.com/original/product/${image.filename}` }}
          style={[styles.loadedImage, index === 0 ? styles.representImage : null]}
        />
        <TouchableOpacity
          style={{ position: 'absolute', top: 0, right: 0 }}
          onPressIn={() => { deleteImage(image.filename) }}
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
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>상품 이미지</Text>
        <TouchableWithoutFeedback onPress={() => setIsModalOpen(!isModalOpen)}>
          <Image
            source={require('../../assets/images/questionIcon.png')}
            ref={iconRef}
            onLayout={() => doMeasure()}
          />
        </TouchableWithoutFeedback>
        <HelpIconPopup
          iconPositionX={iconPositionX}
          iconPositionY={iconPositionY}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </View>
      <Text style={styles.imageHeaderDesc}>
        첫 번째 사진이 대표 이미지로 사용됩니다.
      </Text>
      <ScrollView style={{ flexDirection: 'row' }} horizontal={true}>
        <View style={styles.imageRegBox}>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={() => { imagePicker(images, setImages, setUploading) }}
          >
            <MCIcon name="camera" size={26} color={THEME_GRAY} />
            <Text style={{ marginTop: 6, fontSize: 12, color: THEME_GRAY }}>
              사진 등록
            </Text>
          </TouchableOpacity>
        </View>
        {uploading && <ActivityIndicator size="small" style={{ marginHorizontal: 50 }} />}
        {images.map((image, index) => renderImage(image, index))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 36,
  },
  itemTitleContainer: {
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