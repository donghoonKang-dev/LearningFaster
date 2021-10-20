import React, { useCallback, useState, useEffect } from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Linking
} from 'react-native';
import LoginButton from '../components/Button/LoginButton';
import LoginInput from '../components/Input/LoginInput';
import { useAuth } from '../modules/auth/hook';
import { THEME_BLACK, THEME_PURPLE, THEME_WHITE } from '../styles/color';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Login({ navigation }) {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const {
    loginDispatch,
    login
  } = useAuth();

  const onLogin = () => {
    if (!userId.trim()) return alert('이메일을 입력해주세요');
    if (!userPw.trim()) return alert('비밀번호를 입력해주세요');
    loginDispatch({ email: userId, password: userPw });
  };
  const onPressSignUp = () => navigation.navigate('SignUp', { name: 'SignUp' });

  useEffect(() => {
    if (login.data) {
      return navigation.navigate('Main', { name: 'Main' })
    }
    if (login.error) {
      setUserPw('');
      alert(login.error.message);
    }
  }, [login]);

  const findPassword = useCallback(async () => {
    // https://github.com/shpongle2634/react-native-kakao-links
    // https://medium.com/@zeroweb.tech/react-native-%EC%95%B1%EC%97%90-%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%A7%81%ED%81%AC-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-d170d31b780b
    /*
    const kakaoURL = "kakaoplus://plusfriend/home/_fZnrK";
    const isSupported = await Linking.canOpenURL(kakaoURL);
    isSupported
      ? await Linking.openURL(kakaoURL)
      : console.log(kakaoURL)
    */
    alert('준비중인 서비스입니다. 개발팀에 문의해주세요.');
  });

  return (
    <ImageBackground
      source={require('../assets/images/loginBg.png')}
      style={styles.imgBg}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
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
              isSecure={false}
            />
            <LoginInput
              iconName="lock-outline"
              placeholder="비밀번호를 입력해주세요."
              keyboardType="default"
              onChangeText={setUserPw}
              value={userPw}
              isSecure={true}
            />
          </View>
          <LoginButton
            text="로그인"
            onPress={onLogin}
          />
          <View style={styles.textButtonContainer}>
            <TouchableOpacity onPress={onPressSignUp}>
              <Text style={styles.textButtonText}>회원가입</Text>
            </TouchableOpacity>
            <View style={styles.borderBetween} />
            <TouchableOpacity onPress={findPassword}>
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
    width: windowWidth,
    height: windowHeight,
  },
  blackBg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
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
    height: 54,
    marginTop: windowHeight * 0.15,
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
