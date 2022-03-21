import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CardMusic from '../../components/Atoms/CardMusic';
import {ResHeight, ResWidth} from '../../utils/responsive';
import {CardNight, IconArrow} from '../../assets/img';
import Colors from '../../assets/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';

const DetailCategory = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.wrapPage}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            paddingBottom: ResHeight(10),
          }}>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('BottomNavigation', {screen: 'Home'})
              }>
              <Image
                source={IconArrow}
                style={{
                  width: ResWidth(40),
                  height: ResHeight(32),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: '80%'}}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: ResWidth(22),
              }}>
              Sleep Music
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.feature}>
            <CardMusic
              imgCard={CardNight}
              title="Night Island"
              desc="45 MIN . SLEEP MUSIC"
              onPress={() => navigation.navigate('DetailPage')}
            />
            <CardMusic
              imgCard={CardNight}
              title="Night Island"
              desc="45 MIN . SLEEP MUSIC"
              onPress={() => navigation.navigate('DetailPage')}
            />
          </View>
          <View style={styles.feature}>
            <CardMusic
              imgCard={CardNight}
              title="Night Island"
              desc="45 MIN . SLEEP MUSIC"
              onPress={() => navigation.navigate('DetailPage')}
            />
            <CardMusic
              imgCard={CardNight}
              title="Night Island"
              desc="45 MIN . SLEEP MUSIC"
              onPress={() => navigation.navigate('DetailPage')}
            />
          </View>
          <View style={styles.feature}>
            <CardMusic
              imgCard={CardNight}
              title="Night Island"
              desc="45 MIN . SLEEP MUSIC"
              onPress={() => navigation.navigate('DetailPage')}
            />
            <CardMusic
              imgCard={CardNight}
              title="Night Island"
              desc="45 MIN . SLEEP MUSIC"
              onPress={() => navigation.navigate('DetailPage')}
            />
          </View>
          <View style={styles.feature}>
            <CardMusic
              imgCard={CardNight}
              title="Night Island"
              desc="45 MIN . SLEEP MUSIC"
              onPress={() => navigation.navigate('DetailPage')}
            />
            <CardMusic
              imgCard={CardNight}
              title="Night Island"
              desc="45 MIN . SLEEP MUSIC"
              onPress={() => navigation.navigate('DetailPage')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default DetailCategory;

const styles = StyleSheet.create({
  wrapPage: {
    paddingHorizontal: ResWidth(20),
    paddingTop: ResHeight(8),
    backgroundColor: Colors.Basic_BG,
    flex: 1,
  },
  feature: {
    marginTop: ResHeight(10),
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
