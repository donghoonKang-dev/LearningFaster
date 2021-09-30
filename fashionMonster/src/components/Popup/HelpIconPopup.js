import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Modal
} from 'react-native';
import { THEME_PURPLE, THEME_WHITE } from '../../styles/color';

function HelpIconPopup({ iconPositionX, iconPositionY, isModalOpen, setIsModalOpen }) {
  return (
    <Modal
      transparent={true}
      animationType='fade'
      visible={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
    >
      <View style={styles.backgroundDimmer}>
        <View style={[styles.helpContainer, { left: iconPositionX, top: iconPositionY }]}>
          <View style={styles.helpTextContainer}>
            <Text style={styles.helpText}>대표이미지: </Text>
            <Text style={[styles.helpText, { fontWeight: '600' }]}>상품목록/ 썸네일 등</Text>
          </View>
          <View style={styles.helpTextContainer}>
            <Text style={styles.helpText}>일반이미지: </Text>
            <Text style={[styles.helpText, { fontWeight: '600' }]}>상품 상세페이지 등</Text>
          </View>
          <TouchableWithoutFeedback onPress={() => setIsModalOpen(false)}>
            <Text style={styles.closeText}>닫기</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backgroundDimmer: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  helpContainer: {
    position: 'absolute',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: THEME_WHITE,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  helpTextContainer: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  helpText: {
    fontSize: 16,
  },
  closeText: {
    marginTop: 5,
    fontSize: 16,
    color: THEME_PURPLE,
  },
});

export default HelpIconPopup;