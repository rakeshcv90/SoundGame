import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColor} from '../Component/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DeviceHight, DeviceWidth} from '../Config/Confige';
import {localImage} from '../Component/Image';
import Slider from '@react-native-community/slider';
import {VolumeManager} from 'react-native-volume-manager';
import CheckBox from 'react-native-check-box';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

import TrackPlayer, {
  Capability,
  usePlaybackState,
  useProgress,
  State,
  RepeatMode,
} from 'react-native-track-player';
import {fartSound} from '../Component/Data';

const setupPlayer = async () => {
  try {
    // await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
      // compactCapabilities: [Capability.Play, Capability.Pause],
    });
    await TrackPlayer.add(songs);
  } catch (error) {
    console.log('Music Player Error', error);
  }
};
const togglePlayback = async playbackState => {
  if (
    playbackState.state === State.Paused ||
    playbackState.state === State.Ready ||
    playbackState.state === State.Ended
  ) {
    await TrackPlayer.play();
  } else {
    await TrackPlayer.pause();
  }
};
const songs = [
  {
    title: 'song 1',
    artist: 'XYZ',
    // artwork: localImage.Play3,
    url: require('../Icon/Sound/fat.mp3'),
    // url: route.params.item.exercise_mindset_audio,
  },
];
const SoundDetails = ({navigation, route}) => {
  VolumeManager.showNativeVolumeUI({enabled: true});

  const dataItems = route.params.item;
  const [pause, setPause] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const playbackState = usePlaybackState();
  const progress = useProgress();
  const [repeatMode, setRepeatMode] = useState('off');
  const [checked, setChecked] = useState(true);
  useEffect(() => {
    setupPlayer();
    VolumeManager.getVolume().then(volume => setVolume(volume));
  }, []);

  const changeRepeatMode = data => {
    if (repeatMode == 'off') {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeatMode('track');
    }

    if (repeatMode == 'track') {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatMode('repeat');
    }

    if (repeatMode == 'repeat') {
      TrackPlayer.setRepeatMode(RepeatMode.Off);
      setRepeatMode('off');
    }
  };
  const onVolumeChange = async value => {
    setVolume(value);
    await VolumeManager.setVolume(value);
  };
  const ListItem = ({title}) => {
    return (
      <View
        style={{
          alignItems: 'center',

          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: DeviceHight * 0.1,
            height: DeviceHight * 0.1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: title.color,
            borderRadius: 20,

            marginVertical: DeviceWidth * 0.02,
            marginHorizontal:
              Platform.OS == 'ios' ? DeviceWidth * 0.05 : DeviceWidth * 0.05,
          }}>
          <Image
            source={localImage.Fart1}
            style={{
              width: DeviceHight * 0.1,
              height: DeviceHight * 0.08,
              borderRadius: 20,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={{color: AppColor.BLACK, fontSize: 13, fontWeight: '400'}}>
          {title.title}
        </Text>
      </View>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={AppColor.BACKGROUND} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                TrackPlayer.reset();
                navigation.goBack();
                TrackPlayer.setRepeatMode(RepeatMode.Off);
              }}>
              <Icon name="arrow-left" size={30} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: AppColor.BLACK,
                marginHorizontal: 20,
              }}>
              {dataItems.title}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: 70}}>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('Setting');
              }}>
              <Icon name="share-variant-outline" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{left: 50}}
              onPress={() => {
                // navigation.navigate('Setting');
              }}>
              <Icon name="cards-heart" size={30} color={'red'} />
              {/* <Icon name="heart-outline" size={30} /> */}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: 250,
            height: 250,
            backgroundColor: 'red',
            borderRadius: 500 / 2,
            alignItems: 'center',
            alignSelf: 'center',
            marginVertical: 30,
            justifyContent: 'center',
          }}>
          <Image
            source={localImage.Fart1}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            
                if (checked) {
                 // 
                  console.log("FFFFFFFFf11111",checked)
                  togglePlayback(playbackState);
                  changeRepeatMode();
                } else {
                  console.log("FFFFFFFFf",checked)
                  togglePlayback(playbackState);
                 }
            // togglePlayback(playbackState);
            if (!pause) {
              setPause(true);
              togglePlayback(playbackState);
              // TrackPlayer.reset();
            } else {
              setPause(false);
            }
          }}
          style={{
            width: 90,
            height: 50,
            backgroundColor: 'red',
            borderRadius: 15,
            alignItems: 'center',
            alignSelf: 'center',
            marginVertical: 20,
            justifyContent: 'center',
          }}>
          <Icon
            name={!pause ? 'play' : 'pause'}
            // name={playbackState.state === State.Playing ? 'pause' : 'play'}
            size={40}
            color={AppColor.WHITE}
          />
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            height:Platform.OS=='android'?50:DeviceHight*0.15,

            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Text>Loop</Text>
            <CheckBox
              style={{padding: 5}}
              onClick={() => {
                setChecked(!checked);
                // if (!checked) {
                //   changeRepeatMode();
                //   console.log("FFFFFFFFf11111",checked)
                // } else {
                //   console.log("FFFFFFFFf",checked)
                // }
                //   if (repeatMode == 'off') {
                //     TrackPlayer.setRepeatMode(RepeatMode.Off);
                //     setRepeatMode('track');
                //   }

                //   if (repeatMode == 'track') {
                //     TrackPlayer.setRepeatMode(RepeatMode.Off);
                //     setRepeatMode('off');
                //   }

                //   if (repeatMode == 'repeat') {
                //     TrackPlayer.setRepeatMode(RepeatMode.Off);
                //     setRepeatMode('off');
                //   }

                //   //TrackPlayer.setRepeatMode(RepeatMode.Queue);
                // }
                // changeRepeatMode(!checked)
              }}
              isChecked={checked}
              // leftText={'CheckBox'}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: DeviceHight * 0.05,

            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Icon name="volume-medium" size={40} />
          <Slider
            // value={volume}
            maximumValue={1}
            minimumValue={0}
            minimumTrackTintColor="red"
            thumbTintColor={'red'}
            trackStyle={{height: 15, borderRadius: 20}}
            style={styles.slider}
            onValueChange={value => {
              // setVolume(value);
              onVolumeChange(value);
            }}
          />

          <Icon name="volume-high" size={40} />
        </View>
        <View
          style={{
            width: '100%',
            height: DeviceHight * 0.17,
            justifyContent: 'center',
            bottom: 5,

            alignItems: 'center',
            position: 'absolute',
          }}>
          <View
            style={{
              backgroundColor: '#F2F2F2',
              width: '95%',
              paddingLeft:5,
              paddingRight:5,
              borderRadius: 20,
            }}>
            <FlatList
              data={fartSound}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => {
                return <ListItem title={item} />;
              }}
              initialNumToRender={10}
              maxToRenderPerBatch={5}
              updateCellsBatchingPeriod={100}
              removeClippedSubviews={true}
              windowSize={10}
            />
          </View>
        </View>
       
      </SafeAreaView>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
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
export default SoundDetails;
