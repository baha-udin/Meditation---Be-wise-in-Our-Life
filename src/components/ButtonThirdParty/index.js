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

const ButtonThirdParty = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.wrapLoginThirdparty}>
      <View style={styles.wrapFb}>
        <Image source={props.Image} style={styles.IconImg} />
        <Text style={styles.textLogin}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonThirdParty;

const styles = StyleSheet.create({
  wrapLoginThirdparty: {
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    marginHorizontal: '10%',
  },
  wrapFb: {
    backgroundColor: Colors.BUTTON_BG,
    paddingVertical: Platform.OS == 'ios' ? ResHeight(6) : ResHeight(8),
    paddingHorizontal: ResHeight(25),
    flexDirection: 'row',
    borderRadius: 30,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  IconImg: {
    height: ResHeight(24),
    width: ResWidth(26),
    resizeMode: 'contain',
    marginRight: ResWidth(20),
  },
  textLogin: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontSize: Platform.OS == 'ios' ? ResHeight(12) : ResHeight(14),
    letterSpacing: 0.5,
  },
});
