import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Contact from './kontak';

const contacts = [
  { id: '1', judul: 'Usman', telpon: '081888310104', gambar: require('../assets/Usman.png')},
  { id: '2', judul: 'Jihan', telpon: '088818010431', gambar: require('../assets/Jihan.png')},
  { id: '3', judul: 'Daniel', telpon: '083101188804', gambar: require('../assets/Daniel.png')},
];

const Home = ({ navigation }) => {
  const renderContactItem = ({ item }) => (
    <TouchableOpacity
      style={styles.contactContainer}
      onPress={() => navigation.navigate('About', { contact: item })}
    >
      <Contact
        judul={item.judul}
        telpon={item.telpon}
        gambar={item.gambar}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={renderContactItem}
        ListHeaderComponent={<Text style={styles.header}>Daftar Teman</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  contactContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default Home;