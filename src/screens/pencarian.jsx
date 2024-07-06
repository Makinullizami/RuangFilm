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
  const apiKey = '5a6ca2b'; // Ganti dengan API key Anda

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
      <View style={styles.searchcontainer}>
        <TextInput
          placeholder="Masukkan nama"
          onChangeText={handleSearchChange}
          value={searchMovie}
          style={styles.search}
        />
        <TouchableOpacity onPress={searchMovies}>
          <MaterialCommunityIcons name="magnify" size={28} color="#000" />
        </TouchableOpacity>
      </View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={item => item.imdbID}
          renderItem={({item}) => (
            <View style={styles.movieItem}>
              {item.Poster !== 'N/A' && (
                <Image source={{uri: item.Poster}} style={styles.moviePoster} />
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
  );
};
export default Pencarian;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 50,
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#3333',
  },
  search: {
    width: 300,
    padding: 10,
  },
  movieItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  moviePoster: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  movieDetails: {
    justifyContent: 'center',
  },
  movieTitle: {
    fontSize: 18,
    color: '#000',
  },
  movieYear: {
    fontSize: 14,
    color: '#666',
  },
});
