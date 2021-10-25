import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import MIcon from 'react-native-vector-icons/MaterialIcons'
import PopupModal from '../Popup/PopupModal';
import { THEME_PURPLE, THEME_WHITE, THEME_GRAY, THEME_BLACK } from '../../styles/color';

const STATUSBAR_HEIGHT = getStatusBarHeight();

function PRHeader({ resetAllState, goToBack, goToEdit, onSubmit, headerName, title, onClickRemove }) {
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  const openResetModal = () => setIsResetModalOpen(true);
  const closeResetModal = () => setIsResetModalOpen(false);
  const openSaveModal = () => setIsSaveModalOpen(true);
  const closeSaveModal = () => setIsSaveModalOpen(false);

  return (
    <View style={styles.headerContainer}>
      {headerName === '상품 디테일'
        ?
        <View style={{ flexDirection: 'row', alignItems: 'center', maxWidth: 160 }}>
          <TouchableWithoutFeedback onPress={goToBack}>
            <MIcon name="arrow-back-ios" size={20} color={THEME_GRAY} />
          </TouchableWithoutFeedback>
          <Text
            style={styles.textTitle}
            ellipsizeMode='tail'
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>
        :
        <Text style={styles.textTitle}>{headerName}</Text>
      }
      <View style={styles.buttonContainer}>
        {headerName === '상품 디테일' &&
          <>
            <TouchableOpacity
              style={styles.resetButtonContainer}
              onPress={onClickRemove}
            >
              <Text style={styles.resetButtonText}>삭제</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.saveButtonContainer}
              onPress={goToEdit}
            >
              <Text style={styles.saveButtonText}>수정</Text>
            </TouchableOpacity>
          </>
        }
        {headerName === '상품 수정' &&
          <>
            <TouchableOpacity
              style={styles.resetButtonContainer}
              onPress={goToBack}
            >
              <Text style={styles.resetButtonText}>뒤로 가기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.saveButtonContainer}
              onPress={openSaveModal}
            >
              <Text style={styles.saveButtonText}>저장</Text>
            </TouchableOpacity>
          </>
        }
        {headerName === '상품 등록' &&
          <>
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
          </>
        }
      </View>
      {
        isResetModalOpen &&
        <PopupModal
          label="reset"
          onOkClicked={resetAllState}
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
          label="save"
          onOkClicked={onSubmit}
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
    paddingTop: STATUSBAR_HEIGHT,
    height: 50 + STATUSBAR_HEIGHT,
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