import {View, Text} from 'react-native';
import React from 'react';

import {CommonActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screen/Home';
import Trending from '../Screen/Trending';
import Fevorite from '../Screen/Fevorite';

const Tab = createBottomTabNavigator();
const BottomTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({route, preventDefault}) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({route, focused, color}) => {
            const {options} = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({focused, color, size: 24});
            }

            return null;
          }}
          //   getLabelText={({ route ,focused,color }) => {
          //     const { options } = descriptors[route.key];

          //     const label =
          //       options.tabBarLabel !== undefined
          //         ? options.tabBarLabel
          //         : options.title !== undefined
          //         ? options.title
          //         : route.title;

          //         return label
          //   }}
          getLabelText={({route, focused}) => {
            const {options} = descriptors[route.key];
            const focus = state.routes[state.index].name === route.name

            return (
              <Text style={{color: focus ? 'red' : '#000',fontSize:focus ? 14 : 12}}>
                {options.tabBarLabel}
              </Text>
            );
          }}
        />
      )}>
      <Tab.Screen
        name="Trending"
        component={Trending}
        options={{
          tabBarLabel: 'Trending',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Icon
                name="cog"
                size={focused ? 27 : 25}
                color={focused ? '#FF0000' : color}
              />
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
              <Icon
                name="home"
                size={focused ? 27 : 25}
                color={focused ? '#FF0000' : color}
              />
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
              <Icon
                name="heart-outline"
                size={focused ? 27 : 25}
                color={focused ? '#FF0000' : color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
