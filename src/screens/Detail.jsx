import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Detail = () => {
  return (
    <View>
      <View style={styles.headerTop}>
        <Text style={styles.logo}>DETAIL FILM</Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#333',
  },
  logo: {
    fontSize: 30,
    color: '#D50000',
    fontWeight: 'bold',
  },
});
