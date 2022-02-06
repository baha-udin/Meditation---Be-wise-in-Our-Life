import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../assets/Colors';
import {BgLogin, IconFb, IconGoogle} from '../../assets/img';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BgLogin} style={styles.BgImg}>
        <View style={styles.sectionHeader}>
          <Text style={styles.titlePage}>Welcome Back!</Text>
          {/* wrap Login FB & Google */}
          <View style={styles.wrapLoginThirdparty}>
            <View style={styles.wrapFb}>
              <Image source={IconFb} style={styles.IconImg} />
              <Text style={styles.textLogin}>CONTINUE WITH Facebook</Text>
            </View>
            <View style={styles.wrapGoogle}>
              <Image source={IconGoogle} style={styles.IconImg} />
              <Text style={styles.textLogin}>CONTINUE WITH GOOGLE</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <ScrollView>
        <View style={styles.wrapLoginEmail}>
          <Text style={styles.optionLogin}>Or Login with Email</Text>
          <View style={styles.wrapInputEmail}>
            <TextInput placeholder="Email Address" style={styles.inputEmail} />
          </View>
          <View style={styles.wrapInputPassword}>
            <TextInput
              placeholder="password"
              secureTextEntry={true}
              style={styles.inputPassword}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('BottomNavigation', {screen: 'Home'})
          }>
          <View style={styles.wrapCTA}>
            <Text style={styles.textLogin}>LOG IN</Text>
          </View>
        </TouchableOpacity>
        {/* Section Forgot Password */}
        <TouchableOpacity style={styles.wrapCtaForget}>
          <Text style={styles.forgetPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.wrapSignUp}>
        <Text style={styles.textHaveAccount}>ALREADY HAVE AN ACCOUNT?</Text>
        <TouchableOpacity
          style={styles.ctaSignUp}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textCtaSignUp}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Basic_BG,
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-start',
  },
  sectionHeader: {
    paddingTop: '22%',
  },
  BgImg: {
    resizeMode: 'contain',
    width: '100%',
  },
  titlePage: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontSize: 28,
    fontFamily: 'Poppins-SemiBold',
  },
  wrapLoginThirdparty: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  wrapFb: {
    backgroundColor: Colors.BUTTON_BG,
    paddingVertical: 16,
    paddingHorizontal: '8%',
    flexDirection: 'row',
    borderRadius: 30,
    width: '80%',
    justifyContent: 'space-evenly',
  },
  wrapGoogle: {
    marginTop: '4%',
    borderWidth: 1,
    borderColor: Colors.WHITE,
    paddingVertical: 16,
    paddingHorizontal: '8%',
    flexDirection: 'row',
    borderRadius: 30,
    width: '80%',
    justifyContent: 'space-evenly',
  },
  IconImg: {
    height: 24,
  },
  textLogin: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    letterSpacing: 0.5,
  },
  wrapLoginEmail: {
    paddingHorizontal: '10%',
    marginTop: '8%',
  },
  optionLogin: {
    color: Colors.FontColor,
    fontSize: 15,
    textAlign: 'center',
    letterSpacing: 0.4,
    fontFamily: 'Poppins-Light',
  },
  wrapInputEmail: {
    marginTop: '10%',
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 15,
  },
  inputEmail: {
    color: Colors.FontColor,
    fontWeight: '400',
    fontSize: 14,
  },
  wrapInputPassword: {
    marginTop: '4%',
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 15,
  },
  inputPassword: {
    color: Colors.FontColor,
    fontWeight: '400',
    fontSize: 14,
    outlineStyle: 'none',
  },
  wrapCTA: {
    marginTop: '8%',
    marginHorizontal: '10%',
    backgroundColor: Colors.BUTTON_BG,
    paddingVertical: 16,
    flexDirection: 'row',
    borderRadius: 30,
    width: '80%',
    justifyContent: 'space-evenly',
  },
  wrapCtaForget: {
    marginTop: '4%',
  },
  forgetPassword: {
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
    letterSpacing: 0.8,
  },
  wrapSignUp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHaveAccount: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.6,
    fontSize: 14,
    marginVertical: '5%',
  },
  ctaSignUp: {
    marginLeft: 8,
  },
  textCtaSignUp: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.6,
  },
});
