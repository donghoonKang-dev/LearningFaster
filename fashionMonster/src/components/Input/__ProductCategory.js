import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import EntIcon from 'react-native-vector-icons/Entypo';
import { THEME_LIGHTGRAY, THEME_GRAY } from '../../styles/color';
import SelectPopup from '../Popup/SelectPopup';

function ProductCategory() {
  const [mainOpen, setMainOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [main, setMain] = useState(null);
  const [sub, setSub] = useState(null);
  const [fullCategory, setFullCategory] = useState(null);

  const selectMainPopupOpen = () => setMainOpen(true);
  const selectMainPopupClose = () => setMainOpen(false);
  const selectSubPopupOpen = () => setSubOpen(true);
  const selectSubPopupClose = () => setSubOpen(false);

  const mainSelect = (label) => {
    setMain(label);
    selectMainPopupClose();
    selectSubPopupOpen();
  };
  const subSelect = (label) => {
    setSub(label);
    selectSubPopupClose();
  };

  useEffect(() => {
    setFullCategory(main + ' / ' + sub);
    if (!main && !sub) {
      setMain(null);
      setSub(null);
    }
    console.log(fullCategory);
  }, [main, sub, fullCategory]);

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>상품 카테고리</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={selectMainPopupOpen}>
          <Text style={styles.selectText}>카테고리를 선택해주세요.</Text>
        </TouchableOpacity>
        <EntIcon name="select-arrows" size={20} color={THEME_GRAY} />
      </View>
      {mainOpen &&
        <SelectPopup
          isOpen={mainOpen}
          onTouchOutside={selectMainPopupClose}
          main={main}
          mainSelect={mainSelect}
          sub={sub}
          subOpen={selectSubPopupOpen}
        />
      }
      {subOpen &&
        <SelectPopup
          isOpen={subOpen}
          onTouchOutside={selectSubPopupClose}
          main={main}
          sub={sub}
          subSelect={subSelect}
        />
      }
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
  inputContainer: {
    width: '100%',
    height: 40,
    marginTop: 6,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: THEME_LIGHTGRAY,
  },
  selectText: {
    color: THEME_GRAY,
    opacity: 0.4,
  },
});

export default ProductCategory;