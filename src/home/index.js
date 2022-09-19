import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Carrinho')}>
        <Text>Carrinho</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}
