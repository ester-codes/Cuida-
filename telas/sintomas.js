import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

const SINTOMAS = [
  { id: 'enjoo',       label: 'Enjoo 🤢', normal: true, selecionado: false },
  { id: 'cansaco',     label: 'Cansaço 😴', normal: true, selecionado: false },
  { id: 'tontura',     label: 'Tontura 😵', perigoso: true, selecionado: false },
  { id: 'azia',        label: 'Azia 🔥', normal: true, selecionado: false },
  { id: 'dorCostas',   label: 'Dor nas costas 🔙', normal: true, selecionado: false },
  { id: 'inchaco',     label: 'Inchaço 🦵', normal: true, selecionado: false},
  { id: 'fadiga',      label: 'Fadiga  😮‍💨', normal: true, selecionado: false },
  { id: 'ansiedade',   label: 'Ansiedade 😰', perigoso: true, selecionado: false },
  { id: 'pressaoAlta', label: 'Pressão alta 🩺', perigoso: true, selecionado: false },
  { id: 'colica',      label: 'colica 😣', normal: true, selecionado: false   },
  { id: 'sangramento', label: 'Sangramento 🩸', perigoso: true, selecionado: false  },
  { id: 'alteracaoHumor', label: 'Alteração no humor 😑', normal: true, selecionado: false  },
  { id: 'movimentoBebe',  label: 'Bebê Mechendo Frequentemente 🤰', normal: true, selecionado: false   },
];

export default function Sintomas() {

  const [alerta, setAlerta] = useState(null); // Para o app começar com o estado de alerta vazio (aqui usei "null" ao invés de uma string normal para identificar o espaço vazio).
  const [selecionados, setSelecionados] = useState({});

  const toggleSintoma = (id) => {
    setSelecionados(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const verificarESalvar = () => {
    // Pega apenas os ids que estão marcados como true
    const idsMarcados = Object.keys(selecionados).filter(id => selecionados[id]);

    if (idsMarcados.length === 0) {
      setAlerta('Ops! Selecione um sintoma para salvar.');
      return;
    }

    // Pega apenas os sintomas que são perigosos
    const temPerigo = SINTOMAS.some(sintoma => idsMarcados.includes(sintoma.id) && sintoma.perigoso);

    if (temPerigo) { // Filtro para verificar riscos dos sintomas
      setAlerta('Seus sintomas devem ser avaliados por um médico! Procure agora um pronto-socorro');
      Alert.alert('Atenção', 'Seus sintomas devem ser avaliados por um médico! Procure agora um pronto-socorro');
    } else {
      setAlerta('Tudo bem por aqui! Esses sintomas são normais nessa fase da gestação.');
      Alert.alert('Sucesso', 'Sintomas registrados com sucesso!');
    }
  };

  return (
    
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.header}>
        <Text style={styles.greeting}> Olá, mamãe 🌸 </Text>
        <Text style={styles.title}> Como você está hoje? </Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}> ✨ 24ª semanas </Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.sectionLabel}>SINTOMAS DE HOJE</Text>
        <View style={styles.grid}>
          {SINTOMAS.map(({ id, label }) => (
            <TouchableOpacity
              key={id}
              style={[styles.chip, selecionados[id] && styles.chipSelecionado]}
              onPress={() => toggleSintoma(id)}
            >
              <Text style={[styles.chipText, selecionados[id] && styles.chipTextSelecionado]}>
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {alerta && (
          <Text style={styles.alertaTexto}>{alerta}</Text>
        )}

        <TouchableOpacity
          style={styles.botaoSalvar}
          onPress={verificarESalvar}
        >
          <Text style={styles.botaoSalvarText}>Salvar no Diário 💗</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff8fb',
  },
  header: {
    backgroundColor: '#FFB6C8',
    padding: 24,
    paddingTop: 48,
  },
  greeting: {
    fontSize: 16,
    color: '#99435a',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7a2840',
    marginTop: 2,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff0f4',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginTop: 8,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#c0496a',
  },
  body: {
    padding: 16,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#c0496a',
    letterSpacing: 1,
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  },
  chip: {
    width: '47%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fcd0dc',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  chipSelecionado: {
    backgroundColor: '#ffe4ec',
    borderColor: '#e0607e',
  },
  chipText: {
    fontSize: 13,
    color: '#555',
  },
  chipTextSelecionado: {
    color: '#99243f',
    fontWeight: '600',
  },
  alertaTexto: {
    fontSize: 12,
    color: '#99435a',
    marginBottom: 12,
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  botaoSalvar: {
    backgroundColor: '#FFF5B0',
    borderWidth: 1.5,
    borderColor: '#f0d84a',
    borderRadius: 20,
    padding: 14,
    alignItems: 'center',
  },
  botaoSalvarText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7a6600',
  },
});
