import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { THEME_LIGHTPURPLE, THEME_RED, THEME_WHITE } from '../../styles/color';

function StateBadge({ state }) {
  return (
    <>
      {state === 1 ?
        <View style={[styles.container, { backgroundColor: THEME_LIGHTPURPLE }]}>
          <Text style={styles.text}>등록요청중</Text>
        </View>
        : state === 2 ?
          <View style={[styles.container, { backgroundColor: THEME_RED }]}>
            <Text style={styles.text}>수정요청중</Text>
          </View> : null
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  text: {
    fontWeight: '400',
    fontSize: 8,
    color: THEME_WHITE,
  }
});

export default StateBadge;
