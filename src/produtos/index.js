import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'; 
// https://github.com/react-native-picker/picker 
// depois como adm em um prompt
// npm install @react-native-picker/picker@2.4.2 --force
import { Picker } from '@react-native-picker/picker';
// https://docs.expo.dev/guides/icons/
// https://icons.expo.fyi/
import { FontAwesome } from '@expo/vector-icons'; 

import img1 from '../../assets/imgTemp/lanche1.jpg';
import img2 from '../../assets/imgTemp/lanche2.jpg';
import img3 from '../../assets/imgTemp/sobremesa1.jpg';
import img4 from '../../assets/imgTemp/fritas.jpg';
import img5 from '../../assets/imgTemp/suco1.jpg';
import img6 from '../../assets/imgTemp/suco2.jpg';

import styles from './styles'; 

import CardItem from './cardItem'; 
import api from '../services/api'; 
/*
  nome - imagem - valor
*/

export default function Produtos({ navigation }) { 
  const [tipoSel, setTipoSel] = useState([]);

  const [tipoProduto, setTipoProduto] = useState(
    [
      {id : 0, tipo : 'Tipo'}, 
      {id : 1, tipo : 'Lanche'}, 
      {id : 2, tipo : 'Porção'}, 
      {id : 3, tipo : 'Suco'}
    ]
  ); 

  // produtos
  const [produtos, setProdutos] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1); 
  const limit = 9;
  const [loading, setLoading] = useState(false);

  async function listaProdutos() { 
    try {
        //const response = await api.get('/produtos?page=' + page + '&limit=9'); 
        const response = await api.get('produtos', {
          params: { page, limit }
        });

        /*
          se tivesse que passar parâmetros via body o método seria post e eles devem ser passados antes do params
          ex:
          const pequisa = {
            tipo: 2, 
            nome: 'abc'
          }
          const response = await api.get('produtos', pesquisa, {
            params: { page, limit }
        });
        */
        setProdutos(response.data.message); 
    } catch (err) {
        setProdutos([]); 
        console.log('Erro: ' + err);
    }   
  }

  const numColumns = 3; 

  useEffect(() => {
    listaProdutos();    
  }, []);  

  return (
    <View style={styles.container}>
      <View style={styles.pesquisa}>
        <Picker
          selectedValue={tipoSel} 
          onValueChange={(itemValue) => setTipoSel(itemValue)} 
          style={styles.picker}
        >
          {
            tipoProduto.map(tp => {
              return <Picker.Item label={tp.tipo} value={tp.id} key={tp.id} />
            })
          }          
        </Picker>
        <TextInput placeholder='Pesquisar por...' style={styles.input} />
        <TouchableOpacity style={styles.botaoPesquisa} >
          <FontAwesome name="search" size={16} color="black" />
        </TouchableOpacity>      
      </View> 
      <SafeAreaView>
        <FlatList 
          data={produtos} 
          renderItem={ ({item}) => <CardItem item={item} navigation={navigation} /> } 
          keyExtractor={ item => item.prd_id} 
          numColumns={numColumns} 
          style={styles.flat}
        />
      </SafeAreaView>      
    </View>
  );
}
