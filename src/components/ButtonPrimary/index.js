import {
  StyleSheet,
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors';
import {ResHeight, ResWidth} from '../../utils/responsive';

const ButtonPrimary = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.wrapFb}>
        <Text style={props.titleStyle}>{props.titleButton}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  wrapFb: {
    backgroundColor: Colors.BUTTON_BG,
    paddingVertical: ResHeight(12),
    paddingHorizontal: ResHeight(25),
    flexDirection: 'row',
    borderRadius: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textLogin: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontSize: ResHeight(15),
    letterSpacing: 1,
    fontWeight: '400',
  },
});
