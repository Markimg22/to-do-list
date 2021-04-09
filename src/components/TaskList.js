import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import Task from './Task';

export default function TaskList(props) {
  return (
    <View style={styles.container}>
      <FlatList 
        data={props.tasks}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <Task 
            item={item}
            removeTask={props.removeTask} 
            checkTask={props.checkTask} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
