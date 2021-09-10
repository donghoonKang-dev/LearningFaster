import React from 'react';
import { Modal, TouchableWithoutFeedback, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const THEME_WHITE = '#FFFFFF';
const THEME_BLACK = '#000000';

const BottomPopup = ({ isOpen, onClose, onTouchOutside }) => {

  const renderOutsideTouchable = onTouch => {
    const view = <View style={{flex: 1, width: '100%'}} />;

    if(!onTouch) return view;

    return (
      <TouchableWithoutFeedback onPress={onTouch} style={{flex: 1, width: '100%'}}>
        {view}
      </TouchableWithoutFeedback>
    );
  }

  return (
    <Modal
      transparent={true}
      animationType='fade'
      visible={isOpen}
      onRequestClose={onClose}
    >
      <View style={styles.translucentArea}>
        {renderOutsideTouchable(onTouchOutside)}
      </View>
      <View style={styles.logoutPopup}>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.logoutText}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  translucentArea: {
    flex: 1,
    backgroundColor: THEME_BLACK,
    opacity: 0.2,
  },
  logoutPopup: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: THEME_WHITE,
  },
  logoutText: {
    marginBottom: 32,
    color: THEME_BLACK,
    fontSize: 20,
    fontWeight: '300',
  }
})

export default BottomPopup;
