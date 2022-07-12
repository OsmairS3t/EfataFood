import React from 'react';
import { useNavigation } from '@react-navigation/native'; 

import { Container, Title, ButtonSend, TextButton } from './styles';

export function Home() {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('approutes');
  }

  return (
      <Container>
          <Title>Ola World!</Title>
          <ButtonSend onPress={handleLogin}>
            <TextButton>Entrar</TextButton>
          </ButtonSend>
      </Container>
  )
}
