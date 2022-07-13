import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';
import { AppRoutes } from './app.routes';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
          <Screen name='login' component={Login} />
          <Screen name='approutes' component={AppRoutes} />
      </Navigator>
    </NavigationContainer>
  )
}