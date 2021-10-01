import React, { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import LoginButton from '../components/Button/LoginButton';
import LoginInput from '../components/Input/LoginInput';
import { THEME_BLACK, THEME_PURPLE, THEME_WHITE } from '../styles/color';

const windowWidth = Dimensions.get('window').width;

function Login({ navigation }) {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const onPressLogin = () => navigation.navigate('Main', { name: 'Main' });
  const cannotLogin = () => alert('아이디, 비밀번호를 확인하세요.');

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.imgBg}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <SafeAreaView style={styles.blackBg}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Image
              style={styles.logo}
              source={require('../assets/images/Logo.png')}
            />
            <View style={styles.purpleBar}></View>
            <Text style={styles.titleText}>No.1 글로벌 B2B 패션 플랫폼</Text>
          </View>
          <View style={styles.inputContainer}>
            <LoginInput
              iconName="account-outline"
              placeholder="아이디를 입력해주세요."
              keyboardType="default"
              onChangeText={setUserId}
              value={userId}
            />
            <LoginInput
              iconName="lock-outline"
              placeholder="비밀번호를 입력해주세요."
              keyboardType="default"
              onChangeText={setUserPw}
              value={userPw}
            />
          </View>
          <LoginButton
            text="로그인"
            onPress={
              userId !== '' && userPw !== ''
                ? onPressLogin
                : cannotLogin
            }
          />
          <View style={styles.textButtonContainer}>
            <TouchableOpacity>
              <Text style={styles.textButtonText}>회원가입</Text>
            </TouchableOpacity>
            <View style={styles.borderBetween} />
            <TouchableOpacity>
              <Text style={styles.textButtonText}>비밀번호찾기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    width: '100%',
    height: '100%',
  },
  blackBg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: THEME_BLACK,
    opacity: 0.84,
  },
  container: {
    width: windowWidth * 0.75,
    height: '100%',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'flex-start',
    marginBottom: 95,
  },
  logo: {
    width: 238,
    height: 53,
    marginTop: 154,
    marginBottom: 22,
  },
  purpleBar: {
    width: 22,
    marginBottom: 15,
    borderBottomWidth: 5,
    borderBottomColor: THEME_PURPLE,
  },
  titleText: {
    fontSize: 16,
    color: THEME_WHITE,
  },
  inputContainer: {
    marginBottom: 25,
  },
  textButtonContainer: {
    width: '100%',
    marginTop: 'auto',
    paddingBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textButtonText: {
    marginHorizontal: 40,
    fontSize: 14,
    color: THEME_WHITE,
    fontWeight: '600',
  },
  borderBetween: {
    height: 22,
    borderRightColor: THEME_WHITE,
    borderRightWidth: 3,
  }
});

export default Login;
