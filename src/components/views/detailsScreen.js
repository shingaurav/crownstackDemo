import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default DetailsScreen = ({route, navigation}) => {
  const {data, _id} = route.params;
  console.log('getMusicData', data);
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'black'}}>
      <View style={{flex: 1}}>
        <Image
          source={{uri: data.item.artworkUrl100}}
          style={styles.ImgStyle}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center', alignItems: 'center'}}>
        <Text style={styles.headingtextStyle}>
          TrackName - {data.item.trackName}
        </Text>
        <Text style={styles.textStyle}>
          Collection Name - {data.item.collectionName}
        </Text>

        <Text style={styles.textStyle}>
          Release Date - {data.item.releaseDate}
        </Text>
        <Text style={styles.textStyle}>
          Artist Name - {data.item.artistName}
        </Text>
        <Text style={styles.textStyle}>
          Collection Price - {data.item.collectionPrice}
        </Text>
        <Text style={styles.textStyle}>
          TrackNumber - {data.item.trackNumber}
        </Text>
        <Text style={styles.textStyle}>
          TrackCount - {data.item.trackCount}
        </Text>

        <Text style={styles.textStyle}>Country - {data.item.country}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingtextStyle: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
    marginTop: 10,
  },
  textStyle: {color: 'white', fontSize: 15, marginTop: 10, fontWeight: '600'},
  ImgStyle: {
    height: 400,
    width: '100%',
    resizeMode: 'contain',
  },
});
