import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  Button,
} from 'react-native';
const cardNight = require('./../../assets/card-night.png');
const bgImage = require('./../../assets/ornamen.png');
const bgCard = require('./../../assets/hero-card-background.png');
const cardSleep = require('./../../assets/card-sleep.png');
const cardSweet = require('./../../assets/card-sweet.png');
const cardMoon = require('./../../assets/card-moon.png');
import Colors from './../../assets/Colors';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View showsVerticalScrollIndicator vertical>
          <ImageBackground source={bgImage} style={styles.bgHero}>
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
                  <View style={styles.cardFeature}>
                    <View style={styles.wrapIcon}>
                      <Image
                        style={styles.iconFeature}
                        source={require('./../../assets/icon-all.png')}
                      />
                    </View>
                    <Text style={styles.textFeature}>All</Text>
                  </View>

                  {/* card 2 */}
                  <View style={styles.cardFeature}>
                    <View style={styles.wrapIconOther}>
                      <Image
                        style={styles.iconFeature}
                        source={require('./../../assets/icon-love.png')}
                      />
                    </View>
                    <Text style={styles.textFeature}>My</Text>
                  </View>

                  {/* card 3 */}
                  <View style={styles.cardFeature}>
                    <View style={styles.wrapIconOther}>
                      <Image
                        style={styles.iconFeature}
                        source={require('./../../assets/icon-anxious.png')}
                      />
                    </View>
                    <Text style={styles.textFeature}>Anxious</Text>
                  </View>

                  {/* card 4 */}
                  <View style={styles.cardFeature}>
                    <View style={styles.wrapIconOther}>
                      <Image
                        style={styles.iconFeature}
                        source={require('./../../assets/icon-sleep.png')}
                      />
                    </View>
                    <Text style={styles.textFeature}>Sleep</Text>
                  </View>

                  {/* card 5 */}
                  <View style={styles.cardFeature}>
                    <View style={styles.wrapIconOther}>
                      <Image
                        style={styles.iconFeature}
                        source={require('./../../assets/icon-kids.png')}
                      />
                    </View>
                    <Text style={styles.textFeature}>Kids</Text>
                  </View>

                  {/* card 6 */}
                  <View style={styles.cardFeature}>
                    <View style={styles.wrapIconOther}>
                      <Image
                        style={styles.iconFeature}
                        source={require('./../../assets/icon-love.png')}
                      />
                    </View>
                    <Text style={styles.textFeature}>My</Text>
                  </View>

                  {/* card 7 */}
                  <View style={styles.cardFeature}>
                    <View style={styles.wrapIconOther}>
                      <Image
                        style={styles.iconFeature}
                        source={require('./../../assets/icon-anxious.png')}
                      />
                    </View>
                    <Text style={styles.textFeature}>Anxious</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </ImageBackground>
          {/* Akhir isi */}

          {/* Awal card moon */}
          <View style={styles.cardMoon}>
            <ImageBackground source={bgCard} style={styles.bgCard}>
              <View style={styles.wrapCard}>
                <Image
                  source={require('./../../assets/icon-lock.png')}
                  style={styles.iconLock}
                />
                <Text style={styles.titleMoon}>The Ocean Moon</Text>
                <Text style={styles.descMoon}>
                  Non-stop 8- hour mixes of our most popular sleep audio
                </Text>
                <Text style={styles.ctaStart}>START</Text>
              </View>
            </ImageBackground>
          </View>

          {/* Bagian card bawah 1*/}
          <ScrollView horizontal style={styles.cardPlaylist}>
            <View style={styles.card1}>
              <Image source={cardNight} style={styles.imgCard} />
              <Text style={styles.titleCardNight}>Night Island</Text>
              <Text style={styles.descCardNight}>45 MIN . SLEEP MUSIC</Text>
            </View>
            <View style={styles.card1}>
              <Image source={cardSleep} style={styles.imgCard} />
              <Text style={styles.titleCardNight}>Sweet Sleep</Text>
              <Text style={styles.descCardNight}>45 MIN . SLEEP MUSIC</Text>
            </View>
            <View style={styles.card1}>
              <Image source={cardNight} style={styles.imgCard} />
              <Text style={styles.titleCardNight}>Night Island</Text>
              <Text style={styles.descCardNight}>45 MIN . SLEEP MUSIC</Text>
            </View>
            <View style={styles.card1}>
              <Image source={cardMoon} style={styles.imgCard} />
              <Text style={styles.titleCardNight}>Moon Clouds</Text>
              <Text style={styles.descCardNight}>45 MIN . SLEEP MUSIC</Text>
            </View>
          </ScrollView>

          {/* Bagian card bawah 2*/}
          <ScrollView horizontal style={styles.cardPlaylist}>
            <View style={styles.card1}>
              <Image source={cardNight} style={styles.imgCard} />
              <Text style={styles.titleCardNight}>Night Island</Text>
              <Text style={styles.descCardNight}>45 MIN . SLEEP MUSIC</Text>
            </View>
            <View style={styles.card1}>
              <Image source={cardSleep} style={styles.imgCard} />
              <Text style={styles.titleCardNight}>Sweet Sleep</Text>
              <Text style={styles.descCardNight}>45 MIN . SLEEP MUSIC</Text>
            </View>
            <View style={styles.card1}>
              <Image source={cardNight} style={styles.imgCard} />
              <Text style={styles.titleCardNight}>Night Island</Text>
              <Text style={styles.descCardNight}>45 MIN . SLEEP MUSIC</Text>
            </View>
            <View style={styles.card1}>
              <Image source={cardMoon} style={styles.imgCard} />
              <Text style={styles.titleCardNight}>Moon Clouds</Text>
              <Text style={styles.descCardNight}>45 MIN . SLEEP MUSIC</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03174C',
    width: '100%',
    height: '100%',
  },
  bgHero: {
    width: '100%',
    height: 250,
    backfaceVisibility: 'visible',
    resizeMode: 'cover',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  Header: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 40,
  },
  titleHeader: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  descHeader: {
    marginTop: 8,
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
    paddingRight: 8,
    letterSpacing: 0.6,
  },
  feature: {
    display: 'flex',
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardFeature: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: 12,
  },
  wrapIcon: {
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#8E97FD',
  },
  wrapIconOther: {
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#586894',
  },
  textFeature: {
    marginTop: 12,
    color: 'white',
    textAlign: 'center',
  },
  cardMoon: {
    marginTop: 16,
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
    width: 336,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  iconLock: {
    marginTop: 10,
    marginLeft: 10,
  },
  titleMoon: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 4,
    color: '#FFE7BF',
  },
  descMoon: {
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
    paddingHorizontal: 12,
    marginTop: 2,
    color: 'white',
  },
  ctaStart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 8,
    textAlign: 'center',
    borderRadius: 10,
    fontWeight: '600',
    color: '#3F414E',
  },
  cardPlaylist: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: '4%',
    marginBottom: '1%',
    paddingBottom: '2%',
    // backgroundColor: 'red',
  },
  card1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: 14,
  },
  imgCard: {
    width: 180,
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

export default Home;
