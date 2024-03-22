import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplaceScreen from '../Screen/SplaceScreen';
import LoadAdsScreen from '../Screen/LoadAdsScreen';
import BottomTabBar from './BottomTabBar';
import Setting from '../Screen/Setting';
import SoundDetails from '../Screen/SoundDetails';

const Stack = createNativeStackNavigator();
const screenOptions = {
    headerShown: false,
   
  
  };
const Router = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="SplaceScreen" component={SplaceScreen} />
      <Stack.Screen name="LoadAdsScreen" component={LoadAdsScreen} />
      <Stack.Screen name="BottomTabBar" component={BottomTabBar} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="SoundDetails" component={SoundDetails} />

    </Stack.Navigator>
  );
};

export default Router;
