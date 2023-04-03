import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MeuComponent from './MeuComponente';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="light" />

      <Text style={styles.title}>GGcoding</Text>

      <MeuComponent />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#2A2A2A', 
   justifyContent: 'center',
   alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 24,
  },
});
