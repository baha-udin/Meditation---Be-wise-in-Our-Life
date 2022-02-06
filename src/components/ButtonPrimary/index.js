import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors';

const ButtonPrimary = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.wrapFb}>
        <Image source={props.ImageSource} style={styles.IconImg} />
        <Text style={styles.textLogin}>{props.titleButton}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  wrapFb: {
    backgroundColor: Colors.BUTTON_BG,
    paddingVertical: 12,
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
});
