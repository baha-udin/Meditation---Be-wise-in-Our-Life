import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  useColorScheme,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import {
  CardNight,
  Ornamen,
  HeroCardBackground,
  CardSleep,
  CardMoon,
  IconLock,
  IconAll,
  IconLove,
  IconAnxious,
  IconSleep,
  IconKids,
} from '../../assets/img';
import Colors from './../../assets/Colors';
import {ResHeight, ResWidth} from '../../utils/responsive';
import CardMusic from '../../components/Atoms/CardMusic';
import CardCategory from '../../components/Atoms/CardCategory';

const Home = ({navigation}) => {
  const isDark = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{backgroundColor: Colors.Basic_BG}}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View showsVerticalScrollIndicator vertical>
            <ImageBackground
              source={Ornamen}
              style={styles.bgHero}
              resizeMode="cover">
              {/* bagian isi */}
              <View style={styles.content}>
                <View style={styles.Header}>
                  <Text style={styles.titleHeader}>Sleep Stories</Text>
                  <Text style={styles.descHeader}>
                    Shoothing bedtime stories to help you fall into a deep and
                    natural sleep
                  </Text>
                </View>
                <ScrollView horizontal>
                  <View style={styles.feature}>
                    {/* card 1 */}
                    <CardCategory
                      source={IconAll}
                      title="All"
                      color={Colors.BUTTON_BG}
                      onPress={() => navigation.navigate('DetailCategory')}
                    />
                    {/* card 2 */}
                    <CardCategory
                      source={IconSleep}
                      title="My"
                      color={'#586894'}
                      onPress={() => navigation.navigate('DetailCategory')}
                    />
                    {/* card 3 */}
                    <CardCategory
                      source={IconAnxious}
                      title="Anxious"
                      color={'#586894'}
                      onPress={() => navigation.navigate('DetailCategory')}
                    />
                    {/* card 4 */}
                    <CardCategory
                      source={IconSleep}
                      title="Sleep"
                      color={'#586894'}
                      onPress={() => navigation.navigate('DetailCategory')}
                    />
                    {/* card 5 */}
                    <CardCategory
                      source={IconKids}
                      title="Kids"
                      color={'#586894'}
                      onPress={() => navigation.navigate('DetailCategory')}
                    />
                    {/* card 6 */}
                    <CardCategory
                      source={IconAnxious}
                      title="My"
                      color="#586894"
                      onPress={() => navigation.navigate('DetailCategory')}
                    />
                    {/* card 7 */}
                    <CardCategory
                      source={IconSleep}
                      title="Sleep"
                      color="#586894"
                      onPress={() => navigation.navigate('DetailCategory')}
                    />
                  </View>
                </ScrollView>
              </View>
            </ImageBackground>
            {/* Akhir isi */}

            {/* Awal card moon */}
            <View style={styles.cardMoon}>
              <ImageBackground
                source={HeroCardBackground}
                style={styles.bgCard}>
                <View style={styles.wrapCard}>
                  <Image source={IconLock} style={styles.iconLock} />
                  <Text style={styles.titleMoon}>The Ocean Moon</Text>
                  <Text style={styles.descMoon}>
                    Non-stop 8- hour mixes of our most popular sleep audio
                  </Text>
                  <Text style={styles.ctaStart}>START</Text>
                </View>
              </ImageBackground>
            </View>

            {/* Bagian card bawah 1*/}
            <View horizontal style={styles.cardPlaylist}>
              <CardMusic
                imgCard={CardNight}
                title="Night Island"
                desc="45 MIN . SLEEP MUSIC"
                onPress={() => navigation.navigate('DetailPage')}
              />
              <CardMusic
                imgCard={CardSleep}
                title="Night Island"
                desc="45 MIN . SLEEP MUSIC"
                onPress={() => navigation.navigate('DetailPage')}
              />
            </View>

            {/* Bagian card bawah 2*/}
            <View horizontal style={styles.cardPlaylist}>
              <CardMusic
                imgCard={CardNight}
                title="Night Island"
                desc="45 MIN . SLEEP MUSIC"
                onPress={() => navigation.navigate('DetailPage')}
              />
              <CardMusic
                imgCard={CardSleep}
                title="Night Island"
                desc="45 MIN . SLEEP MUSIC"
                onPress={() => navigation.navigate('DetailPage')}
              />
            </View>
            {/* Bagian card bawah 3*/}
            <View horizontal style={styles.cardPlaylist}>
              <CardMusic
                imgCard={CardNight}
                title="Night Island"
                desc="45 MIN . SLEEP MUSIC"
                onPress={() => navigation.navigate('DetailPage')}
              />
              <CardMusic
                imgCard={CardSleep}
                title="Night Island"
                desc="45 MIN . SLEEP MUSIC"
                onPress={() => navigation.navigate('DetailPage')}
              />
            </View>
            {/* Bagian card bawah 4*/}
            <View horizontal style={styles.cardPlaylist}>
              <CardMusic
                imgCard={CardNight}
                title="Night Island"
                desc="45 MIN . SLEEP MUSIC"
                onPress={() => navigation.navigate('DetailPage')}
              />
              <CardMusic
                imgCard={CardSleep}
                title="Night Island"
                desc="45 MIN . SLEEP MUSIC"
                onPress={() => navigation.navigate('DetailPage')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03174C',
    width: '100%',
    height: '100%',
    paddingBottom: '10%',
  },
  bgHero: {
    width: '100%',
    height: ResHeight(250),
    backfaceVisibility: 'visible',
    resizeMode: 'cover',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: ResWidth(20),
    paddingBottom: ResHeight(16),
  },
  Header: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: ResHeight(40),
  },
  titleHeader: {
    color: 'white',
    fontSize: ResWidth(24),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descHeader: {
    marginTop: ResHeight(8),
    color: 'white',
    fontSize: ResWidth(14),
    fontWeight: '300',
    textAlign: 'center',
    paddingRight: ResWidth(8),
    letterSpacing: 0.6,
  },
  feature: {
    display: 'flex',
    marginTop: ResHeight(10),
    flexDirection: 'row',
    justifyContent: 'center',
  },

  cardMoon: {
    marginTop: ResHeight(-50),
    paddingHorizontal: '5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapCard: {
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgCard: {
    width: ResWidth(336),
    height: ResHeight(200),
    resizeMode: 'contain',
    borderRadius: 20,
  },
  iconLock: {
    marginTop: 10,
    marginLeft: 10,
  },
  titleMoon: {
    fontSize: ResWidth(24),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 4,
    color: '#FFE7BF',
  },
  descMoon: {
    fontSize: ResWidth(14),
    fontWeight: '300',
    textAlign: 'center',
    paddingHorizontal: ResWidth(12),
    marginTop: 2,
    color: 'white',
  },
  ctaStart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ResHeight(8),
    backgroundColor: 'white',
    paddingHorizontal: ResWidth(12),
    paddingVertical: ResHeight(8),
    textAlign: 'center',
    borderRadius: 10,
    fontWeight: '600',
    color: '#3F414E',
  },
  cardPlaylist: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: ResWidth(20),
    marginTop: '4%',
    marginBottom: '1%',
    paddingBottom: '2%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Home;
