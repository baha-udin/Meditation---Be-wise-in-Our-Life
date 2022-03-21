import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Colors from '../../assets/Colors';
import {
  BgTop,
  CardNight,
  CardSleep,
  IconArrow,
  IconHeadset,
  IconSaveLove,
  IconTinyLove,
  ImageDownload,
} from '../../assets/img';
import CardMusic from '../../components/Atoms/CardMusic';

const DetailPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView vertical style={styles.mainContent}>
        <View style={styles.sectionTop}>
          <ImageBackground source={BgTop} style={styles.bgTop}>
            <View style={styles.wrap}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('BottomNavigation', {screen: 'Home'})
                  }>
                  <Image source={IconArrow} style={styles.iconTop} />
                </TouchableOpacity>
              </View>
              <View style={styles.rightTop}>
                <Image source={IconSaveLove} style={styles.iconSelfLove} />
                <Image source={ImageDownload} style={styles.iconTop} />
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.sectionTittle}>
          <View>
            <Text style={styles.titleMusic}>Night Island</Text>
          </View>
          <View>
            <Text style={styles.longMusic}>45 MIN . SLEEP MUSIC</Text>
          </View>
          <View>
            <Text style={styles.descMusic}>
              Ease the mind into a restful night’s sleep with these deep,
              amblent tones.
            </Text>
          </View>
          <View style={styles.engagement}>
            <View style={styles.wrapEngagement}>
              <Image source={IconTinyLove} style={styles.iconTiny} />
              <Text style={styles.descEngagement}>24.234 Favorites</Text>
            </View>
            <View style={styles.wrapEngagementRight}>
              <Image source={IconHeadset} style={styles.iconTiny} />
              <Text style={styles.descEngagement}>21.764 Listening</Text>
            </View>
          </View>
          <View style={styles.garis} />

          {/* Bagian Related */}
          <View style={styles.related}>
            <Text style={styles.titleRelated}>Related</Text>
            <View style={styles.wrapRelated}>
              {/* Mulai */}
              <View style={styles.cardPlaylist}>
                <CardMusic
                  imgCard={CardNight}
                  title="Night Island"
                  desc="45 MIN . SLEEP MUSIC"
                />
                <CardMusic
                  imgCard={CardSleep}
                  title="Sweet Sleep"
                  desc="45 MIN . SLEEP MUSIC"
                />
              </View>
              <View style={styles.cardPlaylist2}>
                <CardMusic
                  imgCard={CardNight}
                  title="Night Island"
                  desc="45 MIN . SLEEP MUSIC"
                />
                <CardMusic
                  imgCard={CardSleep}
                  title="Sweet Sleep"
                  desc="45 MIN . SLEEP MUSIC"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.ctaBawah}>
        <TouchableOpacity onPress={() => navigation.navigate('MusicPlayer')}>
          <Text style={styles.playNow}>PLAY</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03174C',
    width: '100%',
    height: '100%',
  },
  mainContent: {
    flex: 1,
  },
  sectionTop: {
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgTop: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  rightTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconTop: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  sectionTittle: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 16,
  },
  titleMusic: {
    color: '#E6E7F2',
    paddingTop: 16,
    fontSize: 24,
    fontWeight: '700',
  },
  longMusic: {
    color: '#98A1BD',
    fontSize: 13,
    paddingTop: 4,
    letterSpacing: 1,
  },
  descMusic: {
    paddingTop: 8,
    color: '#98A1BD',
    fontSize: 13,
    paddingRight: 16,
  },
  engagement: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  wrapEngagement: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapEngagementRight: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 18,
    alignItems: 'center',
  },
  descEngagement: {
    marginLeft: 8,
    color: '#E6E7F2',
    fontSize: 13,
  },
  iconSelfLove: {
    width: 44,
    height: 44,
  },
  iconTiny: {
    width: 20,
    height: 18,
  },
  garis: {
    marginTop: 18,
    borderWidth: 0.3,
    borderStyle: 'solid',
    borderColor: '#425695',
  },
  related: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 16,
  },
  titleRelated: {
    fontSize: 24,
    fontWeight: '500',
    color: '#E6E7F2',
  },
  wrapRelated: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardPlaylist: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
    paddingBottom: '8%',
  },
  cardPlaylist2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '-5%',
    marginBottom: 8,
  },
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
  ctaBawah: {
    height: 75,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    borderRadius: 10,
  },
  playNow: {
    backgroundColor: Colors.BUTTON_BG,
    color: '#F6F1FB',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    textAlign: 'center',
    borderRadius: 10,
  },
});

export default DetailPage;
