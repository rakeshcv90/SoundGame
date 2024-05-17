import {View, Text, Platform} from 'react-native';
import React from 'react';

import {CommonActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screen/Home';
import Trending from '../Screen/Trending';
import Fevorite from '../Screen/Fevorite';
import VoiceChanger from '../Screen/VoiceChanger';
import Profile from '../Screen/Profile';

const Tab = createBottomTabNavigator();
const BottomTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
          left: 0,
          elevation: 0,
          height: Platform.OS == 'android' ? 65 : 85,
          backgroundColor: '#E9E9E9',
        },
      }}
      // tabBar={({navigation, state, descriptors, insets}) => (
      //   <BottomNavigation.Bar
      //     navigationState={state}
      //     safeAreaInsets={insets}
      //     onTabPress={({route, preventDefault}) => {
      //       const event = navigation.emit({
      //         type: 'tabPress',
      //         target: route.key,
      //         canPreventDefault: true,
      //       });

      //       if (event.defaultPrevented) {
      //         preventDefault();
      //       } else {
      //         navigation.dispatch({
      //           ...CommonActions.navigate(route.name, route.params),
      //           target: state.key,
      //         });
      //       }
      //     }}
      //     renderIcon={({route, focused, color}) => {
      //       const {options} = descriptors[route.key];
      //       if (options.tabBarIcon) {
      //         return options.tabBarIcon({focused, color, size: 24});
      //       }

      //       return null;
      //     }}

      //     getLabelText={({route, focused}) => {
      //       const {options} = descriptors[route.key];
      //       const focus = state.routes[state.index].name === route.name

      //       return (
      //         <Text style={{color: focus ? 'red' : '#000',fontSize:focus ? 14 : 12}}>
      //           {options.tabBarLabel}
      //         </Text>
      //       );
      //     }}
      //   />
      // )}
    >
      <Tab.Screen
        name="Trending"
        component={Trending}
        options={{
          tabBarLabel: 'Trending',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  top: Platform.OS == 'ios' && 10,
                }}>
                <Icon
                  name="cog"
                  size={focused ? 27 : 25}
                  color={focused ? '#FF0000' : color}
                />
                <Text style={{color:'#202020'}}>Trending</Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="SoundChanger"
        component={VoiceChanger}
        options={{
          tabBarLabel: 'Sound',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: Platform.OS == 'ios' && 10,
                }}>
                <Icon
                  name="home"
                  size={focused ? 27 : 25}
                  color={focused ? '#FF0000' : color}
                />
                <Text style={{color:'#202020'}}>Sound</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: Platform.OS == 'ios' ? -15 : -20,
                  width: Platform.OS == 'ios' ? 60 : 60,
                  height: Platform.OS == 'ios' ? 60 : 60,
                  borderRadius: Platform.OS == 'ios' ? 30 : 30,
                  backgroundColor: 'red',
                  ...Platform.select({
                    ios: {
                      shadowColor: 'rgba(0, 0, 0, 0.9)',
                      shadowOpacity: 0.5,
                      shadowRadius: 5,
                      shadowOffset: {
                        height: 5,
                        width: 5,
                      },
                    },
                    android: {
                      elevation: 50,
                      // backgroundColor: 'rgba(0, 0, 0, 0)',
                    },
                  }),
                }}>
                <Icon
                  name="home"
                  size={focused ? 27 : 25}
                  color={focused ? '#FFF' : color}
                />
                <Text style={{color: 'white', fontFamily: 'b'}}>Home</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Fevorite"
        component={Fevorite}
        options={{
          tabBarLabel: 'Fevorite',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: Platform.OS == 'ios' && 10,
                }}>
                <Icon
                  name="heart-outline"
                  size={focused ? 27 : 25}
                  color={focused ? '#FF0000' : color}
                />
                <Text style={{color:'#202020'}}>Fevorite</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Fevorite',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: Platform.OS == 'ios' && 10,
                }}>
                <Icon
                  name="heart-outline"
                  size={focused ? 27 : 25}
                  color={focused ? '#FF0000' : color}
                />
                <Text style={{color:focused ? '#FF0000' : color}}>Profile</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
