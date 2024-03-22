import { View, Text } from 'react-native'
import React from 'react'
import {
  NavigationContainer,
  createNavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import Router from './src/Navigation/Router';
export const navigationRef = createNavigationContainerRef();
const App = () => {
  return (
    <>
       <NavigationContainer
        ref={navigationRef}
        // onStateChange={state => {
        //   analytics().logScreenView({
        //     screen_name: state.routes[state.index].name, //logging screen name to firebase Analytics
        //   });
        //   crashlytics().setAttributes({
        //     platform: Platform.OS,
        //     CrashedScreenName: state.routes[state.index].name,
        //   });
        // }}
        >
        <Router />
      </NavigationContainer>
    </>
  )
}

export default App