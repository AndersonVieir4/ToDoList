import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

const App = () => {
  const [numero, setNumero] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Digite o seu número de celular:</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        onChangeText={(text) => setNumero(text)}
        value={numero}
      />
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Continuar</Text>
      </TouchableOpacity>
      <Text style={styles.textoOu}>ou</Text>
      <TouchableOpacity style={styles.botaoGoogle}>
        <AntDesign name="googleplus" size={24} color="black" />
        <Text style={styles.textoBotaoSocial}>Continuar com o Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoApple}>
        <AntDesign name="apple1" size={24} color="black" />
        <Text style={styles.textoBotaoSocial}>Continuar com a Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoFacebook}>
        <AntDesign name="facebook-square" size={24} color="black" />
        <Text style={styles.textoBotaoSocial}>Continuar com o Facebook</Text>
      </TouchableOpacity>
      <Text style={styles.textoOu}>ou</Text>
      <TouchableOpacity style={styles.botaoEncontrar}>
        <FontAwesome name="search" size={20} color="black" />
        <Text style={styles.textoBotaoSocial}> Encontrar minha conta</Text>
      </TouchableOpacity>
      <Text style={styles.aviso}>Ao continuar, você concorda em receber chamadas e mensagens SMS ou pelo WhatsApp, inclusive automáticas, da Uber e de suas afiliadas, no número informado.</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: 'black',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
  },
  textoOu: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
    color: 'gray',
  },
  botaoGoogle: {
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  botaoApple: {
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  botaoFacebook: {
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotaoSocial: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
  },
    botaoEncontrar: {
    flexDirection: 'row',
    backgroundColor:'white',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  }, 
    aviso: {
    fontSize: 10,
    marginTop: 10,
    marginBottom: 5,
    color: 'gray',
  }, 
});

export default App;
