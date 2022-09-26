import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import { MaterialIcons } from '@expo/vector-icons';

import Home from '../home';
import Produtos from '../produtos';
import Pedidos from '../listaPedidos'

const Tab = createBottomTabNavigator();

export default function RotasTab() {
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarLabelStyle: {fontSize: 16, textAlign: 'center'}, 
                tabBarActiveTintColor: '#F05545', 
                tabBarInactiveTintColor:'#fafafa',     
                headerShown: false,           
                tabBarStyle: {
                    backgroundColor: '#7F0000',                     
                    marginTop: 0,
                    textAlign: 'center',
                    justifyContent: 'center',
                    textAlignVertical: "center"
                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    //tabBarLabel: 'Profile', 
                    //tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        color = focused ? '#F05545' : '#fafafa';
                        return <MaterialIcons name="home" size={30} color={color} />;
                    },                     
                  }}
            />
            <Tab.Screen 
                name="Produtos" 
                component={Produtos} 
                options={{
                    //tabBarLabel: 'Profile', 
                    //tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        color = focused ? '#F05545' : '#fafafa';
                        return <MaterialIcons name="filter-list" size={30} color={color} />;
                    },                     
                  }}
            />
            <Tab.Screen 
                name="Pedidos" 
                component={Pedidos} 
                options={{
                    //tabBarLabel: 'Profile', 
                    //tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        color = focused ? '#F05545' : '#fafafa';
                        return <MaterialIcons name="shopping-bag" size={30} color={color} />;
                    },                     
                  }}
            />
        </Tab.Navigator>
    );
  }