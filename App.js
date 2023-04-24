import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.uberText}>Uber</Text>
      <Image
        source={require('./assets/uber.PNG')}
        style={{ width: 200, height: 200 }}
      />
      <Text style={[styles.safetyText, { marginBottom: 32 }]}>Viaje em segurança</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Começar</Text>
        <FontAwesome name="arrow-right" size={20} color="#2d6cf0" style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d6cf0',
  },
  uberText: {
    fontSize: 42,
    marginBottom: 40,
    color: 'white',
  },
  image: {
    width: 350,
    height: 150,
    marginBottom: 16,
  },
  safetyText: {
    fontSize: 24,
    color: 'white',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 200,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  arrowIcon: {
    marginLeft: 150,
    color: 'white',
  },
});
