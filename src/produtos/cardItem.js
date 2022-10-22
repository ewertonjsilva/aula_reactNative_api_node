import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native'; 

import styles from './styles'; 

export default function CardItem({item, navigation}) {
    return (
      <TouchableOpacity 
        style={styles.itemPesquisa} 
        onPress={() => navigation.navigate('Produto', {item})}
      >
        {/*<View style={styles.itemPesquisa}>*/}
          <Text style={styles.txtTituloProd}>{item.prd_nome}</Text>
          <Image style={styles.img} source={{uri: item.prd_img}} />
          <Text>{item.prd_valor}</Text>
        {/*</View> */}           
      </TouchableOpacity>  
    );
  }