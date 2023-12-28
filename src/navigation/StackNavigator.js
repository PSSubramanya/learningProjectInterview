import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LandingScreen from '../screens/LandingScreen/LandingScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LandingScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
