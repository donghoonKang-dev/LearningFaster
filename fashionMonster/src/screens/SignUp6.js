import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, Dimensions, Text, TouchableWithoutFeedback } from 'react-native';
import SignupInput from '../components/Input/SignupInput';
import SignupButton from '../components/Button/SignupButton';
import { THEME_PURPLE, THEME_WHITE } from '../styles/color';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function SignUp6({ navigation }) {
  const [recommender, setRecommender] = useState('');

  const onClickNext = () => {
    navigation.navigate('SignUp7', { name: 'SignUp7' });
  }

  return (
    <View style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.pageTitle}>앗,</Text>
            <Text style={styles.pageTitle}>혹시 패스터를</Text>
            <Text style={styles.pageTitle}>추천해주신분이 계신가요?</Text>
          </View>
          <SignupInput
            desc="추천한 브랜드와 상가 이름을 적어주세요!"
            keyboardType="default"
            placeholder="예시 : 룰루레몬 / 킹스스퀘어"
            text={recommender}
            setText={setRecommender}
            isSecure={false}
          />
          <View style={styles.descContainer}>
            <Text style={styles.desc}>패스터를 다른 브랜드에 추천해 주시면</Text>
            <Text style={styles.desc}>네이버 쇼핑라이브 기획전 참여와</Text>
            <Text style={styles.desc}>봉투, 테이프 등 소모품이 무료 증정됩니다.</Text>
            <Text style={styles.descBold}>많은 소개 부탁드립니다😄</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback onPress={onClickNext}>
              <View style={styles.whiteBtnBox}>
                <Text style={styles.whiteBtnText}>추천 없음</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => alert('준비중인 서비스입니다.')}>
              <View style={styles.purpleBtnBox}>
                <Text style={styles.purpleBtnText}>추천 있음</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  safeArea: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: THEME_WHITE,
  },
  container: {
    width: '85%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleContainer: {
    marginTop: windowHeight * 0.075,
    marginBottom: 36,
  },
  pageTitle: {
    marginBottom: 8,
    fontSize: 24,
    fontWeight: '700',
  },
  descContainer: {
    marginTop: 24,
  },
  desc: {
    fontSize: 16,
    marginBottom: 6,
  },
  descBold: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '700',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 'auto',
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  whiteBtnBox: {
    width: windowWidth * 0.38,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME_WHITE,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: THEME_PURPLE,
  },
  purpleBtnBox: {
    width: windowWidth * 0.38,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME_PURPLE,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: THEME_WHITE,
  },
  whiteBtnText: {
    color: THEME_PURPLE,
    fontSize: 16,
    fontWeight: '700',
  },
  purpleBtnText: {
    color: THEME_WHITE,
    fontSize: 16,
    fontWeight: '700',
  }
});

export default SignUp6;