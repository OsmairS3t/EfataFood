import React from 'react';
import { useNavigation } from '@react-navigation/native'; 

import { 
  Container,
  Title,
  LogoTipo, 
  Form,
  Input, 
  ButtonSend,
  Link, 
  TextButton,
  ButtonSocial,
  ImageSocial,
  TextButtonSocial
} from './styles';

export function Home() {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('approutes');
  }

  return (
      <Container>
          <LogoTipo source={require('../../assets/logotipoeb.png')} />
          <Form>
            <Title>Faça seu login:</Title>
            <Input placeholder='e-mail' />
            <Input placeholder='******' />
            <ButtonSend onPress={handleLogin}>
              <TextButton>Entrar</TextButton>
            </ButtonSend>
            <Link>Esqueci a senha | Cadastrar</Link>
          </Form>
          <ButtonSocial onPress={handleLogin}>
            <ImageSocial source={require('../../assets/google.png')} />
            <TextButtonSocial>Entrar com Google</TextButtonSocial>
          </ButtonSocial>
      </Container>
  )
}
