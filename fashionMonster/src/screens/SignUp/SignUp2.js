import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, Dimensions, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import '@react-native-picker/picker';
import SignupButton from '../../components/Button/SignupButton';
import SignupInput from '../../components/Input/SignupInput';
import MIcon from 'react-native-vector-icons/MaterialIcons'
import { arcades } from '../../assets/data/arcades';
import { useChangeSignup, useSignupState } from '../../hooks/SignUpProvider';
import { THEME_WHITE, THEME_GRAY, THEME_LIGHTGRAY, THEME_BLACK } from '../../styles/color';

const windowHeight = Dimensions.get('window').height;

function SignUp2({ navigation }) {
  const state = useSignupState();
  const onChange = useChangeSignup();

  const selectArcade = (value) => {
    if (value !== null) onChange('StoreId', value)
  };

  const onClickNext = () => navigation.navigate('SignUp3');

  return (
    <View style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.pageTitle}>브랜드명을 입력해주세요.</Text>
          <SignupInput
            desc="브랜드명이 무엇인가요?"
            keyboardType="default"
            placeholder="예시 : 패스터 / FASTER"
            text={state.name}
            setText={(text) => onChange('name', text)}
            isSecure={false}
          />
          <View style={styles.selectContainer}>
            <Text style={styles.desc}>어떤 상가에 계신가요?</Text>
            <View style={styles.selectBox}>
              <RNPickerSelect
                placeholder={{ id: 0, label: '선택해주세요', value: 0 }}
                items={arcades}
                style={pickerSelectStyles}
                onValueChange={(value) => selectArcade(value)}
                value={state.StoreId}
                fixAndroidTouchableBug={true}
                textInputProps={{ underlineColorAndroid: 'transparent' }}
                useNativeAndroidPickerStyle={false}
              />
              <MIcon name="navigate-next" size={20} color={THEME_GRAY} />
            </View>
          </View>
          <SignupInput
            desc="몇 층에 몇 호에 계신가요?"
            keyboardType="default"
            placeholder="예시 : 10층 / 101호"
            text={state.location}
            setText={(text) => onChange('location', text)}
            isSecure={false}
          />
          {state.name !== '' && state.StoreId !== 0 && state.location !== ''
            ?
            <SignupButton
              text="다음"
              onPress={onClickNext}
              active={true}
              number={2}
            />
            :
            <SignupButton
              text="다음"
              onPress={() => { }}
              active={false}
              number={2}
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
  selectContainer: {
    width: '100%',
  },
  desc: {
    marginBottom: 12,
    fontSize: 16,
  },
  selectBox: {
    width: '100%',
    height: 48,
    marginBottom: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: THEME_LIGHTGRAY,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    height: '100%',
    width: 250,
    color: THEME_BLACK,
    backgroundColor: THEME_LIGHTGRAY,
  },
  inputAndroid: {
    fontSize: 14,
    height: '100%',
    width: 250,
    color: THEME_BLACK,
    backgroundColor: THEME_LIGHTGRAY,
  },
});

export default SignUp2;