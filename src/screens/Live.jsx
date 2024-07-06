import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

const indosiarImage = require('../image/indosiar.png');
const globaltvImage = require('../image/globaltv.png');
const metrotvImage = require('../image/metrotv.png');
const tvoneImage = require('../image/tvone.png');
const rctiImage = require('../image/rcti.png');
const mnctvImage = require('../image/mnctv.png');
const k = require('../image/13.webp');
const l = require('../image/14.webp');
const m = require('../image/15.jpg');
const n = require('../image/16.jpg');
const o = require('../image/17.jpg');
const p = require('../image/18.jpg');
const q = require('../image/19.jpg');
const r = require('../image/20.jpg');
const s = require('../image/21.jpg');
const t = require('../image/22.jpg');

const Live = () => {
  const navigation = useNavigation();

  const carouselItems = [
    {
      image:
        'https://m.media-amazon.com/images/M/MV5BNDM4OTU0ZGYtODgyYy00YTc3LTlhNjktOTAyODA3ZmJkOWIxXkEyXkFqcGdeQXVyNjQyNTYzMzY@._V1_FMjpg_UX1000_.jpg',
    },
    {
      image:
        'https://www.ngopibareng.id/images/imagecache/20210201220134ikatan.jpg',
    },
    {
      image:
        'https://cdn0-production-images-kly.akamaized.net/6kJHQG1utiBjfgYTvkSWYdAaCM4=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3955882/original/012341900_1646721709-Vidio_Sinetron_-_Nania_Lain_Dunia_-_Main_Poster_-_Landscape_-_Nonton_Sekarang.jpg',
    },
  ];

  const Kategori = [
    {key: 'Home', label: 'Home'},
    {key: 'Series', label: 'Series'},
    {key: 'Movies', label: 'Movies'},
    {key: 'Anime', label: 'Anime'},
    {key: 'Sports', label: 'Sports'},
    {key: 'TV Shows', label: 'TV Shows'},
  ];
  const TrendingLive = [
    {key: 'Series', image: k},
    {key: 'Movies', image: l},
    {key: 'Anime', image: m},
    {key: 'Sports', image: n},
    {key: 'TV Shows', image: o},
  ];
  const RomanceLive = [
    {key: 'Series', image: p},
    {key: 'Movies', image: q},
    {key: 'Anime', image: r},
    {key: 'Sports', image: s},
    {key: 'TV Shows', image: t},
  ];
  const Saluran = [
    {key: 'Home', label: 'Indosiar', image: indosiarImage},
    {key: 'Series', label: 'Global tv', image: globaltvImage},
    {key: 'Movies', label: 'Metro tv', image: metrotvImage},
    {key: 'Anime', label: 'tv one', image: tvoneImage},
    {key: 'Sports', label: 'Rcti', image: rctiImage},
    {key: 'TV Shows', label: 'Mnctv', image: mnctvImage},
  ];

  return (
    <ScrollView style={{backgroundColor: '#000', flex: 1}}>
      <StatusBar backgroundColor="#333" barStyle={'light-content'} />
      <View style={styles.headerTop}>
        <Text style={styles.logo}>LIVE</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MaterialCommunityIcons name="magnify" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <MaterialCommunityIcons
              name="account-circle"
              size={30}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor: '#333'}}>
        <FlatList
          data={Kategori}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabLabel}>{item.label}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
      <View>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay={true}
          loop={true}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}>
          {carouselItems.map((item, index) => (
            <View style={styles.slide} key={index}>
              <Image source={{uri: item.image}} style={styles.carouselImage} />
            </View>
          ))}
        </Swiper>
        <FlatList
          data={Saluran}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.saluran}>
              <Image source={item.image} style={styles.channelImage} />
              <Text style={styles.tabLabelimage}>{item.label}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key}
          contentContainerStyle={styles.flatListContainer}
        />
        <Text style={styles.txtkategori}>Trending Film</Text>
        <FlatList
          data={TrendingLive}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Detail', {TrendingLive: item.image})
              }
              style={styles.salurantrending}>
              <Image source={item.image} style={styles.trendingImage} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key}
          contentContainerStyle={styles.flatListContainer}
        />
        <Text style={styles.txtkategori}>Romance</Text>
        <FlatList
          data={RomanceLive}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Detail', {RomanceLive: item.image})
              }
              style={styles.salurantrending}>
              <Image source={item.image} style={styles.trendingImage} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </ScrollView>
  );
};

export default Live;

const styles = StyleSheet.create({
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#333',
  },
  logo: {
    fontSize: 30,
    color: '#D50000',
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  flatListContainer: {
    paddingVertical: 10,
  },
  tab: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#222',
    borderRadius: 20,
    marginTop: 5,
    height: 35,
    width: 100,
    marginBottom: 5,
  },
  tabLabel: {
    color: '#fff',
    fontSize: 16,
  },
  wrapper: {
    height: 200,
    marginBottom: 10,
    margin: 10,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    marginRight: 15,
  },
  carouselImage: {
    width: 400,
    height: 250,
  },
  dotStyle: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDotStyle: {
    backgroundColor: '#D50000',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  saluran: {
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  channelImage: {
    width: 50,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 80,
  },
  tabLabelimage: {
    fontSize: 11,
    color: '#fff',
  },
  txtkategori: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 13,
  },
  salurantrending: {
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  trendingImage: {
    width: 200,
    height: 110,
    marginBottom: 5,
    borderRadius: 10,
  },
});
