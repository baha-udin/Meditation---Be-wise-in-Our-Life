import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import Colors from '../../assets/Colors';
import {ImageOnboard} from '../../assets/img';
import {ResWidth, ResHeight} from './../../utils/responsive';

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
    paddingHorizontal: '8%',
    marginTop: '20%',
  },
  heroImage: {
    width: ResWidth(200),
    height: 'auto',
    resizeMode: 'contain',
  },
  wrapText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ResHeight(60),
    paddingHorizontal: '10%',
  },
  title: {
    textAlign: 'center',
    fontSize: ResWidth(24),
    fontWeight: 'bold',
    color: Colors.FontColor,
    letterSpacing: 0.4,
  },
  description: {
    marginTop: ResHeight(16),
    textAlign: 'center',
    fontSize: ResWidth(15),
    color: Colors.FontColor,
    letterSpacing: 0.8,
  },
  wrapBtn: {
    marginTop: ResHeight(80),
    backgroundColor: Colors.BUTTON_BG,
    paddingHorizontal: ResWidth(20),
    paddingVertical: ResHeight(12),
    borderRadius: 30,
    width: '80%',
  },
  textBtn: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.FontColor,
    letterSpacing: 0.5,
  },
  wrapLogin: {
    marginTop: ResHeight(20),
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
