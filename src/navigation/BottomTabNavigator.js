import React from 'react';
import StackNavigator from './StackNavigator';
import LandingScreen from '../screens/LandingScreen/LandingScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="LandingScreen"
      // screenOptions={{
      //   tabBarActiveTintColor: '#e91e63',
      // }}
      screenOptions={{
        headerShown: false,
      }}
      //   initialParams={{reset: true}}
    >
      <Tab.Screen name="LandingScreen" component={StackNavigator} />
      {/* <Tab.Screen name="HomeScreen" component={StackNavigator} /> */}
      {/* <Tab.Screen name="LandingScreen" component={LandingScreen} /> */}
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
