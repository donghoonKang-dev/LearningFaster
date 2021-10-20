import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, Dimensions, Text } from 'react-native';
import SignupButton from '../../components/Button/SignupButton';
import SignupInput from '../../components/Input/SignupInput';
import { useChangeSignup, useSignupState } from '../../hooks/SignUpProvider';
import { THEME_WHITE } from '../../styles/color';

const windowHeight = Dimensions.get('window').height;

function SignUp3({ navigation }) {
  const state = useSignupState();
  const onChange = useChangeSignup();

  const onClickNext = () => {
    if (state.tel.indexOf('-') === -1) {
      alert('- 기호를 포함한 연락처를 입력해주세요.');
      return -1;
    }
    navigation.navigate('SignUp4');
  }

  return (
    <View style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.pageTitle}>담당자 정보를 입력해주세요.</Text>
          <SignupInput
            desc="성함을 알려주세요."
            keyboardType="default"
            placeholder="예시 : 홍길동"
            text={state.manager}
            setText={(text) => onChange('manager', text)}
            isSecure={false}
          />
          <SignupInput
            desc="연락처를 알려주세요."
            keyboardType="default"
            placeholder="예시 : 010-1234-5678"
            text={state.tel}
            setText={(text) => onChange('tel', text)}
            isSecure={false}
          />
          {state.manager !== '' && state.tel !== ''
            ?
            <SignupButton
              text="다음"
              onPress={onClickNext}
              active={true}
              number={3}
            />
            :
            <SignupButton
              text="다음"
              onPress={() => { }}
              active={false}
              number={3}
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
    height: windowHeight,
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
  },
});

export default SignUp3;