import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function form(props) {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Insira uma atividade"
        value={props.title}
        onChangeText={(text) => props.setTitle(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => props.createTask()}>
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
