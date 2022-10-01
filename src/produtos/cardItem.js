import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native'; 

import styles from './styles'; 

export default function CardItem({item, navigation}) {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Produto', {item})}>
        <View style={styles.itemPesquisa}>
          <Text style={styles.txtTituloProd}>{item.nome}</Text>
          <Image style={styles.img} source={item.img} />
          <Text>{item.valor}</Text>
        </View>            
      </TouchableOpacity>  
    );
  }