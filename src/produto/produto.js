import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'; 

import styles from './style';

import img1 from '../../assets/imgTemp/lanche1.jpg';

export default function Produto() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Lanche de Frango</Text>
        <Image style={styles.tinyLogo} source={img1} />
        <Text>15,00</Text>
        <Text>O lanche contém frango temperado com tempero, além de pão e molho.</Text>
      </View>
    </View>
  );
}
