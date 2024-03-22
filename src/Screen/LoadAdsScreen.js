import {View, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

const LoadAdsScreen = ({navigation}) => {
    const [loadAds,setloadAds]=useState(false)
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('BottomTabBar');
          }, 3000);
    },[])
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFDD0',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
    
      <View style={{flexDirection: 'row',alignItems:'center'}}>
        <ActivityIndicator
          animating={true}
          color={MD2Colors.red800}
          style={{marginHorizontal: 20}}
          size={40}
        />
        <Text >Loading Advertisements</Text>
      </View>
    </View>
  );
};

export default LoadAdsScreen;
