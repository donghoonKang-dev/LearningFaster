import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, Dimensions, Text, TouchableWithoutFeedback } from 'react-native';
import { THEME_WHITE, THEME_PURPLE } from '../styles/color';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function SignUp7({ navigation }) {
  const onClickNext = () => {
    navigation.popToTop();
  }

  return (
    <View style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.pageTitle}>지금 바로,</Text>
            <Text style={styles.pageTitle}>카카오톡에서 패스터를</Text>
            <Text style={styles.pageTitle}>등록하고 메세지를 보내주세요!</Text>
          </View>
          <Text style={styles.desc}>모든 이벤트와 안내사항은 카카오톡에서</Text>
          <Text style={styles.desc}>가장 빠르게 확인 가능합니다.</Text>
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback onPress={onClickNext}>
              <View style={styles.whiteBtnBox}>
                <Text style={styles.whiteBtnText}>나중에 등록하기</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => alert('준비중인 서비스입니다.')}>
              <View style={styles.purpleBtnBox}>
                <Text style={styles.purpleBtnText}>지금 등록하기</Text>
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
    marginBottom: 12,
  },
  pageTitle: {
    marginBottom: 8,
    fontSize: 24,
    fontWeight: '700',
  },
  desc: {
    fontSize: 16,
    marginBottom: 6,
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

export default SignUp7;