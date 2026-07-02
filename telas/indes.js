import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.decoracaoBalao}>
        <Text style={styles.emoji}>✨</Text>
      </View>

      <View style={styles.conteudo}>
        <Text style={styles.boasVindas}> Olá, que bom te ver! </Text>
        <Text style={styles.nomeApp}>Cuida+</Text>
        
        <View style={styles.linhaDivisoria} />
        
        <Text style={styles.bio}>
          Um porto seguro para cada sentimento.{"\n"}
          Estamos aqui para acompanhar você a cada passo.
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('login')}
      >
        <Text style={styles.textbutton}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', 
    backgroundColor: '#FFF0F2', 
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
  decoracaoBalao: {
    backgroundColor: '#FFFFFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#cc4b4b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  emoji: {
    fontSize: 24,
  },
  conteudo: {
    alignItems: 'center',
    width: '100%',
  },
  boasVindas: {
    fontSize: 16,
    color: '#aa7078', 
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 5,
  },
  nomeApp: { 
    fontSize: 42,
    fontWeight: 'bold',
    color: '#cc4b4b', 
  },
  linhaDivisoria: {
    width: 40,
    height: 4,
    backgroundColor: '#cc4b4b',
    borderRadius: 2,
    marginVertical: 20,
    opacity: 0.3, 
  },
  bio: { 
    color: '#554044',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24, 
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 18, 
    width: '100%',
    maxWidth: 280,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#cc4b4b',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  textbutton: {
    color: '#cc4b4b',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});