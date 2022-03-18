import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const CardMusic = props => {
  return (
    <View style={styles.card1}>
      <Image source={props.imgCard} style={styles.imgCard} />
      <Text style={styles.titleCardNight}>{props.title}</Text>
      <Text style={styles.descCardNight}>{props.desc}</Text>
    </View>
  );
};

export default CardMusic;

const styles = StyleSheet.create({
  card1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: 14,
  },
  imgCard: {
    width: 150,
    height: 100,
    borderRadius: 12,
  },
  titleCardNight: {
    marginTop: 8,
    color: '#E6E7F2',
    fontSize: 16,
    fontWeight: '500',
  },
  descCardNight: {
    marginTop: 6,
    color: '#E6E7F2',
    opacity: 0.9,
    fontSize: 13,
    fontWeight: '300',
  },
});
