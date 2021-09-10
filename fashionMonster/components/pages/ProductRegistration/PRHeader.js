import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PopupModal from '../../common/PopupModal';

const THEME_PURPLE = '#6A0DAD';
const THEME_WHITE = '#FFFFFF';
const THEME_GRAY = '#808080';
const THEME_BLACK = '#000000';

const PRHeader = () => {
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  
  const openResetModal = () => {
    setIsResetModalOpen(true);
  };
  const closeResetModal = () => {
    setIsResetModalOpen(false);
  };
  const openSaveModal = () => {
    setIsSaveModalOpen(true);
  };
  const closeSaveModal = () => {
    setIsSaveModalOpen(false);
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.textTitle}>상품 등록</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.resetButtonContainer}
          onPress={openResetModal}
        >
          <Text style={styles.resetButtonText}>초기화</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.saveButtonContainer}
          onPress={openSaveModal}
        >
          <Text style={styles.saveButtonText}>저장</Text>
        </TouchableOpacity>
      </View>
      {
        isResetModalOpen && 
          <PopupModal
            isModalVisible={isResetModalOpen} 
            onClose={closeResetModal} 
            title="경고"
            desc="입력된 모든 정보가 초기화 됩니다."
            onTouchOutside={closeResetModal}
          />
      }
      {
        isSaveModalOpen &&
          <PopupModal
            isModalVisible={isSaveModalOpen} 
            onClose={closeSaveModal}
            title="상품 등록"
            desc="등록하시겠습니까?"
            onTouchOutside={closeSaveModal}
          />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: THEME_WHITE,
    borderBottomWidth: 0.2,
    borderBottomColor: THEME_GRAY,
  },
  textTitle: {
    color: THEME_BLACK,
    fontSize: 20,
    fontWeight: "600",
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resetButtonContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: THEME_WHITE,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: THEME_PURPLE,
  },
  saveButtonContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: THEME_PURPLE,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: THEME_PURPLE,
  },
  resetButtonText: {
    color: THEME_PURPLE,
    fontSize: 16,
    fontWeight: '600',
  },
  saveButtonText: {
    color: THEME_WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PRHeader;