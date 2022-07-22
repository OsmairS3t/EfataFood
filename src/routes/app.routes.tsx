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
      tabBarActiveBackgroundColor: theme.colors.backgroundButton,
      tabBarInactiveBackgroundColor: theme.colors.backgroundButtonOpacity,
      tabBarLabelPosition: 'beside-icon',
      tabBarLabelStyle: {
        fontFamily: theme.fonts.bold,
        fontSize: 16
      }
    }}>
      <Screen name="Produtos" component={Produtos}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="fastfood"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen name="Vendas" component={Vendas}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="attach-money"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}

