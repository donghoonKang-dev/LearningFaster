import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

const MainScreen = ({navigation, route}) => {
  const {name} = route.params;

  const [isPressed, setIsPressed] = useState(false);

  const onClickIcon = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View style={styles.container}>
      {isPressed && (
        <Image
          source={require('../assets/appleLogo.jpg')}
          style={styles.logo}
        />
      )}
      <Text>{name}야~</Text>
      <Button title="Hallo" onPress={onClickIcon} />
      <Button
        title="Main으로 한번 더 이동"
        onPress={() => navigation.push('Main', {name: 'choco'})}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="홈으로 돌아가기" onPress={() => navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default MainScreen;
