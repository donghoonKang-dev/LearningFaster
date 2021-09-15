import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, Switch } from 'react-native';
import Swipeout from 'react-native-swipeout';

const THEME_PURPLE = '#6A0DAD';
const THEME_LIGHTPURPLE = '#AC81C9';
const THEME_WHITE = '#FFFFFF';
const THEME_LIGHTGRAY = '#E0E0E0';
const THEME_GRAY = '#808080';

const ProductListItem = ({ imgSrc, name, uploadDate, price }) => {
  const [switchEnabled, setSwitchEnabled] = useState(false);

  const toggleSwitch = () => setSwitchEnabled(previousState => !previousState);

  const swipeoutButtons = [{
      text: '삭제',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => { alert('삭제되었습니다.'); }
    }];

  return (
    <Swipeout right={swipeoutButtons} buttonWidth={100}>
      <View style={styles.listItemContainer}>
        <TouchableOpacity style={styles.productInfoContainer}>
          <Image style={styles.productImage} source={imgSrc}/>
          <View style={styles.textContainer}>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productInfo}>{uploadDate}</Text>
            <Text style={styles.productInfo}>{price+'원'}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: THEME_LIGHTGRAY, true: THEME_LIGHTPURPLE }}
            thumbColor={switchEnabled ? THEME_PURPLE : THEME_WHITE}
            ios_backgroundColor={THEME_LIGHTGRAY}
            onValueChange={toggleSwitch}
            value={switchEnabled}
          />
        </View>
      </View>
    </Swipeout>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 0.5,
    borderColor: THEME_LIGHTGRAY,
    backgroundColor: THEME_WHITE,
  },
  productInfoContainer: {
    flexDirection: 'row',
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 5,
  },
  textContainer: {
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    marginBottom: 15,
  },
  productInfo: {
    fontSize: 14,
    color: THEME_GRAY,
  },
  switchContainer: {
    alignItems: 'center',
  }
});

export default React.memo(ProductListItem);
