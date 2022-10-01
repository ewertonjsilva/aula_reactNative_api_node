import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'; 

import styles from './styProduto';

import img1 from '../../assets/imgTemp/lanche1.jpg';

export default function Produto({route}) {
  return (
    <View style={styles.container}>
      <View>
        <Text>{route.params.item.nome}</Text>
        <Image style={styles.tinyLogo} source={route.params.item.img} />
        <Text>{route.params.item.valor}</Text>
        <Text>{route.params.item.descricao}</Text>
      </View>
    </View>
  );
}
