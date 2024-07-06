import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const Kategori = [
    {key: 'Home', label: 'Home'},
    {key: 'Series', label: 'Series'},
    {key: 'Movies', label: 'Movies'},
    {key: 'Anime', label: 'Anime'},
    {key: 'Sports', label: 'Sports'},
    {key: 'TV Shows', label: 'TV Shows'},
  ];

  return (
    <View>
      <View style={styles.container}>
        <StatusBar backgroundColor="#333" barStyle={'light-content'} />
        <View style={styles.headerTop}>
          <Text style={styles.logo}>RUANGFILM</Text>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <MaterialCommunityIcons name="magnify" size={30} color="#fff" />
            </TouchableOpacity>
            <MaterialCommunityIcons
              name="account-circle"
              size={30}
              color="#fff"
            />
          </View>
        </View>
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
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    elevation: 3,
  },
  logo: {
    fontSize: 30,
    color: '#ff0000',
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#222',
    borderRadius: 20,
    marginBottom: 8,
    marginTop: 10,
  },
  tabLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
