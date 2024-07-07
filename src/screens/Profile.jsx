import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: 'https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Makinul Lizami</Text>
          <Text style={styles.bio}>FullStack Developer</Text>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <TouchableOpacity>
            <View style={styles.infoItem}>
              <MaterialCommunityIcons
                name="email"
                size={20}
                color="#D50000"
                style={styles.infoIcon}
              />
              <Text style={styles.infoText}>agimbal65@gmail.com</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.infoItem}>
              <MaterialCommunityIcons
                name="phone"
                size={20}
                color="#D50000"
                style={styles.infoIcon}
              />
              <Text style={styles.infoText}>+62 858-5674-7655</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.infoItem}>
              <MaterialCommunityIcons
                name="instagram"
                size={20}
                color="#D50000"
                style={styles.infoIcon}
              />
              <Text style={styles.infoText}>lyzami_m</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>Alamat</Text>
          <Text style={styles.infoText}>Jln. Diatas Bumi</Text>
          <Text style={styles.infoText}>Sampang, Jawa Timur, Indonesia</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.logoutButton}>
          <MaterialCommunityIcons name="exit-to-app" size={24} color="#FFF" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  scrollViewContainer: {
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#818181',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#D50000',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#D50000',
  },
  bio: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  editProfileButton: {
    backgroundColor: '#D50000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  editProfileText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#818181',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#D50000',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoIcon: {
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#fff',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D50000',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  logoutText: {
    color: '#FFF',
    marginLeft: 10,
    fontSize: 16,
  },
});
