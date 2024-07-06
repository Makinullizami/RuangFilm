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

const hollywoodImage = require('../image/hollywood.png');
const kingImage = require('../image/king.png');
const musikImage = require('../image/musik.png');
const religiImage = require('../image/religi.png');
const animeImage = require('../image/anime.png');
const actionImage = require('../image/action.png');
const a = require('../image/1.jpeg');
const b = require('../image/2.jpg');
const c = require('../image/5.jpg');
const d = require('../image/6.jpg');
const e = require('../image/7.jpg');
const f = require('../image/8.jpeg');
const g = require('../image/9.jpg');
const h = require('../image/10.webp');
const i = require('../image/11.jpg');
const j = require('../image/12.jpg');

const Home = () => {
  const navigation = useNavigation();

  const carouselItems = [
    {
      image:
        'https://i.pinimg.com/originals/06/08/65/060865904442cb68a717d71d4d97813c.jpg',
    },
    {
      image:
        'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-india-movie-poster-design-bollywood-padmaavat.jpg',
    },
    {
      image:
        'http://anniehaydesign.weebly.com/uploads/9/5/4/6/95469676/landscape-poster-2_orig.jpg',
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
  const Trending = [
    {key: 'Series', image: a},
    {key: 'Movies', image: b},
    {key: 'Anime', image: c},
    {key: 'Sports', image: d},
    {key: 'TV Shows', image: e},
  ];
  const Romance = [
    {key: 'Series', image: f},
    {key: 'Movies', image: g},
    {key: 'Anime', image: h},
    {key: 'Sports', image: i},
    {key: 'TV Shows', image: j},
  ];
  const Saluran = [
    {key: 'Home', label: 'Hollywood', image: hollywoodImage},
    {key: 'Series', label: 'King', image: kingImage},
    {key: 'Movies', label: 'Musik', image: musikImage},
    {key: 'Anime', label: 'Religi', image: religiImage},
    {key: 'Sports', label: 'Anime', image: animeImage},
    {key: 'TV Shows', label: 'Action', image: actionImage},
  ];

  return (
    <ScrollView style={{backgroundColor: '#000', flex: 1}}>
      <StatusBar backgroundColor="#333" barStyle={'light-content'} />
      <View style={styles.headerTop}>
        <Text style={styles.logo}>RUANGFILM</Text>
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
          data={Trending}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail')}
              style={styles.salurantrending}>
              <Image source={item.image} style={styles.trendingImage} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key}
          contentContainerStyle={styles.flatListContainer}
        />
        <Text style={styles.txtkategori}>Romance</Text>
        <FlatList
          data={Romance}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail')}
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

export default Home;

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
    backgroundColor: '#D50000',
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
