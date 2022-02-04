import React from 'react';
import {Image, View, Text, StyleSheet, Button, Alert} from 'react-native';

const OnBoard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapImage}>
        <Image
          style={styles.img}
          source={require('./../../assets/ilust-onboard.png')}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.sectionTitle}>
          <Text style={styles.Title}>We are what we do</Text>
          <Text style={styles.Desc}>
            Thousand of people are usign silent moon for smaals meditation
          </Text>
        </View>
        <View style={styles.sectionCTA}>
          <Button
            title="SIGN UP"
            color="#8E97FD"
            borderRadius="20"
            style={styles.CTA}
            onPress={() => Alert.alert('Berhasil klik sign up')}
          />
          <View style={styles.wrapCTAOther}>
            <Text style={styles.DescOther}>ALREADY HAVE AN ACCOUNT? </Text>
            <Text style={styles.login}>LOG IN </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnBoard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#03174C',
    flex: 1,
  },
  wrapImage: {
    paddingHorizontal: 20,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 220,
    width: 300,
  },
  content: {
    height: 250,
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sectionTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  Title: {
    display: 'flex',
    color: '#ffff',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
  Desc: {
    marginTop: 12,
    display: 'flex',
    color: '#ffff',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '400',
    opacity: 0.8,
    letterSpacing: 0.8,
    paddingHorizontal: 20,
  },
  sectionCTA: {
    marginTop: 36,
  },
  CTA: {
    paddingVertical: 12,
    backgroundColor: '#8E97FD',
    color: '#ffff',
    borderRadius: 20,
    textAlign: 'center',
    textAlign: 'center',
  },
  wrapCTAOther: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  DescOther: {
    color: '#ffff',
    fontWeight: '400',
    fontSize: 12,
    opacity: 0.8,
  },
  login: {
    color: '#A1A4B2',
    fontWeight: '400',
    fontSize: 12,
    opacity: 0.8,
  },
});
