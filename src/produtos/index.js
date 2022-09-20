import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'; 
// https://github.com/react-native-picker/picker 
// depois como adm em um prompt
// npm install @react-native-picker/picker@2.4.2 --force
import {Picker} from '@react-native-picker/picker';
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

/*
  nome - descrição - tipo - valor - imagem
*/

export default function Produtos() { 
  const [tipoProduto, setTipoProduto] = useState(['Tipo', 'Lanche', 'Porção', 'Suco']); 
  const [tipoSel, setTipoSel] = useState([]);
  let itemIndex = 0;
  return (
    <View style={styles.container}>
      <View style={styles.pesquisa}>
        <Picker
          selectedValue={tipoSel} 
          onValueChange={(itemValue) => setTipoSel(itemValue)} 
          style={{width: 150, height: 90}}
        >
          {
            tipoProduto.map(tp => {
              return <Picker.Item label={tp} value={tp} key={tp} />
            })
          }          
        </Picker>
        <TextInput placeholder='Pesquisar por...' />
        <TouchableOpacity>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>      
      </View> 
      <View>
        <Text>Lanche de Frango</Text>
        <Image style={styles.tinyLogo} source={img1} />
        <Text>15,00</Text>
        <Text>O lanche contém frango temperado com tempero, além de pão e molho.</Text>
      </View>
    </View>
  );
}
