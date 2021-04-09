import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Task(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.checkTask(props.item)}>
        {props.item.isCompleted ? (
          <Icon name="check-circle" style={styles.icon} />
        ) : (
          <Icon name="circle" style={styles.icon} />
        )}
      </TouchableOpacity>
      <Text 
        style={[styles.title, { textDecorationLine: props.item.isCompleted ? 'line-through' : 'none' }]}
      >
        {props.item.title}
      </Text>
      <TouchableOpacity onPress={() => props.removeTask(props.item)}>
        <Icon name="times-circle" style={styles.icon} color="red" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignSelf: 'center',
  },
  icon: {
    fontSize: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});