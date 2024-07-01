import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Contact(props) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('About', { contact: props });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image source={props.gambar} style={styles.img} />
      <View style={styles.teks}>
        <Text style={styles.title}>{props.judul}</Text>
        <Text style={styles.telp}>{props.telpon}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Detail</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue',
    paddingHorizontal: 10,
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
    borderRadius:25,
  },
  teks: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  telp: {
    fontSize: 14,
    color: '#3498db',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});