import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Home, Sleep, Meditate, Music, Profile} from './../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  heroImage,
  IconHome,
  IconHomeActive,
  IconMeditate,
  IconMeditateActive,
  IconMusic,
  IconMusicActive,
  IconSleep,
  IconSleepActive,
  IconProfile,
  IconProfileActive,
} from './..//assets/img';
import Colors from './../assets/Colors';
import {ResHeight, ResWidth} from '../utils/responsive';

const Tab = createBottomTabNavigator();

const BottomNavigation = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.Basic_BG,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          height: ResHeight(70),
          width: '100%',
          bottom: 0,
          backgroundColor: Colors.Basic_BG,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,

          ...styles.tabBarStyling,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: ResHeight(8),
                paddingHorizontal: ResWidth(8),
                borderRadius: 10,
                backgroundColor: focused ? Colors.BUTTON_BG : Colors.Basic_BG,
              }}>
              <Image
                source={focused ? IconHomeActive : IconHome}
                style={{
                  height: ResWidth(23),
                  opacity: 0.8,
                }}
              />
              <Text
                style={{
                  fontSize: ResWidth(12),
                  marginTop: ResHeight(4),
                  color: focused ? Colors.FontColor : Colors.InActiveMenu,
                  opacity: focused ? 1 : 0.6,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Sleep"
        component={Sleep}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: ResHeight(8),
                paddingHorizontal: ResWidth(8),
                borderRadius: 10,
                backgroundColor: focused ? Colors.BUTTON_BG : Colors.Basic_BG,
              }}>
              <Image
                source={focused ? IconSleepActive : IconSleep}
                style={{height: ResWidth(23), opacity: 0.8}}
              />
              <Text
                style={{
                  fontSize: ResWidth(12),
                  marginTop: ResHeight(4),
                  color: focused ? Colors.FontColor : Colors.InActiveMenu,
                  opacity: focused ? 1 : 0.6,
                }}>
                Sleep
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Meditate"
        component={Meditate}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: ResHeight(8),
                paddingHorizontal: ResWidth(8),
                borderRadius: 10,
                backgroundColor: focused ? Colors.BUTTON_BG : Colors.Basic_BG,
              }}>
              <Image
                source={focused ? IconMeditateActive : IconMeditate}
                style={{height: ResWidth(23), opacity: 0.8}}
              />
              <Text
                style={{
                  fontSize: ResWidth(12),
                  marginTop: ResHeight(4),
                  color: focused ? Colors.FontColor : Colors.InActiveMenu,
                  opacity: focused ? 1 : 0.6,
                }}>
                Meditate
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Music"
        component={Music}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: ResHeight(8),
                paddingHorizontal: ResWidth(8),
                borderRadius: 10,
                backgroundColor: focused ? Colors.BUTTON_BG : Colors.Basic_BG,
              }}>
              <Image
                source={focused ? IconMusicActive : IconMusic}
                style={{
                  height: ResWidth(23),
                  opacity: 0.8,
                  width: ResWidth(28),
                }}
              />
              <Text
                style={{
                  fontSize: ResWidth(12),
                  marginTop: ResHeight(4),
                  color: focused ? Colors.FontColor : Colors.InActiveMenu,
                  opacity: focused ? 1 : 0.6,
                }}>
                Music
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: ResHeight(8),
                paddingHorizontal: ResWidth(8),
                borderRadius: 10,
                backgroundColor: focused ? Colors.BUTTON_BG : Colors.Basic_BG,
              }}>
              <Image
                source={focused ? IconProfileActive : IconProfile}
                style={{height: ResWidth(23), opacity: 0.8}}
              />
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 4,
                  color: focused ? Colors.FontColor : Colors.InActiveMenu,
                  opacity: focused ? 1 : 0.6,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabBarStyling: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
});
