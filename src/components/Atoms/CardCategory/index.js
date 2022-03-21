import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {ResHeight, ResWidth} from '../../../utils/responsive';

const CardCategory = ({onPress, source, title, color}) => {
  return (
    <View style={styles.cardFeature}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.wrapIconOther}>
          <Image style={styles.iconFeature} source={source} />
        </View>
        <Text style={styles.textFeature}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardCategory;

const styles = StyleSheet.create({
  cardFeature: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: ResWidth(12),
  },
  wrapIcon: color => ({
    paddingVertical: ResHeight(16),
    paddingHorizontal: ResWidth(14),
    borderRadius: 20,
    backgroundColor: color,
  }),
  wrapIconOther: {
    paddingVertical: ResHeight(8),
    paddingHorizontal: ResWidth(12),
    borderRadius: 20,
    backgroundColor: '#586894',
  },
  iconFeature: {
    width: ResWidth(25),
    height: ResHeight(25),
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
  textFeature: {
    marginTop: ResHeight(12),
    color: 'white',
    textAlign: 'center',
  },
});
