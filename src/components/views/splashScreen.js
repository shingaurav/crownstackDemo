import React, {Component, useEffect} from 'react';
import {View, Text} from 'react-native';
import {StackActions, CommonActions} from '@react-navigation/native';

const splashScreen = ({navigation}) => {
  useEffect(() => {
    let timer = setTimeout(() => navigation.navigate('ListingScreen'), 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Splash Screen</Text>
    </View>
  );
};
export default splashScreen;
