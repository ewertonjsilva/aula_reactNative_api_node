import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 

import Constants from 'expo-constants';

import Teste from './src/cadCliente';

export default function App() {
  return (
    <View style={styles.container}>
      <Teste />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingTop: Constants.statusBarHeight,
  },
});
