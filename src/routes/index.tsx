import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
//import { AppRoutes } from './app.routes';
import { Produtos } from '../screens/Produtos';
import { CadastroProdutos } from '../screens/Cadastro/Produtos';
import { Vendas } from '../screens/Vendas';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
          <Screen name='home' component={Home} />
          <Screen name='produtos' component={Produtos} />
          <Screen name='cadastroprodutos' component={CadastroProdutos} />
          <Screen name='vendas' component={Vendas} />
      </Navigator>
    </NavigationContainer>
  )
}