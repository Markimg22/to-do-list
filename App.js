import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';

import Form from './src/components/Form';
import TaskList from './src/components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const createTask = () => {
    const search = tasks.filter(task => task.title === title);

    if (search.length !== 0) {
      Alert.alert('Atenção', 'Nome da tarefa repetido');
      return;
    }

    setTasks([...tasks, { title, isCompleted: false }]);
    setTitle('');
  };

  const removeTask = (item) => {
    setTasks(tasks.filter(task => task.title !== item.title));
  };

  const checkTask = (item) => {
    tasks.map(task => {
      if (task.title === item.title) {
        task.isCompleted = !task.isCompleted;
      }
    });

    setTasks([...tasks]);
  };

  return (
    <KeyboardAvoidingView 
      keyboardVerticalOffset={0}
      behavior="padding"
      style={styles.container}
      enabled={Platform.OS === 'ios'}>
      <StatusBar backgroundColor="#333238" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Adicione suas tarefas.</Text>
      </View>
      <TaskList tasks={tasks} removeTask={removeTask} checkTask={checkTask} />
      <Form createTask={createTask} title={title} setTitle={setTitle} />
    </KeyboardAvoidingView>
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
