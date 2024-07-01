import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const About = ({ route, navigation }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Image source={contact.gambar} style={styles.img} />
      <Text style={styles.title}>{contact.judul}</Text>
      <Text style={styles.telpon}>Telpon: {contact.telpon}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50, // rounded image
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  telpon: {
    fontSize: 18,
    color: '#3498db',
    marginBottom: 10,
  },
  tanggalLahir: {
    fontSize: 20,
    marginBottom: 10,
  },
  catatan: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default About;