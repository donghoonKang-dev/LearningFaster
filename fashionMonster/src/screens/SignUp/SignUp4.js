import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, Dimensions, Text } from 'react-native';
import SignupButton from '../../components/Button/SignupButton';
import SignupInput from '../../components/Input/SignupInput';
import { useChangeSignup, useSignupState } from '../../hooks/SignUpProvider';
import { useAuth } from '../../modules/auth/hook';
import { THEME_WHITE } from '../../styles/color';

const windowHeight = Dimensions.get('window').height;

function SignUp4({ navigation }) {
  const state = useSignupState();
  const onChange = useChangeSignup();
  const { signupDispatch } = useAuth();

  const onSignUp = () => {
    signupDispatch(state);
    navigation.navigate('SignUp5');
  }

  return (
    <View style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.pageTitle}>정산 계좌정보를 입력해주세요.</Text>
          <SignupInput
            desc="은행명을 적어주세요."
            keyboardType="default"
            placeholder="예시 : 신한은행"
            text={state.bank}
            setText={(text) => onChange('bank', text)}
            isSecure={false}
          />
          <SignupInput
            desc="계좌번호를 적어주세요."
            keyboardType="default"
            placeholder="예시 : 1234-1234-12-12"
            text={state.accountNumber}
            setText={(text) => onChange('accountNumber', text)}
            isSecure={false}
          />
          <SignupInput
            desc="예금주명을 적어주세요."
            keyboardType="default"
            placeholder="예시 : 홍길동"
            text={state.accountName}
            setText={(text) => onChange('accountName', text)}
            isSecure={false}
          />
          {state.bank !== '' && state.accountNumber !== '' && state.accountName !== ''
            ?
            <SignupButton
              text="다음"
              onPress={onSignUp}
              active={true}
              number={4}
            />
            :
            <SignupButton
              text="다음"
              onPress={() => { }}
              active={false}
              number={4}
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

export default SignUp4;