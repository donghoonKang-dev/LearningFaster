import React from 'react';
import {
  StyleSheet,
  Modal,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { THEME_PURPLE, THEME_WHITE, THEME_GRAY } from '../../styles/color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;

function PopupModal({ label, onOkClicked, title, desc, isModalVisible, onClose }) {

  closeModal = (data) => {
    onClose();
    if (data === 'OK') {
      if (label === 'reset') {
        onOkClicked();
        alert('초기화 되었습니다.');
      } else {
        alert('요청 처리됨');
      }
    }
  };

  return (
    <Modal
      transparent={true}
      animationType='fade'
      visible={isModalVisible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }}>
        <TouchableOpacity
          disabled={true}
          style={styles.container}
        >
          <View style={styles.modal}>
            <View style={styles.textView}>
              {title && <Text style={styles.textHeader}>{title}</Text>}
              <Text style={styles.textDesc}>{desc}</Text>
            </View>
            <View style={styles.buttonsView}>
              <TouchableOpacity
                style={styles.buttonFrame}
                onPress={() => closeModal('Cancel')}
              >
                <Text style={styles.firstButton}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonFrame}
                onPress={() => closeModal('OK')}
              >
                <Text style={styles.secondButton}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: HEIGHT_MODAL,
    width: WIDTH - 80,
    paddingTop: 10,
    backgroundColor: THEME_WHITE,
    borderRadius: 10,
    opacity: 1,
  },
  textView: {
    flex: 1,
    alignItems: 'center',
  },
  textHeader: {
    margin: 8,
    fontSize: 20,
    fontWeight: '600'
  },
  textDesc: {
    margin: 8,
    fontSize: 16,
    fontWeight: '400',
  },
  buttonsView: {
    width: '100%',
    flexDirection: 'row',
  },
  buttonFrame: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  firstButton: {
    fontSize: 16,
    color: THEME_GRAY,
  },
  secondButton: {
    fontSize: 16,
    color: THEME_PURPLE,
  }
});

export default PopupModal;
