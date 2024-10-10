import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {

  const [screen, setScreen] = useState('Home');

  function HomeScreen() {
    return (
      <View style={styles.homeContainer}>
        <Text style={styles.title}>Hola Mundo</Text>
        <TouchableOpacity style={styles.button} onPress={() => setScreen('Settings')}>
          <Text style={styles.buttonText}>Ir a Ajustes</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function SettingsScreen() {
    return (
      <View style={styles.settingsContainer}>
        <Text style={styles.title}>Pantalla de Ajustes</Text>
        <TouchableOpacity style={styles.button} onPress={() => setScreen('Home')}>
          <Text style={styles.buttonText}>Ir a Inicio</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return screen === 'Home' ? <HomeScreen /> : <SettingsScreen />;
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f7fa',
  },
  settingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1f5fe',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});
