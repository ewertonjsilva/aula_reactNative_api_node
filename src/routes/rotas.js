import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import Login from '../login';
import Home from '../home'; 
import CadastroUsu from '../cadCliente';
import CadEndCli from '../enderecoCliente';

const Stack = createNativeStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="CadastroUsu" component={CadastroUsu} />
                <Stack.Screen name="CadEndCli" component={CadEndCli} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

