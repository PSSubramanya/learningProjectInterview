/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import LandingScreen from './src/screens/LandingScreen/LandingScreen';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigatore';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BottomTabNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
  // return <DrawerNavigator />;
  // return <BottomTabNavigator />;
};

export default App;
