import React, { useState } from 'react';
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
/*
  nome - imagem - valor
*/

export default function Produtos() { 
  const [tipoSel, setTipoSel] = useState([]);

  //const [tipoProduto, setTipoProduto] = useState(['Tipo', 'Lanche', 'Porção', 'Suco']); 
  const [tipoProduto, setTipoProduto] = useState(
    [
      {id : 0, tipo : 'Tipo'}, 
      {id : 1, tipo : 'Lanche'}, 
      {id : 2, tipo : 'Porção'}, 
      {id : 3, tipo : 'Suco'}
    ]
  ); 

  // produtos
  const [produtos, setProdutos] = useState(
    [
      {id: 0, nome: 'Lanche de Frango', img: img1, valor: 'R$ 15,00'}, 
      {id: 1, nome: 'Lanche de Peixe', img: img2, valor: 'R$ 25,00'}, 
      {id: 2, nome: 'Bolo', img: img3, valor: 'R$ 10,00'}, 
      {id: 3, nome: 'Fritas rústica da casa ao lado do vizinho', img: img4, valor: 'R$ 19,00'}, 
      {id: 4, nome: 'Suco de laranja', img: img5, valor: 'R$ 8,25'}, 
      {id: 5, nome: 'Suco verde', img: img6, valor: 'R$ 12,00'}, 
      {id: 6, nome: 'Suco', img: img6, valor: 'R$ 13,00'}, 
      {id: 7, nome: 'Suco', img: img6, valor: 'R$ 14,00'}, 
      {id: 8, nome: 'Suco', img: img6, valor: 'R$ 15,00'}, 
      {id: 9, nome: 'Suco', img: img6, valor: 'R$ 16,00'}, 
      {id: 10, nome: 'Suco', img: img6, valor: 'R$ 17,00'}, 
      {id: 11, nome: 'Suco', img: img6, valor: 'R$ 18,00'}, 
      {id: 12, nome: 'Suco', img: img6, valor: 'R$ 19,00'}, 
    ]
  );
  const numColumns = 3;
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
          renderItem={ ({item}) => <CardItem item={item} /> } 
          keyExtractor={ item => item.id} 
          numColumns={numColumns} 
          style={styles.flat}
        />
      </SafeAreaView>      
    </View>
  );
}
