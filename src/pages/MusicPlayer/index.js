import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Colors from './../../assets/Colors';
import {
  IconBack,
  IconBackWad,
  IconDownloads,
  IconForwad,
  IconLove,
  IconPause,
  IconPlay,
  IconTimer,
  BackgroundPageMucic,
  IconSaveLove,
} from '../../assets/img';
import {ResHeight, ResWidth} from '../../utils/responsive';

const MusicPlayer = ({navigation}) => {
  const [onPress, setOnPress] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={BackgroundPageMucic}
        style={styles.BackgroundPage}>
        {/* Bagian Atas */}
        <View style={styles.wrapTop}>
          {/* Bagian Atas Kiri */}
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('DetailPage')}>
              <Image source={IconBack} style={styles.IconBack} />
            </TouchableOpacity>
          </View>
          {/* Bagian Atas Kanan */}
          <View style={styles.wrapTopRight}>
            <Image source={IconSaveLove} style={styles.IconBack} />
            <Image source={IconDownloads} style={styles.IconBack} />
          </View>
        </View>
        {/* bagian content */}
        <View style={styles.content}>
          {/* bagian title */}
          <View style={styles.wrapTitlePage}>
            <Text style={styles.title}>Night Island</Text>
            <Text style={styles.description}>SLEEP MUSIC</Text>
          </View>
          {/* bagian play, backwad, forwad */}
          <View style={styles.wrapButtonNavigate}>
            <Image source={IconForwad} style={styles.IconBack} />

            <Image source={IconPlay} style={styles.IconPause} />

            <Image source={IconForwad} style={styles.IconBack} />
          </View>
          <View style={styles.wrapTimer}>
            <Image source={IconTimer} style={styles.IconTimer} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#08194F',
  },
  BackgroundPage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  wrapTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '2%',
  },
  IconBack: {
    height: ResHeight(35),
    width: ResWidth(42),
  },
  wrapTopRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
  },
  content: {
    position: 'absolute',
    height: '50%',
    width: '100%',
    bottom: 0,
  },
  wrapTitlePage: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5%',
  },
  title: {
    color: Colors.FontColor,
    fontSize: 28,
    letterSpacing: 0.7,
  },
  description: {
    color: Colors.FontColor,
    fontSize: 14,
    letterSpacing: 0.7,
    opacity: 0.7,
  },
  wrapButtonNavigate: {
    marginTop: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  IconPause: {
    height: 90,
    width: 90,
  },
  wrapTimer: {
    marginTop: '5%',
    width: '100%',
    paddingHorizontal: '10%',
  },
  IconTimer: {
    height: 10,
    width: '100%',
  },
});
