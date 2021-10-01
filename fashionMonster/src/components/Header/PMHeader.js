import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { THEME_PURPLE, THEME_WHITE } from '../../styles/color';

function PMHeader({ iconClick }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.brandName}>테스트</Text>
        <Text style={styles.brandName}>/</Text>
        <Text style={styles.brandName}>test</Text>
      </View>
      <View>
        <TouchableOpacity onPress={iconClick}>
          <FeatherIcon name="more-horizontal" size={30} color={THEME_WHITE} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: THEME_PURPLE,
  },
  headerTextContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandName: {
    marginRight: 10,
    color: THEME_WHITE,
    fontSize: 20,
    fontWeight: "600",
  },
});

export default PMHeader;