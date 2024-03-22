import {View, Text, Animated, StyleSheet, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {localImage} from '../Component/Image';
import {DeviceHight, DeviceWidth} from '../Config/Confige';

const SplaceScreen = ({navigation}) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoadAdsScreen');
    }, 3000);
    const animateProgressBar = () => {
      Animated.timing(progress, {
        toValue: 1,
        duration: 2000, // Adjust duration as neededr
        useNativeDriver: false,
      }).start(({finished}) => {
        if (finished) {
          // Reset progress to 0 and start animation again
          progress.setValue(0);
          animateProgressBar();
        }
      });
    };

    animateProgressBar();

    // Cleanup animation on unmount if needed
    return () => {
      progress.stopAnimation();
    };
  }, []);

  const widthInterpolation = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const colorInterpolation = progress.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)'],
  });

  return (
    <View style={{flex: 1, backgroundColor: '#FFFDD0'}}>
      <View
        style={{
          flex: 1,

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderRadius: 20,
            width: DeviceWidth * 0.5,
            height: DeviceHight * 0.2,
            backgroundColor: 'red',
            marginVertical: 20,
          }}>
          <Image
            source={localImage.Fart}
            resizeMode="stretch"
            style={{width: '100%', height: '100%', borderRadius: 20}}
          />
        </View>
        <Text style={{fontSize: 40, fontWeight: '700', color: '#000'}}>
          Funny Sounds
        </Text>
      </View>

      <View style={styles.container}>
        <Animated.View
          style={[
            styles.progressBar,
            {width: widthInterpolation, backgroundColor: colorInterpolation},
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '70%',
    height: 10,
    borderRadius: 50,
    marginBottom: 50,
    alignSelf: 'center',
    backgroundColor: 'lightgray',
  },
  progressBar: {
    height: '100%',
    borderRadius: 50,
  },
});
export default SplaceScreen;
