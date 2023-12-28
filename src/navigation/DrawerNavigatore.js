import React from 'react';
import LandingScreen from '../screens/LandingScreen/LandingScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BottomTabNavigator from './BottomTabNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="LandingScreen">
      <Drawer.Screen name="LandingScreen" component={BottomTabNavigator} />
      {/* <Drawer.Screen name="LandingScreen" component={LandingScreen} /> */}
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
