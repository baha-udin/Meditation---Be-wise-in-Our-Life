import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import Colors from '../../assets/Colors';
import {ImageOnboard} from '../../assets/img';

const OnBoarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapImage}>
        <Image source={ImageOnboard} style={styles.imgHero} />
      </View>
      <View style={styles.wrapText}>
        <Text style={styles.title}>We are what we do</Text>
        <Text style={styles.description}>
          A Thousand of people are usign silent moon for smalls meditation
        </Text>
      </View>

      <View style={styles.wrapBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textBtn}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapLogin}>
        <Text style={styles.textHaveAccount}>ALREADY HAVE AN ACCOUNT?</Text>
        <TouchableOpacity
          style={styles.wrapCTALogin}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.ctaLogin}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Basic_BG,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  wrapImage: {
    marginHorizontal: '10%',
    marginTop: '40%',
  },
  heroImage: {
    marginTop: '20%',
    width: '10%',
    resizeMode: 'contain',
  },
  wrapText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
    paddingHorizontal: '10%',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Poppins-700',
    color: Colors.FontColor,
    letterSpacing: 0.5,
  },
  description: {
    marginTop: '4%',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Poppins-Light',
    color: Colors.FontColor,
    letterSpacing: 0.8,
  },
  wrapBtn: {
    marginTop: '10%',
    backgroundColor: Colors.BUTTON_BG,
    paddingHorizontal: '20%',
    paddingVertical: '4%',
    borderRadius: 30,
    width: '80%',
  },
  textBtn: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: Colors.FontColor,
    letterSpacing: 0.5,
  },
  wrapLogin: {
    marginTop: '4%',
    flexDirection: 'row',
    marginHorizontal: '20%',
    justifyContent: 'center',
  },
  textHaveAccount: {
    color: Colors.FontColor,
    fontSize: 12,
    letterSpacing: 0.5,
  },
  wrapCTALogin: {
    marginLeft: '5%',
  },
  ctaLogin: {
    color: Colors.FontColor,
    fontSize: 12,
    letterSpacing: 0.5,
  },
});
