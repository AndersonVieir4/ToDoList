import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.uberText}>Uber</Text>
      <Image
        source={require('./assets/uber.png')}
        style={{ width: 200, height: 200 }}
      />
      <Text style={[styles.safetyText, { marginBottom: 2 }]}>Viaje em segurança</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Começar</Text>
        <FontAwesome name="arrow-right" size={20} color="#2d6cf0" width = '90%' style={styles.arrowIcon} />
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
    fontSize: 30,
    marginBottom: 40,
    color: 'white',
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
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    width: '100%',


  },
  arrowIcon: {
    marginLeft: 'auto',
    color: 'white',
  },
});
