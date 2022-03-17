import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {
  BackgroundOnboard,
  BackgroundSplash,
  IlustrastionSplash,
} from '../../assets/img';
import Colors from './../../assets/Colors';
import Fonts from './../../assets/fonts';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 6000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode={'cover'}
        source={BackgroundSplash}
        style={{width: '100%', height: '100%', marginTop: 30}}>
        <View style={styles.sectionTop}>
          <Text style={styles.title}>Welcome to Sleep</Text>
          <Text style={styles.desc}>
            Explore the new experience of sleep. it uses sound and visualization
            to create perfect conditions for refreshing sleep.
          </Text>
          <Image source={IlustrastionSplash} style={styles.ImageSplash} />
        </View>
        <View style={styles.sectionBottom}>
          <Text style={styles.ctaStarted}>GET STARTED</Text>
          <View style={styles.lineBottom} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.Basic_BG,
  },
  sectionTop: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 26,
    color: '#E6E7F2',
    fontWeight: '700',
  },
  desc: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 14,
    color: '#E6E7F2',
    fontWeight: '400',
    paddingHorizontal: 22,
  },
  ImageSplash: {
    marginTop: 36,
    width: '100%',
    height: '36%',
  },
  sectionBottom: {
    display: 'flex',
    height: 140,
    flexDirection: 'column',
    alignItems: 'center',
  },
  ctaStarted: {
    backgroundColor: '#8E97FD',
    color: '#F6F1FB',
    paddingHorizontal: 30,
    paddingVertical: 16,
    width: 300,
    textAlign: 'center',
    borderRadius: 50,
    marginBottom: 8,
  },
  lineBottom: {
    marginTop: 30,
    borderStyle: 'solid',
    alignItems: 'center',
    width: 150,
    borderWidth: 2,
    borderColor: '#F6F1FB',
    borderRadius: 40,
  },
});

export default Splash;
