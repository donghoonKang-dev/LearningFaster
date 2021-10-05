import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, Dimensions, Text } from 'react-native';
import SignupButton from '../components/Button/SignupButton';
import SignupInput from '../components/Input/SignupInput';
import { THEME_WHITE } from '../styles/color';

const windowHeight = Dimensions.get('window').height;

function SignUp1({ navigation }) {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const onClickNext = (userId, userPw, pwCheck) => {
    if (userId.indexOf('@') === -1) {
      alert('이메일 형식이 올바르지 않습니다.');
      return -1;
    }
    if (userPw.length < 8) {
      alert('8자리 이상의 비밀번호를 입력해주세요.');
      return -1;
    } else if (userPw.search(/\s/) !== -1) {
      alert('비밀번호는 공백 없이 입력해주세요.');
      return -1;
    } else if (userPw.search(/[0-9]/g) < 0 || userPw.search(/[a-z]/ig) < 0) {
      alert('비밀번호는 영문과 숫자를 조합해주세요.');
      return -1;
    }
    if (userPw !== pwCheck) {
      alert('비밀번호 확인이 일치하지 않습니다.');
      return -1;
    }
    navigation.navigate('SignUp2', { name: 'SignUp2' });
    return 0
  }

  return (
    <View style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.pageTitle}>아이디/비밀번호를 입력해주세요.</Text>
          <SignupInput
            desc="아이디(이메일)"
            keyboardType="email-address"
            placeholder="예시: faster@naver.com"
            text={userId}
            setText={setUserId}
            isSecure={false}
          />
          <SignupInput
            desc="비밀번호"
            keyboardType="default"
            placeholder="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
            text={userPw}
            setText={setUserPw}
            isSecure={true}
          />
          <SignupInput
            desc="비밀번호 확인"
            keyboardType="default"
            placeholder="비밀번호 확인"
            text={pwCheck}
            setText={setPwCheck}
            isSecure={true}
          />
          {userId !== '' && userPw !== '' && pwCheck !== ''
            ?
            <SignupButton
              text="다음"
              onPress={() => onClickNext(userId, userPw, pwCheck)}
              active={true}
              number={1}
            />
            :
            <SignupButton
              text="다음"
              onPress={() => { }}
              active={false}
              number={1}
            />
          }
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
  pageTitle: {
    marginTop: windowHeight * 0.075,
    marginBottom: 40,
    fontSize: 24,
    fontWeight: '700',
  }
});

export default SignUp1;