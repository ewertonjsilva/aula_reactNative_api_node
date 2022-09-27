import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from './styles';

import Logo from '../../assets/compartilhados/logo';

const estados = [
  {id : 0, tipo : 'SP'}, 
  {id : 1, tipo : 'RJ'}, 
  {id : 2, tipo : 'PR'}, 
  {id : 3, tipo : 'SC'}
];

const cidades = [
    {id : 0, tipo : 'Tupã'}, 
    {id : 1, tipo : 'Parapuã'}, 
    {id : 2, tipo : 'Marília'}, 
    {id : 3, tipo : 'Paulicéia'}
  ];

export default function Cliente({ navigation }) {
  // 0 - cadastro, 1 - sucesso, 2 - erro
  const [exibe, setExibe] = useState(0); 
  const usu_tipo = 2; // Tipo de usuário cliente
  const cli_pts = 0; // Sem pontuação ao cadastrar
  const mudaTela = (tela) => {
    setExibe(tela); 
  }

  return (
    <View style={styles.container}>
      <Logo />
      {
        exibe === 0 
        ? 
          <Cadastro mudaTela={mudaTela} /> 
        : 
          exibe === 1 
        ? 
          <CadSucesso navigation={navigation} /> 
        : 
          <CadErro mudaTela={mudaTela} />
      }
    </View>
  );
}

function Cadastro({ mudaTela }) {
  return(
    <View style={styles.container}>
      <Text>Cadastro de usuário</Text>
      <TextInput placeholder='Nome' />
      <TextInput placeholder='E-mail' />
      <TextInput placeholder='Senha' /> 
      <TextInput placeholder='Celular' /> 
      <TextInput placeholder='Logradouro' /> 
      <TextInput placeholder='Número' /> 
      <TextInput placeholder='Bairro' /> 
      <TextInput placeholder='Complemento' /> 

      <TouchableOpacity onPress={() => mudaTela(1)}>
        <Text>Cadastrar</Text>        
      </TouchableOpacity>
    </View>    
  )
}

function CadSucesso({ navigation }) {
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Cadastro realizado com sucesso!</Text>
        <Text>Ir para login</Text>
      </TouchableOpacity>
    </View>    
  )
}

function CadErro({ mudaTela }) {
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => mudaTela(0)}>
        <Text>Erro ao cadastrar...</Text>
        <Text>Tentar novamente!</Text>
      </TouchableOpacity>
    </View>    
  )
}
