import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { THEME_WHITE } from '../../styles/color';

function EmptyView() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/emptyView.png')}
        style={{ width: 240, height: 240 }}
      />
      <Text style={styles.text}>등록하신 상품이 없네요.</Text>
      <Text style={styles.text}>상품을 등록해주세요!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME_WHITE,
  },
  text: {
    marginTop: 4,
    fontSize: 20,
    fontWeight: '500',
  },
})

export default EmptyView;