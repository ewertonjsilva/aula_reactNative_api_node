import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from './styles';

import Logo from '../../assets/compartilhados/logo';

const estados = [
  {id : 0, uf : 'UF'}, 
  {id : 1, uf : 'RJ'}, 
  {id : 2, uf : 'PR'}, 
  {id : 3, uf : 'SP'}
];

const cidades = [
    {id : 0, nome : 'Cidade'}, 
    {id : 1, nome : 'Tupã'}, 
    {id : 2, nome : 'Parapuã'}, 
    {id : 3, nome : 'Marília'}, 
    {id : 4, nome : 'Paulicéia'}
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

  const [ufSel, setUfSel] = useState([]);
  const [cidSel, setCidSel] = useState([]);

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Cadastro de usuário</Text>
      <TextInput placeholder='Nome' style={styles.input} />
      <TextInput placeholder='E-mail' style={styles.input} />
      <TextInput placeholder='Senha' style={styles.input} /> 
      <TextInput placeholder='Celular' style={styles.input} /> 
      <TextInput placeholder='Logradouro' style={styles.input} /> 
      <TextInput placeholder='Número' style={styles.input} /> 
      <TextInput placeholder='Bairro' style={styles.input} /> 
      <TextInput placeholder='Complemento' style={styles.input} /> 
        <View style={styles.containerPicker}>
          <Picker
              selectedValue={ufSel} 
              onValueChange={(itemValue) => setUfSel(itemValue)} 
              style={styles.pickerUf}
            >
            {
              estados.map(uf => {
                return <Picker.Item label={uf.uf} value={uf.id} key={uf.id} style={styles.txtLista} />
              })
            }          
          </Picker>
          <Picker
              selectedValue={cidSel} 
              onValueChange={(itemValue) => setCidSel(itemValue)} 
              style={styles.pickerCid}
            >
            {
              cidades.map(cid => {
                return <Picker.Item label={cid.nome} value={cid.id} key={cid.id} style={styles.txtLista} />
              })
            }          
          </Picker>
        </View>        
      <TouchableOpacity onPress={() => mudaTela(1)} style={styles.botao}>
        <Text style={styles.txtBotao}>Cadastrar</Text>        
      </TouchableOpacity>
    </View>    
  )
}

function CadSucesso({ navigation }) {
  return(
    <View style={styles.container}>
      <Text style={styles.txtMensagem}>Cadastro realizado com sucesso!</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botao}>
        <Text style={styles.txtBotao}>Voltar para o login</Text>        
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
