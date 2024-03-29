import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Login,
  Register,
  OnBoarding,
  DetailPage,
  MusicPlayer,
  DetailCategory,
} from './../pages';
import Splash from './../pages/Splash';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MusicPlayer"
        component={MusicPlayer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailCategory"
        component={DetailCategory}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
