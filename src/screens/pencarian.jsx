import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  Easing,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native'; // Import untuk navigasi kembali

const Pencarian = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonPress, setButtonPress] = useState(false);
  const [buttonAnimation] = useState(new Animated.Value(1));
  const apiKey = '5a6ca2b';
  const navigation = useNavigation(); // Hook navigasi untuk kembali

  const handleSearchChange = movie => {
    setSearchMovie(movie);
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

  const handleButtonPress = () => {
    setButtonPress(true);
    Animated.timing(buttonAnimation, {
      toValue: 0.9,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(buttonAnimation, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        setButtonPress(false);
        searchMovies();
      });
    });
  };

  const handleBack = () => {
    navigation.goBack(); // Fungsi untuk kembali ke screen sebelumnya
  };

  const renderMovieItem = ({item}) => (
    <TouchableOpacity style={styles.movieItem}>
      {item.Poster !== 'N/A' && (
        <Image source={{uri: item.Poster}} style={styles.moviePoster} />
      )}
      <View style={styles.movieDetails}>
        <Text style={styles.movieTitle}>{item.Title}</Text>
        <Text style={styles.movieYear}>{item.Year}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <MaterialCommunityIcons name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>
        <Animated.View
          style={[styles.headerContent, {opacity: buttonAnimation}]}>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Masukkan judul film"
              onChangeText={handleSearchChange}
              value={searchMovie}
              style={styles.searchInput}
            />
            <TouchableOpacity
              style={[
                styles.searchButton,
                {transform: [{scale: buttonAnimation}]},
              ]}
              onPress={handleButtonPress}
              activeOpacity={1}>
              <MaterialCommunityIcons name="magnify" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator size="large" color="#333" />
        ) : (
          <FlatList
            data={movies}
            keyExtractor={item => item.imdbID}
            renderItem={renderMovieItem}
            contentContainerStyle={{paddingBottom: 20}}
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
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#333',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#666',
    flexDirection: 'row', // Untuk menyusun komponen secara horizontal
    alignItems: 'center', // Untuk memposisikan komponen secara vertikal
    paddingHorizontal: 10,
  },
  backButton: {
    padding: 10,
  },
  headerContent: {
    flex: 1, // Memanfaatkan sisa ruang di header
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#818181',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    paddingVertical: 8,
    paddingLeft: 10,
  },
  searchButton: {
    padding: 10,
    marginLeft: 10,
    borderRadius: 30,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  movieItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#818181',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  moviePoster: {
    width: 80,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  movieDetails: {
    flex: 1,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  movieYear: {
    fontSize: 14,
    color: '#222',
  },
});
