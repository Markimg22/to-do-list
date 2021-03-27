import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';

import Task from './src/components/Task';
import Form from './src/components/Form';
import TaskList from './src/components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([
    { title: 'Estudar JS' },
    { title: 'Estudar CSS' },
    { title: 'Estudar HTML' },
    { title: 'Estudar React' },
    { title: 'Estudar JS' },
    { title: 'Estudar CSS' },
    { title: 'Estudar HTML' },
    { title: 'Estudar React JS' },
    { title: 'Estudar JS' },
    { title: 'Estudar CSS' },
    { title: 'Estudar HTML' },
    { title: 'Estudar React' },
    { title: 'Estudar JS' },
    { title: 'Estudar CSS' },
    { title: 'Estudar HTML' },
    { title: 'Estudar React JS' },
    { title: 'Estudar JS' },
    { title: 'Estudar CSS' },
    { title: 'Estudar HTML' },
    { title: 'Estudar React' },
    { title: 'Estudar JS' },
    { title: 'Estudar CSS' },
    { title: 'Estudar HTML' },
    { title: 'Estudar React JS' },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#333238" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Adicione suas tarefas.</Text>
      </View>
      <TaskList tasks={tasks} />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333238',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleContainer: {
    width: '70%',
    marginTop: 30,
    marginBottom: 20,
  },
  taskContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  }
});
