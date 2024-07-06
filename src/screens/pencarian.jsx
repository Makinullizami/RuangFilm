import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';

const Pencarian = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = '5a6ca2b';

  const handleSearchChange = Movie => {
    setSearchMovie(Movie);
  };

  const searchMovies = async () => {
    if (!searchMovie.trim()) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchMovie}`,
      );
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchcontainer}>
          <TextInput
            placeholder="Masukkan nama"
            onChangeText={handleSearchChange}
            value={searchMovie}
            style={styles.search}
          />
          <TouchableOpacity onPress={searchMovies}>
            <MaterialCommunityIcons name="magnify" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.hasilsearch}>
        {loading ? (
          <Text style={{fontSize: 15, color: '#7F7878', textAlign: 'center'}}>
            Loading...
          </Text>
        ) : (
          <FlatList
            data={movies}
            keyExtractor={item => item.imdbID}
            renderItem={({item}) => (
              <View style={styles.movieItem}>
                {item.Poster !== 'N/A' && (
                  <Image
                    source={{uri: item.Poster}}
                    style={styles.moviePoster}
                  />
                )}
                <View style={styles.movieDetails}>
                  <Text style={styles.movieTitle}>{item.Title}</Text>
                  <Text style={styles.movieYear}>{item.Year}</Text>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};
export default Pencarian;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#333',
    height: 95,
    elevation: 3,
  },
  hasilsearch: {},

  searchcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 50,
    borderWidth: 1,
    marginVertical: 10,
    marginTop: 30,
    marginHorizontal: 5,
    borderColor: '#fff',
    backgroundColor: '#818181',
  },
  search: {
    width: 300,
  },
  movieItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D50000',
  },
  moviePoster: {
    width: 100,
    height: 125,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#D50000',
  },
  movieDetails: {
    justifyContent: 'center',
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  movieYear: {
    fontSize: 14,
    color: '#fff',
  },
});
