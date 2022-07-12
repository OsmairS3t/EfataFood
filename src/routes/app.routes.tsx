import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons';

import { Produtos } from '../screens/Produtos';
import { Vendas } from '../screens/Vendas';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.background,
      tabBarActiveBackgroundColor: theme.colors.primary,
      tabBarInactiveBackgroundColor: theme.colors.background,
      tabBarLabelPosition: 'beside-icon',

    }}>
      <Screen name="Produtos" component={Produtos}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="square-foot"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen name="vendas" component={Vendas}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="home"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}

