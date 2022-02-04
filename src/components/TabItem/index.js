import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {WARNA_UTAMA, WARNA_DISABLE} from './../../utils/constant';
import IconHomeActive from './../../assets/iconMenu/IconHome-Active.png';
import IconHome from './../../assets/iconMenu/IconHome.png';
import IconMeditationActive from './../../assets/iconMenu/IconMeditate-Active.png';
import IconMeditation from './../../assets/iconMenu/IconMeditate.png';
import IconMusicActive from './../../assets/iconMenu/IconMusic-Active.png';
import IconMusic from './../../assets/iconMenu/IconMusic.png';
import IconProfileActive from './../../assets/iconMenu/IconProfile-Active.png';
import IconProfile from './../../assets/iconMenu/IconProfile.png';
import IconSleepActive from './../../assets/iconMenu/IconSleep-Active.png';
import IconSleep from './../../assets/iconMenu/IconSleep.png';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if ('label' === 'Home')
      return isFocused ? <IconHomeActive /> : <IconHome />;
    //  Alert.alert('menu: Home');
    if ('label' === 'Sleep')
      return isFocused ? <IconSleepActive /> : <IconSleep />;
    //  Alert.alert('menu: Sleep');
    if ('label' === 'Meditation')
      return isFocused ? <IconMeditationActive /> : <IconMeditation />;
    //  Alert.alert('menu: Meditation');
    if ('label' === 'Music')
      return isFocused ? <IconMusicActive /> : <IconMusic />;
    //  Alert.alert('menu: Music');
    if ('label' === 'Profile')
      return isFocused ? <IconProfileActive /> : <IconProfile />;
    //  Alert.alert('menu: Profile');
    return <IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      {/* <Icon /> */}
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 13,
    color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
    marginTop: 8,
  }),
});
