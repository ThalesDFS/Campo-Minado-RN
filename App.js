

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Linking} from 'react-native';
import params from './src/params'
import Field from './src/components/Field'
import Mine from './src/components/Mine'

export default class App extends Component {
  render() {
    return (
    <View style={styles.container}>
    <Button title="Click me" onPress={ ()=>{ Linking.openURL('app://testApp')}} />
        <Text style={StyleSheet.welcome}>Iniciando</Text>
        <Text style={StyleSheet.instructions}>
        Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <Field></Field>
        
        <Field opened nearMines={1}> </Field>
        <Field opened nearMines={2}> </Field>
        <Field opened nearMines={3}> </Field>
        <Field opened nearMines={6}> </Field>
        <Field mined  ></Field>
        <Field mined opened ></Field>
        <Field mined opened exploded></Field>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
