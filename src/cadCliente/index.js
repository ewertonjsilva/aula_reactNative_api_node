import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Cliente({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Cliente</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CadEndCli')}>
        <Text>Cadastro de endereço</Text>
      </TouchableOpacity>
    </View>
  );
}
