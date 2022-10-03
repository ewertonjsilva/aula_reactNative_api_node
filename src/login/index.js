import { Text, View, TouchableOpacity, TextInput } from 'react-native';
// https://icons.expo.fyi/
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles'; 

import Logo from '../../assets/compartilhados/logo';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Login</Text> 
      <TextInput style={styles.input} placeholder= 'usuário'/>
      <TextInput style={styles.input} placeholder= 'senha'/>
      <TouchableOpacity style={styles.btnCadUsu} onPress={() => navigation.navigate('CadastroUsu')}>
        <Text style={styles.txtCadUsu}>Cadastrar usuário</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnEntrar} onPress={() => navigation.navigate('Tab')}>
        <MaterialIcons name="vpn-key" size={24} color="#FAFAFA" />
        <Text style={styles.txtEntrar}>Entrar</Text>
      </TouchableOpacity>
            
    </View>
  );
}
