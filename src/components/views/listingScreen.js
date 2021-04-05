import React, {Component, useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
  Dimensions,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

export default function listingScreen({navigation}) {
  const [musicData, setMusicData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loader, setLoader] = useState(false);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoader(true);
    axios
      .get('https://itunes.apple.com/search?term=Michael+jackson')
      .then(response => {
        setMusicData(response.data.results);
        setLoader(false);
        console.log(response.data.results, 'console of result object');
      });
  };

  function onRefresh() {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  }
  const renderListItem = (item, index) => {
    console.log('data of our item', item);

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetailsScreen', {data: item, _id: item})
        }>
        <View
          style={{
            flex: 1,
            height: 100,

            backgroundColor: 'black',
          }}>
          <View
            style={{
              justifyContent: 'center',

              flexDirection: 'row',
            }}>
            <View style={{flex: 1.3, backgroundColor: 'black'}}>
              <Image
                source={{uri: item.item.artworkUrl100}}
                style={styles.ImgStyle}
              />
            </View>
            <View style={{flex: 3}}>
              <Text style={styles.headingtextStyle}>{item.item.trackName}</Text>
              <Text style={styles.textStyle}>
                {item.item.artistName} - {item.item.trackName}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 0.2,
              backgroundColor: 'black',
              marginTop: 10,
              width: '100%',
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  if (loader) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#e4f1fd',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Please Wait...</Text>
        <ActivityIndicator size="large" color={'blue'} />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        data={musicData}
        onRefresh={() => onRefresh()}
        keyExtractor={(item, index) => index.toString()}
        refreshing={refresh}
        renderItem={renderListItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headingtextStyle: {color: 'white', fontWeight: '800', fontSize: 18},
  textStyle: {color: 'white', fontSize: 12},
  ImgStyle: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
