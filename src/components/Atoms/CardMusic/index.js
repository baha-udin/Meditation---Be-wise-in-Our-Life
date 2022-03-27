import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import {ResHeight, ResWidth} from './../../../utils/responsive';

const CardMusic = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.card1}>
        <Image source={props.imgCard} style={styles.imgCard} />
        <Text style={styles.titleCardNight}>{props.title}</Text>
        <Text style={styles.descCardNight}>{props.desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardMusic;

const styles = StyleSheet.create({
  card1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imgCard: {
    width: ResWidth(150),
    height: ResHeight(100),
    borderRadius: 12,
  },
  titleCardNight: {
    marginTop: 8,
    color: '#E6E7F2',
    fontSize: ResWidth(16),
    fontWeight: '500',
  },
  descCardNight: {
    marginTop: ResHeight(6),
    color: '#E6E7F2',
    opacity: 0.9,
    fontSize: ResWidth(13),
    fontWeight: '300',
  },
});
