import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="light" />

      <Text style={styles.title}>GGcoding respect</Text>

    <View>
      <Text>React Native</Text>
      <Text>Criando aplicações para Android e iOS</Text>
    </View>

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
  }
});
