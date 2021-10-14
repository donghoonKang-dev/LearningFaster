import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { THEME_PURPLE, THEME_WHITE } from '../../styles/color';

const STATUSBAR_HEIGHT = getStatusBarHeight();

function PMHeader({ name, iconClick }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.brandName}>{name}</Text>
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
    paddingTop: STATUSBAR_HEIGHT,
    height: 50 + STATUSBAR_HEIGHT,
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
    color: THEME_WHITE,
    fontSize: 20,
    fontWeight: "600",
  },
});

export default PMHeader;