import { Text, View, TextInput, TouchableOpacity } from 'react-native'; 
// https://docs.expo.dev/guides/icons/
// https://icons.expo.fyi/
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

export default function Produtos() {
  return (
    <View style={styles.container}>
      <View style={styles.pesquisa}>
        <TextInput placeholder='Pesquisar por...' />
        <TouchableOpacity>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>      
      </View>      
    </View>
  );
}
