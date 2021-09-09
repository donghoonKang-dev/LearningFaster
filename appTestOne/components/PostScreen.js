import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const PostScreen = ({navigation, route}) => {
  useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);
  return (
    <View style={styles.postContainer}>
      <Text>{route.params?.post}</Text>
      <Button title="홈으로" onPress={() => navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostScreen;
