import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZ17W-FRNYv8zYr4CsU_SvkNYS6j4Jsyw",
  authDomain: "meu-primeiro-firebase-50972.firebaseapp.com",
  projectId: "meu-primeiro-firebase-50972",
  storageBucket: "meu-primeiro-firebase-50972.firebasestorage.app",
  messagingSenderId: "407373031593",
  appId: "1:407373031593:web:5a9bf21d645a2f49aae1b8"
};
firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App() {
  const [nomes, soetNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id : doc.id, ...doc.data() });
      });

      soetNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Lista de Nomes:</Text>
      <FlatList
      data={nomes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.Nome} {item.Sobrenome}</Text>
        </View>
      )}
      />
    </View>
  );
}