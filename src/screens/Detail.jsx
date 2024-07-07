import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Detail = ({navigation, route}) => {
  const {Trending, Romance, TrendingLive, RomanceLive} = route.params;

  let selectedImage = null;

  if (Trending) {
    selectedImage = Trending;
  } else if (Romance) {
    selectedImage = Romance;
  } else if (TrendingLive) {
    selectedImage = TrendingLive;
  } else if (RomanceLive) {
    selectedImage = RomanceLive;
  }

  return (
    <ScrollView style={{backgroundColor: '#000', flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.logo}>DETAIL FILM</Text>
      </View>
      <View style={styles.imageContainer}>
        {selectedImage && <Image source={selectedImage} style={styles.image} />}
        <Text style={styles.txtinfo}>
          Ruangfilm adalah aplikasi yang saya kembangkan dengan tujuan utama
          untuk menyediakan platform yang inovatif dan interaktif bagi para
          pengguna untuk mengeksplorasi dan menikmati konten film secara
          mendalam. Dengan berfokus pada pengalaman pengguna yang memikat dan
          intuitif, aplikasi ini dirancang untuk menyatukan pecinta film dari
          berbagai latar belakang dan minat, menciptakan komunitas yang dinamis
          dan berbagi pengetahuan. Pengembangan Ruangfilm masih berada dalam
          tahap awal yang penuh tantangan ini bertujuan untuk menghadirkan
          fitur-fitur unggulan yang membedakan kami dari platform lain. Kami
          berkomitmen untuk mengintegrasikan teknologi terbaru dalam analisis
          film, rekomendasi yang disesuaikan, dan interaksi sosial yang
          memungkinkan pengguna berbagi pendapat mereka secara langsung. Hal ini
          tidak hanya bertujuan untuk meningkatkan pengalaman menonton, tetapi
          juga untuk memperluas wawasan dan apresiasi terhadap dunia perfilman
          di kalangan pengguna. Dalam upaya kami untuk menciptakan aplikasi yang
          sempurna ini, kami mengutamakan kualitas konten dan kepuasan pengguna.
          Kami percaya bahwa setiap langkah dalam pengembangan ini harus
          memperhatikan kebutuhan dan harapan pengguna, sehingga kami dapat
          memberikan pengalaman yang tak terlupakan dan bermanfaat bagi setiap
          pengguna Ruangfilm. Kami mengundang Anda untuk bergabung dalam
          perjalanan kami menuju meluncurkan Ruangfilm. Dengan dukungan dan
          partisipasi Anda, kami yakin aplikasi ini akan menjadi tempat terbaik
          bagi pecinta film untuk menjelajahi, belajar, dan berbagi pengalaman
          mereka dalam dunia sinematik yang luas dan menarik. Terus pantau
          perkembangan kami karena kami berkomitmen untuk terus meningkatkan dan
          menyempurnakan platform ini demi kepuasan dan kebahagiaan para
          pengguna kami.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#333',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  logo: {
    fontSize: 30,
    color: '#D50000',
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 400,
    marginTop: 20,
    resizeMode: 'cover',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  txtinfo: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 18,
    color: '#FFF',
    textAlign: 'justify',
    lineHeight: 24,
  },
});
