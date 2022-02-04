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
import Router from './Router';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    // <Splash />
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
