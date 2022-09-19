import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text> 
      <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
        <Text>Acessar tela</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CadastroUsu')}>
        <Text>Cadastro de usuário</Text>
      </TouchableOpacity>      
    </View>
  );
}
