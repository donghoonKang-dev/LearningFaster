import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { THEME_WHITE } from "../../styles/color";

function Loading() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://img.zcool.cn/community/0113fc5af2b0eaa801216045f77c6f.gif" }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME_WHITE,
  }
});

export default Loading;