import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  Button,
  SafeAreaView,
} from 'react-native';
import Router from './Router';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};
export default App;
