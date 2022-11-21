import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from './styles';
import api from '../services/api'; 

import Logo from '../../assets/compartilhados/logo';

// const estados = [
//   {id : 1, uf : 'UF'}, 
//   {id : 2, uf : 'RJ'}, 
//   {id : 3, uf : 'PR'}, 
//   {id : 4, uf : 'SP'}
// ];

// const cidades = [
//     {id : 0, nome : 'Cidade'}, 
//     {id : 1, nome : 'Tupã'}, 
//     {id : 2, nome : 'Parapuã'}, 
//     {id : 3, nome : 'Marília'}, 
//     {id : 4, nome : 'Paulicéia'}
//   ];

export default function Cliente({ navigation }) {
  // 0 - cadastro, 1 - sucesso, 2 - erro
  const [exibe, setExibe] = useState(0); 
  const [estados, setEstados] = useState([]); 
  const [mensagem, setMensagem] = useState([]); 

  const listUf = [{cid_uf: 'UF'}];

  async function listarEstados() { 
    try {
        const response = await api.get('estados');
        const arr = listUf.concat(response.data.message);
        setEstados(arr); 
    } catch (err) {
        setEstados([]); 
        console.log('Erro: ' + err);
    }   
  }

  const mudaTela = (tela) => {
    setExibe(tela); 
  } 

  useEffect(() => {
    listarEstados();    
  }, []); 

  function montaMensagem(arr) {
    setMensagem(arr); 
  }

  return (
    <View style={styles.container}>
      <Logo />
      {
        exibe === 0 
        ? 
          <Cadastro mudaTela={mudaTela} estados={estados} montaMensagem={montaMensagem} /> 
        : 
          exibe === 1 
        ? 
          <CadSucesso navigation={navigation} montaMensagem={montaMensagem}/> 
        : 
          <CadErro mudaTela={mudaTela} mensagem={mensagem} />
      }
    </View>
  );
}

