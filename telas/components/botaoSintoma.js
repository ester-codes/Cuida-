import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BotaoSintoma({ texto, selecionado, onPress }) {

  return (

    <TouchableOpacity 
      style={[styles.botao, selecionado && styles.botaoSelecionado]} 
      onPress={onPress}
    >
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#FFAAAA',
    width: '45%',
    alignItems: 'center',
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  botaoSelecionado: {
    backgroundColor: '#FFD2D2', 
    borderColor: '#CC4B4B',     
  },
  
  texto: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
});