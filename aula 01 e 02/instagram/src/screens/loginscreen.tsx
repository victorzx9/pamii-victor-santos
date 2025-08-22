import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

type Props = {
  onLogin: () => void;
};

export default function LoginScreen({ onLogin }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' }}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone, nome de usuário ou email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OU</Text>

      <TouchableOpacity>
        <Text style={styles.facebookText}>Entrar com o Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={{ color: '#999' }}>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.signupText}> Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30 },
  logo: { width: 100, height: 100, marginBottom: 40 },
  input: {
    width: '100%', height: 44, backgroundColor: '#fafafa',
    borderWidth: 1, borderColor: '#ddd', borderRadius: 5,
    paddingHorizontal: 10, marginBottom: 10,
  },
  button: {
    width: '100%', height: 44, backgroundColor: '#3797EF',
    borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginTop: 10,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  orText: { marginVertical: 20, color: '#999', fontWeight: 'bold' },
  facebookText: { color: '#3797EF', fontWeight: 'bold' },
  forgotText: { color: '#3797EF', marginTop: 15 },
  footer: { flexDirection: 'row', position: 'absolute', bottom: 30 },
  signupText: { color: '#3797EF', fontWeight: 'bold' },
});
