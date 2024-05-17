import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import {AppColor} from '../Component/Color';
import {DeviceHight, DeviceWidth} from '../Config/Confige';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const VoiceChanger = () => {
  const [pause, setPause] = useState(false);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={AppColor.BACKGROUND}
        />
        <TouchableOpacity
          onPress={() => {
            if (!pause) {
              setPause(true);
            } else {
              setPause(false);
            }
          }}
          style={{
            width: 70,
            height: 70,
            backgroundColor: 'white',
            borderRadius: 70 / 2,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            top: 100,
            borderWidth: 0.5,
          }}>
          <Icon name={!pause ? 'record' : 'pause'} size={50} />    
       
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.BACKGROUND,
  },
  slider: {
    width: DeviceWidth * 0.65,
  },

  content1: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    height: DeviceHight * 0.15,
    marginTop: 100, // adjust the height as per your requirement
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default VoiceChanger;
