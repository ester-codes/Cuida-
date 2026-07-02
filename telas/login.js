import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const USUARIO_SALVO = {
    email: 'teste@gmail.com',
    senha: '1234'
  };

  const exibirAlerta = (titulo, message) => {
    if (Platform.OS === 'web') {
      alert(`${titulo}: ${message}`);
    } else {
      Alert.alert(titulo, message);
    }
  };

  const handleLogin = () => {
    if (!email || !senha) {
      exibirAlerta('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (email === USUARIO_SALVO.email && senha === USUARIO_SALVO.senha) {
      exibirAlerta('Sucesso', 'Login realizado com sucesso!');
      
      navigation.replace('Tabs'); 
    } else {
      exibirAlerta('Erro', 'E-mail ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Cuida+</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aa7078"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aa7078"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Voltar para o início</Text>
        </TouchableOpacity>

        <Text style={styles.hint}>Teste: {USUARIO_SALVO.email} | {USUARIO_SALVO.senha}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F2', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: 400,
    borderRadius: 25, 
    padding: 35,
    // Sombras suaves
    shadowColor: '#cc4b4b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#cc4b4b', 
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#aa7078', 
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#FFF8F9', 
    height: 52,
    borderRadius: 15, 
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FFE0E4',
    fontSize: 16,
    color: '#554044',
  },
  button: {
    backgroundColor: '#cc4b4b', 
    height: 52,
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#cc4b4b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  backButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#aa7078',
    fontSize: 14,
    fontWeight: '500',
  },
  hint: {
    fontSize: 12,
    color: '#cca0a6',
    textAlign: 'center',
    marginTop: 25,
    fontStyle: 'italic',
  }
});