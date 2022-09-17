import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 

import Constants from 'expo-constants';

import Rota from './src/routes/rotas';
import Login from './src/login';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Rota />
    //   <StatusBar style="light" />
    // </View>
    <Rota />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F0000',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingTop: Constants.statusBarHeight || 8,
  },
});