function Cadastro({ mudaTela, estados, montaMensagem }) { 

  const [cidades, setCidades] = useState([]);

  const [ufSel, setUfSel] = useState([]);
  const [cidade, setCidade] = useState([]); 

  const tipo = 2; // Tipo de usuário cliente
  const pts = 0; // Sem pontuação ao cadastrar

  const [nome, setNome] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [senha, setSenha] = useState(''); 
  const [celular, setCelular] = useState(''); 
  const [logradouro, setLogradouro] = useState(''); 
  const [num, setNum] = useState(''); 
  const [bairro, setBairro] = useState(''); 
  const [compl, setCompl] = useState(''); 
  
  const listCid = [{cid_id: 0, cid_nome: 'Selecione a cidade', cid_uf: '-'}];

  async function defineEstado(est) {
    const dados = {
      cidade : '%%', 
      estado : est
    }
    try {
      const response = await api.post('cidades', dados); 
      const arr = listCid.concat(response.data.message);
      setCidades(arr); 
      // console.log(response.data.message);
    } catch (err) {
        setCidades([]); 
        console.log('Erro: ' + err);
    } finally {
      setUfSel(est);
    }
  } 

  function validaCad() {
    let valida = true; 
    let mens = ['Corrija os campos: ']; 

    if (nome === '') { 
      valida = false;
      mens.push('Insira o nome'); 
    } 

    if (email === '') {
      valida = false;
      mens.push('Insira o e-mail');      
    } else {
      // let vEmail = checkEmail(email);
      if (!checkEmail(email)) {
        valida = false;
        mens.push('Insira um e-mail válido'); 
      }
    }    
    
    if (celular === '') { 
      valida = false;
      mens.push('Insira o número do celular'); 
    } 
    
    if (logradouro === '') { 
      valida = false;
      mens.push('Insira o logradouro'); 
    } 

    if (num === '') { 
      valida = false;
      mens.push('Insira o número do endereço'); 
    } 

    if (bairro === '') { 
      valida = false;
      mens.push('Insira o bairro'); 
    } 

    if (senha === '') { 
      valida = false;
      mens.push('Insira a senha'); 
    } else {
      if (senha.length < 4) {
        valida = false;
        mens.push('A senha precisa ter mais que 4 caracteres');        
      }
    }

    if (cidade === 0) {
      valida = false;
      mens.push('Selecione a cidade');       
    }

    if (valida === false) {
      montaMensagem(mens);
      mudaTela(2);
    } else {
      mudaTela(1);
    }
  }

  function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  async function CadastraUsu() {
    let confirmaCad = {};
    const dados = {
      nome, email, senha, tipo, pts, cidade, celular, logradouro, num, bairro, compl
    }
    try {
      const response = await api.post('clientes', dados);
      confirmaCad = response.data.message;       
      montaMensagem(confirmaCad.id);
    } catch (err) {        
        console.log('Erro: ' + err); 
        confirmaCad = 0;
    }    
  }

  return(
    <View style={styles.container}>
      
      <Text style={styles.text}>Cadastro de usuário</Text>
      <TextInput placeholder='Nome' style={styles.input} onChangeText = { (nm) => setNome(nm)} />
      <TextInput placeholder='E-mail' style={styles.input} onChangeText = { (em) => setEmail(em)} />
      <TextInput placeholder='Senha' style={styles.input} onChangeText = { (sn) => setSenha(sn)} /> 
      <TextInput placeholder='Celular' style={styles.input} onChangeText = { (cel) => setCelular(cel)} /> 
      <TextInput placeholder='Logradouro' style={styles.input} onChangeText = { (lg) => setLogradouro(lg)} /> 
      <TextInput placeholder='Número' style={styles.input} onChangeText = { (nm) => setNum(nm)} /> 
      <TextInput placeholder='Bairro' style={styles.input} onChangeText = { (nm) => setBairro(nm)} /> 
      <TextInput placeholder='Complemento' style={styles.input} onChangeText = { (nm) => setCompl(nm)} /> 

      <View style={styles.containerPicker}>
        <Picker
            selectedValue={ufSel} 
            onValueChange={(itemValue) => defineEstado(itemValue)} 
            style={styles.pickerUf}
          >
          {
            estados.map(uf => {
              return <Picker.Item label={uf.cid_uf} value={uf.cid_uf} key={uf.cid_uf} style={styles.txtLista} />
            })
          }          
        </Picker>
        <Picker
            selectedValue={cidade} 
            onValueChange={(itemValue) => setCidade(itemValue)} 
            style={styles.pickerCid}
          >
          {
            cidades.map(cid => {
              return <Picker.Item label={cid.cid_nome} value={cid.cid_id} key={cid.cid_id} style={styles.txtLista} />
            })
          }          
        </Picker>
      </View>      

      <TouchableOpacity onPress={() => validaCad()} style={styles.botao}>
        <Text style={styles.txtBotao}>Cadastrar</Text>        
      </TouchableOpacity>
    </View>    
  )
}

function CadSucesso({ navigation, mensagem }) {
  return(
    <View style={styles.container}>
      <Text style={styles.txtMensagem}>Cadastro realizado com sucesso!</Text>
      <Text style={{color: '#000'}}>{mensagem}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botao}>
        <Text style={styles.txtBotao}>Voltar para o login</Text>        
      </TouchableOpacity>
    </View>    
  )
}

function CadErro({ mudaTela, mensagem }) {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Erro ao cadastrar...</Text>
      {
        mensagem.map((mens, n) => {
          if (n === 0) return <Text style={[styles.erros, styles.ttErros]} key={mens}>{mens}</Text>
          return <Text style={styles.erros} key={mens}>{mens}</Text>
        })
      }
      <TouchableOpacity style={styles.botao} onPress={() => mudaTela(0)}>        
        <Text style={styles.txtBotao}>Tentar novamente!</Text>
      </TouchableOpacity>
    </View>    
  )
}
