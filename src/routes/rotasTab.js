import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../home';
import Produtos from '../produtos';
import Pedidos from '../listaPedidos'

const Tab = createBottomTabNavigator();

export default function RotasTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Produtos" component={Produtos} />
            <Tab.Screen name="Pedidos" component={Pedidos} />
        </Tab.Navigator>
    );
  }