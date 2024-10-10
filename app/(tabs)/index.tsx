import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Crear los tabs
const Tab = createBottomTabNavigator();

// Pantalla de "Hola Mundo"
function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeText}>Hola Mundo</Text>
    </View>
  );
}

// Pantalla de Ajustes con diferente estilo
function SettingsScreen() {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.settingsText}>Pantalla de Ajustes</Text>
    </View>
  );
}

// Función principal que incluye los tabs
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Ajustes" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Estilos para las pantallas
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  homeText: {
    fontSize: 24,
    color: '#000',
  },
  settingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  settingsText: {
    fontSize: 28,
    color: '#333',
  },
});
