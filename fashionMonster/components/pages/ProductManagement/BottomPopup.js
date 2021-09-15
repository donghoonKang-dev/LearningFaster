import React, { useState, useEffect } from 'react';
import { 
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  TouchableOpacity } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const THEME_PURPLE = '#6A0DAD';
const THEME_WHITE = '#FFFFFF';
const THEME_GRAY = '#808080';
const THEME_BLACK = '#000000';

const BottomPopup = ({ 
  name, 
  sortBy, 
  isOpen,
  onClose,
  sortByDate,
  sortByPriceAsc,
  sortByPriceDsc,
  onTouchOutside }) => {
  const [sortByDateColor, setSortByDateColor] = useState(THEME_GRAY);
  const [sortByPriceAscColor, setSortByPriceAscColor] = useState(THEME_GRAY);
  const [sortByPriceDscColor, setSortByPriceDscColor] = useState(THEME_GRAY);

  useEffect(() => {
    if (sortBy === 'sortByDate') {
      setSortByDateColor(THEME_PURPLE);
      setSortByPriceAscColor(THEME_GRAY);
      setSortByPriceDscColor(THEME_GRAY);
    } else if (sortBy === 'sortByPriceAsc') {
      setSortByPriceAscColor(THEME_PURPLE);
      setSortByDateColor(THEME_GRAY);
      setSortByPriceDscColor(THEME_GRAY);
    } else {
      setSortByPriceDscColor(THEME_PURPLE);
      setSortByPriceAscColor(THEME_GRAY);
      setSortByDateColor(THEME_GRAY);
    }
  }, [sortBy]);

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
            <TouchableOpacity style={styles.selectContainer} onPress={sortByDate}>
              <MCIcon name="new-box" size={20} color={sortByDateColor} />
              <Text style={[styles.dateFilterText, { color: sortByDateColor }]}>최신등록순</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectContainer} onPress={sortByPriceAsc}>
              <MCIcon name="sort-numeric-ascending" size={20} color={sortByPriceAscColor} />
              <Text style={[styles.nameFilterText, { color: sortByPriceAscColor }]}>가격 낮은순</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectContainer} onPress={sortByPriceDsc}>
              <MCIcon name="sort-numeric-descending" size={20} color={sortByPriceDscColor} />
              <Text style={[styles.nameFilterText, { color: sortByPriceDscColor }]}>가격 높은순</Text>
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
