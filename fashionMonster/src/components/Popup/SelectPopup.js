import React from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  TouchableOpacity, 
  ScrollView} from 'react-native';
import { THEME_WHITE, THEME_BLACK } from '../../styles/color';
import { mainCategory, top, outer, bottom, bag, shoes, acc } from '../../assets/data/productCategory';

function SelectPopup({ 
  isOpen,
  onTouchOutside,
  main,
  sub,
  subOpen,
  mainSelect,
  subSelect }) {

  const renderOutsideTouchable = onTouch => {
    const view = <View style={{flex: 1, width: '100%'}} />;
    if(!onTouch) return view;
    return (
      <TouchableWithoutFeedback onPress={onTouch} style={{flex: 1, width: '100%'}}>
        {view}
      </TouchableWithoutFeedback>
    );
  }

  const renderMainCategory = (item) => {
    return (
      <TouchableOpacity
        key={item.key}
        onPress={() => {mainSelect(item.label)}}
      >
        <Text style={styles.listText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const renderSubCategory = (item) => {
    return (
      <TouchableOpacity
        key={item.key}
        onPress={() => {subSelect(item.label)}}
      >
        <Text style={styles.listText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      transparent={true}
      animationType='fade'
      visible={isOpen}
    >
      <View style={styles.translucentArea}>
        {renderOutsideTouchable(onTouchOutside)}
      </View>
      <ScrollView style={styles.selectPopup}>
        {!main && mainCategory.map((item) => renderMainCategory(item))}
        {main && (() => {
          switch (main) {
            case '여성상의':
            case '남성상의':
              top.map((item) => renderSubCategory(item));
              break;
            case '여성 아우터':
            case '남성 아우터':
              outer.map((item) => renderSubCategory(item));
              break;
            case '여성 하의':
            case '남성 하의':
              bottom.map((item) => renderSubCategory(item));
              break;
            case '원피스':
              subSelect('원피스');
              break;
            case '스커트':
              subSelect('스커트');
              break;
            case '여성가방':
            case '남성가방':
              bag.map((item) => renderSubCategory(item));
              break;
            case '여성신발':
            case '남성신발':
              shoes.map((item) => renderSubCategory(item));
              break;
            case '여성 악세사리':
            case '남성 악세사리':
              acc.map((item) => renderSubCategory(item));
              break;
            default:
              console.log('default');
          }
        })()}
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  translucentArea: {
    flex: 1,
    backgroundColor: THEME_BLACK,
    opacity: 0.2,
  },
  selectPopup: {
    width: '100%',
    height: 240,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: THEME_WHITE,
  },
  listText: {
    marginBottom: 32,
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: '300',
  },
});

export default SelectPopup;
