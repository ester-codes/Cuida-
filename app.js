import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

// Importando todas as telas
import WelcomeScreen from './telas/index'; 
import LoginScreen from './telas/login'; 
import Sintomas from './telas/sintomas';
import Calendario from './telas/calendario';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('Welcome');

  const navigation = {
    navigate: (nomeDaTela) => setTelaAtual(nomeDaTela),
    replace: (nomeDaTela) => setTelaAtual(nomeDaTela === 'Tabs' ? 'calendario' : nomeDaTela),
    goBack: () => setTelaAtual('Welcome'),
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.conteudoPrincipal}>
        {telaAtual === 'Welcome' && <WelcomeScreen navigation={navigation} />}
        {telaAtual === 'login' && <LoginScreen navigation={navigation} />}
        {telaAtual === 'calendario' && <Calendario navigation={navigation} />}
        {telaAtual === 'sintomas' && <Sintomas navigation={navigation} />}
      </View>

      {(telaAtual === 'calendario' || telaAtual === 'sintomas') && (
        <View style={styles.tabBar}>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => setTelaAtual('calendario')}
          >
            <Text style={[
              styles.tabTexto,
              telaAtual === 'calendario' ? styles.tabAtivo : styles.tabInativo
            ]}>
              📅 Calendário
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => setTelaAtual('sintomas')}
          >
            <Text style={[
              styles.tabTexto,
              telaAtual === 'sintomas' ? styles.tabAtivo : styles.tabInativo
            ]}>
              🤒 Sintomas
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conteudoPrincipal: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingBottom: 5,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTexto: {
    fontSize: 14,
    fontWeight: '600',
  },
  tabAtivo: {
    color: '#cc4b4b',
  },
  tabInativo: {
    color: '#888',
  },
});