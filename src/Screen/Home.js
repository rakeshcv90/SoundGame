import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Platform,
  Image,
} from 'react-native';
import React from 'react';
import {AppColor} from '../Component/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {localImage} from '../Component/Image';
import {listData} from '../Component/Data';
import {DeviceHight, DeviceWidth} from '../Config/Confige';

const Home = ({navigation}) => {
  const ListItem = ({title}) => {
    return (
      <View
        style={{
          alignItems: 'center',

          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SoundDetails',{item: title})
          }}
          style={{
            width: DeviceHight * 0.18,
            height: DeviceHight * 0.15,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: title.color,
            borderRadius: 20,

            marginVertical: DeviceWidth * 0.04,
            marginHorizontal:
              Platform.OS == 'ios' ? DeviceWidth * 0.05 : DeviceWidth * 0.05,
          }}>
          <Image
            source={title.image}
            style={{
              width: DeviceHight * 0.15,
              height: DeviceHight * 0.13,
              borderRadius: 20,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={{color: AppColor.BLACK, fontSize: 18, fontWeight: '700'}}>
          {title.title}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={AppColor.BACKGROUND} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginVertical: 10,

          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <Text style={{fontSize: 20, fontWeight: '700', color: AppColor.BLACK}}>
          Funny Sounds
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          <Icon name="cog" size={25} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignSelf: 'center',
          alignContent: 'center',

          //width:'100%'
        }}>
        <FlatList
          data={listData}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 50}}
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
    </SafeAreaView>
  );
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.BACKGROUND
  },
});
export default Home;
