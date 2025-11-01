import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_APIKEY,
  authDomain: process.env.EXPO_PUBLIC_AUTHDOMAIN,
  projectId: "meu-primeiro-firebase-50972",
  storageBucket: "meu-primeiro-firebase-50972.firebasestorage.app",
  messagingSenderId: "407373031593",
  appId: "1:407373031593:web:5a9bf21d645a2f49aae1b8"
};
firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, Dimensions } from 'react-native';

export default function App() {
  const [nomes, soetNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      // Ordena os nomes em ordem alfabética
      data.sort((a, b) => a.Nome.localeCompare(b.Nome));

      soetNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.nameBox}>
            <Text style={styles.text}>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const { width } = Dimensions.get('window'); // Obtém a largura da tela do dispositivo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000', // Fundo preto
    paddingTop: 40, // Espaçamento no topo
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff', // Letras brancas
    fontSize: 32, // Aumentado o tamanho do texto do título
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start', // Move o título para o canto superior esquerdo
  },
  nameBox: {
    backgroundColor: '#1e1e1e', // Fundo do box (cinza escuro)
    borderRadius: 12, // Bordas arredondadas maiores
    padding: 20, // Espaçamento interno maior
    borderWidth: 2, // Aumenta a espessura da borda
    borderColor: '#fff', // Cor da borda (branca)
    width: width * 0.9, // Largura relativa (90% da tela)
    marginBottom: 15, // Espaçamento maior entre os boxes
  },
  text: {
    color: '#fff', // Letras brancas
    fontSize: 28, // Aumenta o tamanho do texto dos nomes
    textAlign: 'center', // Centraliza o texto dentro do box
  },
});