import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import Colors from '../../assets/Colors';
import {BgLogin, IconFb, IconGoogle} from '../../assets/img';
import {
  InputPrimary,
  ButtonPrimary,
  ButtonThirdParty,
} from './../../components';
import Gap from '../../components/Atoms/Gap';
import {ResHeight, ResWidth} from '../../utils/responsive';
import {Fire} from '../../config';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState('Data masih ada yang kosong');

  const handlLogin = () => {
    if (email == '' || password == '') {
      Alert.alert(validate);
    } else {
      Fire.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(success => {
          console.log('berhasil login', success);
        })
        .then(() => navigation.navigate('BottomNavigation', {screen: 'Home'}))
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('error register', errorMessage);
        });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={BgLogin} style={styles.BgImg}>
        <View style={styles.sectionHeader}>
          <Text style={styles.titlePage}>Welcome Back!</Text>
          {/* wrap Login FB & Google */}
          <View style={styles.wrapLoginThirdparty}>
            <ButtonThirdParty Image={IconFb} title="Continue with Facebook" />
            <Gap height={ResHeight(16)} />
            <ButtonThirdParty Image={IconGoogle} title="Continue with Google" />
          </View>
        </View>
      </ImageBackground>
      <ScrollView>
        <View style={styles.wrapLoginEmail}>
          <Text style={styles.optionLogin}>Or Login with Email</Text>
          <Gap height={30} />
          <InputPrimary
            placeholder="Input your email"
            onChangeText={value => setEmail(value)}
            value={email}
          />
          <Gap height={16} />
          <InputPrimary
            placeholder="Password"
            onChangeText={value => setPassword(value)}
            value={password}
            secureTextEntry={true}
          />
        </View>
        <Gap height={ResHeight(24)} />
        <View style={{paddingHorizontal: '10%'}}>
          <ButtonPrimary
            onPress={handlLogin}
            titleButton="Login"
            titleStyle={styles.CTAStyle}
          />
        </View>
        {/* Section Forgot Password */}
        <TouchableOpacity style={styles.wrapCtaForget}>
          <Text style={styles.forgetPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.wrapSignUp}>
        <Text style={styles.textHaveAccount}>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.ctaSignUp}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textCtaSignUp}>Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  CTAStyle: {
    color: 'white',
    fontSize: ResWidth(16),
    fontWeight: '600',
    letterSpacing: 0.7,
  },
  container: {
    backgroundColor: Colors.Basic_BG,
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-start',
  },
  sectionHeader: {
    paddingTop: '25%',
  },
  BgImg: {
    resizeMode: 'contain',
    width: '100%',
  },
  titlePage: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontSize: 28,
  },
  wrapLoginThirdparty: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ResHeight(60),
  },
  IconImg: {
    height: ResHeight(24),
    width: ResWidth(26),
    resizeMode: 'contain',
  },
  textLogin: {
    textAlign: 'center',
    color: Colors.WHITE,
    marginLeft: ResWidth(20),
    fontSize: ResWidth(14),
    letterSpacing: 0.5,
  },
  wrapLoginEmail: {
    paddingHorizontal: '10%',
    marginTop: '8%',
  },
  optionLogin: {
    color: Colors.FontColor,
    fontSize: ResWidth(15),
    textAlign: 'center',
    letterSpacing: 0.4,
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
  },
  wrapCTA: {
    marginTop: '8%',
    marginHorizontal: '10%',
    backgroundColor: Colors.BUTTON_BG,
    paddingVertical: ResHeight(12),
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

    letterSpacing: 0.6,
  },
});
