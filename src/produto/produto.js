import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'; 

import styles from './styProduto';

export default function Produto({route}) {

  const nome = route.params.item.prd_nome;
  
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>{nome}</Text>
        <View style={styles.containerImg}>
          <Image style={styles.tinyLogo} source={{uri: route.params.item.prd_img}} />
        </View>        
        <Text style={styles.valor}>{route.params.item.prd_valor}</Text>
        <View style={styles.containerDesc}>
          <Text style={styles.text}>{route.params.item.prd_descricao}</Text>
        </View>        
    </View>
  );
}
