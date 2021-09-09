import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';

const HookScreen = ({navigation, route}) => {
  const [text, setText] = useState('');

  const onButtonClick = () => {
    navigation.navigate({
      name: 'Post',
      params: {post: text},
      merge: true,
    });
  };

  return (
    <View style={styles.hookContainer}>
      <TextInput
        multiline
        placeholder="의견을 적어주세요!"
        style={styles.textInput}
        value={text}
        onChangeText={setText}
      />
      <Button title="보내기" onPress={onButtonClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  hookContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 300,
    height: 200,
    padding: 10,
    backgroundColor: '#ffffff',
  },
});

export default HookScreen;
