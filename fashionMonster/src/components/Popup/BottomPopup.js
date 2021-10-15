import React, { useState, useEffect } from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { THEME_PURPLE, THEME_WHITE, THEME_GRAY, THEME_BLACK } from '../../styles/color';

function BottomPopup({
  name,
  selectedFilter,
  isOpen,
  onClose,
  sortBy,
  onTouchOutside }) {
  const [sortByCreatedColor, setSortByCreatedColor] = useState(THEME_GRAY);
  const [sortByNameColor, setSortByNameColor] = useState(THEME_GRAY);
  const [sortByPriceColor, setSortByPriceColor] = useState(THEME_GRAY);

  useEffect(() => {
    setSortByCreatedColor(selectedFilter === 'created' ? THEME_PURPLE : THEME_GRAY);
    setSortByNameColor(selectedFilter === 'name' ? THEME_PURPLE : THEME_GRAY);
    setSortByPriceColor(selectedFilter === 'price' ? THEME_PURPLE : THEME_GRAY);
  }, [sortBy]);

  const renderOutsideTouchable = (onTouch) => {
    const view = <View style={{ flex: 1, width: '100%' }} />;
    if (!onTouch) return view;
    return (
      <TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: '100%' }}>
        {view}
      </TouchableWithoutFeedback>
    );
  }

  return (
    <>
      {name === 'logOut' && (
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
      )}
      {name === 'filter' && (
        <Modal
          transparent={true}
          animationType='fade'
          visible={isOpen}
        >
          <View style={styles.translucentArea}>
            {renderOutsideTouchable(onTouchOutside)}
          </View>
          <View style={styles.logoutPopup}>
            <TouchableOpacity style={styles.selectContainer} onPress={() => sortBy('created')}>
              <MCIcon name="new-box" size={20} color={sortByCreatedColor} />
              <Text style={[styles.dateFilterText, { color: sortByCreatedColor }]}>최신 등록순</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectContainer} onPress={() => sortBy('name')}>
              <MCIcon name="sort-alphabetical-ascending" size={20} color={sortByNameColor} />
              <Text style={[styles.nameFilterText, { color: sortByNameColor }]}>이름순</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectContainer} onPress={() => sortBy('price')}>
              <MCIcon name="sort-numeric-ascending" size={20} color={sortByPriceColor} />
              <Text style={[styles.nameFilterText, { color: sortByPriceColor }]}>가격순</Text>
            </TouchableOpacity>
          </View>
        </Modal>)
      }
    </>
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
  },
  selectContainer: {
    flexDirection: 'row',
  },
  dateFilterText: {
    marginBottom: 32,
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: '300',
  },
  nameFilterText: {
    marginBottom: 32,
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: '300',
  },
});

export default BottomPopup;
