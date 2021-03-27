import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function form() {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Insira uma atividade"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderTopWidth: 2,
    borderColor: '#ABABAB',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    height: 65,
    borderRadius: 15,
    marginTop: 10,
    fontSize: 20,
    padding: 10,
  },
  button: {
    backgroundColor: '#BB86FC',
    height: 65,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold'
  }
});
