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
  Alert,
  SafeAreaView,
} from 'react-native';
import {ResWidth, ResHeight} from './../../utils/responsive';
import Colors from '../../assets/Colors';
import {BgLogin, IconFb, IconGoogle} from '../../assets/img';
import InputPrimary from '../../components/InputPrimary';
import ButtonPrimary from '../../components/ButtonPrimary';
import Gap from './../../components/Atoms/Gap';
import {Fire} from './../../config';
import ButtonThirdParty from '../../components/ButtonThirdParty';

const Register = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState('Data masih ada yang kosong');
  const [erorrRegister, setErrorRegister] = useState('Gagal Registrasi');

  const handleRegister = () => {
    if ((fullName == '' || email == '', password == '')) {
      Alert.alert(validate);
    } else {
      Fire.auth()
        .createUserWithEmailAndPassword(email.trim(), password)
        .then(success => {
          console.log('berhasil login', success);
        })
        .then(() => navigation.navigate('BottomNavigation', {screen: 'Home'}))
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('error register', errorMessage);
          Alert.alert(erorrRegister);
        });
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground source={BgLogin} style={styles.BgImg}>
          <View style={styles.sectionHeader}>
            <Text style={styles.titlePage}>Create Your Account</Text>
            {/* wrap Login FB & Google */}
            <View style={styles.wrapLoginThirdparty}>
              <TouchableOpacity>
                <ButtonThirdParty
                  Image={IconFb}
                  title="Continue With Facebook"
                  titleStyle={styles.CTAStyle}
                />
              </TouchableOpacity>
              <Gap height={ResHeight(12)} />
              <TouchableOpacity>
                <ButtonThirdParty
                  Image={IconGoogle}
                  title="Continue With Facebook"
                  titleStyle={styles.CTAStyle}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        {/* Section Input Data Register */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapLoginEmail}>
            <Text style={styles.optionLogin}>Or Login with Email</Text>
            <Gap height={20} />
            <InputPrimary
              placeholder="Full Name"
              value={fullName}
              onChangeText={value => setFullName(value)}
            />
            <Gap height={12} />
            <InputPrimary
              placeholder="Email"
              value={email}
              onChangeText={value => setEmail(value)}
            />
            <Gap height={12} />
            <InputPrimary
              placeholder="Password"
              onChangeText={value => setPassword(value)}
              value={password}
              secureTextEntry={true}
            />
          </View>
          {/* Button Submit */}
          <View style={styles.wrapCTA}>
            <ButtonPrimary
              onPress={handleRegister}
              titleButton="Register"
              titleStyle={styles.titleRegister}
            />
          </View>
        </ScrollView>
      </ScrollView>
      <View style={styles.wrapSignUp}>
        <Text style={styles.textHaveAccount}>Already have an account?</Text>
        <TouchableOpacity
          style={styles.ctaSignUp}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textCtaSignUp}>Login here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Basic_BG,
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: ResHeight(8),
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
    fontSize: ResWidth(28),
  },
  wrapLoginThirdparty: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  IconImg: {
    height: ResWidth(24),
    resizeMode: 'contain',
  },
  textLogin: {
    textAlign: 'center',
    color: Colors.WHITE,

    fontSize: ResWidth(14),
    letterSpacing: 0.5,
  },
  wrapLoginEmail: {
    paddingHorizontal: '10%',
    marginTop: ResHeight(30),
  },
  optionLogin: {
    color: Colors.FontColor,
    fontSize: ResWidth(14),
    textAlign: 'center',
    letterSpacing: 0.4,
  },
  wrapCTA: {
    marginHorizontal: '10%',
    marginTop: ResHeight(16),
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
  titleRegister: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontSize: Platform.OS == 'ios' ? ResHeight(13) : ResHeight(14),
    letterSpacing: 1,
    fontWeight: '400',
  },
});
