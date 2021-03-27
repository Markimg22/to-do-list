import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Task(props) {
  return (
    <View style={styles.container}>
      <Icon name="circle" style={styles.icon} />
      <Text style={styles.title}>{props.title}</Text>
      <Icon name="times-circle" style={styles.icon} color="red" />
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