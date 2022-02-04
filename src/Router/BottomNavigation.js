import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Home, Sleep, Meditate, Music, Profile} from './../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  // Tab.Navigator ini nampung bottom menu
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{headerShown: false}} component={Home} />
      <Tab.Screen
        name="Sleep"
        options={{headerShown: false}}
        component={Sleep}
      />
      <Tab.Screen
        name="Meditate"
        options={{headerShown: false}}
        component={Meditate}
      />
      <Tab.Screen
        name="Music"
        options={{headerShown: false}}
        component={Music}
      />
      <Tab.Screen
        name="Profile"
        options={{headerShown: false}}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
