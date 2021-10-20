import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import FocusAwareStatusBar from '../components/StatusBar/FocusAwareStatusBar';
import { THEME_PURPLE, THEME_WHITE } from '../styles/color';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Intro({ navigation }) {
  const onClick = () => navigation.navigate('Login', { name: 'Login' });

  return (
    <ImageBackground
      source={require('../assets/images/colorBackground.png')}
      style={styles.imgBg}
    >
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={THEME_PURPLE}
        translucent={true}
      />
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={[styles.title, { marginBottom: 6 }]}>한 번의 상품등록으로</Text>
          <Text style={styles.title}>전세계 도소매 셀러 만나기</Text>
        </View>
        <Image
          source={require('../assets/images/splash3.png')}
          style={styles.image}
        />
        <View style={styles.descContainer}>
          <Text style={[styles.desc, { marginBottom: 6 }]}>글로벌 판매부터 해외배송, 정산까지 다 맡기고</Text>
          <Text style={styles.desc}>편-히 상품만 등록해주세요.</Text>
        </View>
        <TouchableWithoutFeedback onPress={onClick}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>패스터 시작하기</Text>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    height: '70%',
    marginTop: '10%',
    marginBottom: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: THEME_WHITE,
  },
  image: {
    width: 224,
    height: 203,
    marginVertical: 30,
  },
  descContainer: {
    alignItems: 'center',
  },
  desc: {
    fontSize: 16,
    color: THEME_WHITE,
  },
  btnContainer: {
    width: 276,
    height: 51,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME_PURPLE,
    borderRadius: 6,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '700',
    color: THEME_WHITE,
  },
});

export default Intro;