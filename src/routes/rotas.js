import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import Login from '../login';
import Tab from '../routes/rotasTab'; 
import CadastroUsu from '../cadCliente';
import CadEndCli from '../enderecoCliente'; 
import Carrinho from '../carrinho';

const Stack = createNativeStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Tab" component={Tab} />
                <Stack.Screen name="CadastroUsu" component={CadastroUsu} />
                <Stack.Screen name="CadEndCli" component={CadEndCli} />
                <Stack.Screen name="Carrinho" component={Carrinho} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

