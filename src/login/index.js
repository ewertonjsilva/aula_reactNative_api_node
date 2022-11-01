import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
// https://icons.expo.fyi/
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles'; 
import api from '../services/api';

import Logo from '../../assets/compartilhados/logo';

export default function Login({ navigation }) {

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  async function verLogin() {  
    let logou = false;
    try {
      let dadosUsu = {
        login, 
        senha
      };
      
      const response = await api.post('usuarios/login', dadosUsu);
      logou = response.data.confirma; 
      // console.log(response.data.nome);
    } catch (err) {
        console.log('Erro: ' + err);
    }

    if (logou) {
      navigation.navigate('Tab');
    } else {
      alert('Erro!');
    }
    
  }

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Login</Text> 
      <TextInput 
        style = {styles.input} 
        placeholder = 'usuário' 
        onChangeText = { (us) => setLogin(us)} 
        value = {'carlos@email.com'} // só para adiantar o login
      />
      <TextInput 
        style={styles.input} 
        placeholder = 'senha' 
        onChangeText = { (sn) => setSenha(sn)} 
        secureTextEntry = {true} 
        value = {'123456789'} // só para adiantar o login
      />
      <TouchableOpacity style={styles.btnCadUsu} onPress={() => navigation.navigate('CadastroUsu')}>
        <Text style={styles.txtCadUsu}>Cadastrar usuário</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnEntrar} onPress={() => verLogin()}>
        <MaterialIcons name="vpn-key" size={24} color="#FAFAFA" />
        <Text style={styles.txtEntrar}>Entrar</Text>
      </TouchableOpacity>
            
    </View>
  );
}
