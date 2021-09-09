import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <Text>이것은 홈입니다.</Text>
      <Button
        title="메인페이지로 이동하기"
        onPress={() => navigation.navigate('Main', {name: 'choco'})}
      />
      <Button
        title="의견제출 페이지로 이동하기"
        onPress={() => navigation.navigate('Hook')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
