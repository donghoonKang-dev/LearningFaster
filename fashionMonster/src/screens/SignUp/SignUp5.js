import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, Dimensions, Text, Image } from 'react-native';
import SignupButton from '../../components/Button/SignupButton';
import { THEME_WHITE } from '../../styles/color';

const windowHeight = Dimensions.get('window').height;

function SignUp5({ navigation }) {
  const onClickNext = () => navigation.navigate('SignUp6');

  return (
    <View style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.pageTitle}>가장 빠른 영업일에</Text>
            <Text style={styles.pageTitle}>매장으로 방문하여</Text>
            <Text style={styles.pageTitle}>인사드리겠습니다😊</Text>
          </View>
          <Text style={styles.desc}>매장 방문하여 확인 후 회원가입이 승인됩니다!</Text>
          <Image
            style={styles.image}
            source={require('../../assets/images/goodJob.png')}
          />
          <SignupButton
            text="회원가입 완료🎉"
            onPress={onClickNext}
            active={true}
          />
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
  titleContainer: {
    marginTop: windowHeight * 0.075,
    marginBottom: 12,
  },
  pageTitle: {
    marginBottom: 6,
    fontSize: 24,
    fontWeight: '700',
  },
  desc: {
    fontSize: 16,
  },
  image: {
    width: 234,
    height: 175,
    alignSelf: 'center',
    marginTop: 44,
  }
});

export default SignUp5;