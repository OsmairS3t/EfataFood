import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; 

import { Input } from '../../components/Form/Input';

import { 
  Container,
  Title,
  LogoTipo, 
  Form,
  ButtonSend,
  Link, 
  TextButton,
  ButtonSocial,
  ImageSocial,
  TextButtonSocial
} from './styles';

export function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    //console.log(email, password);
    navigation.navigate('approutes');
  }
  function handleLoginSocial() {
    navigation.navigate('approutes');
  }

  return (
      <Container>
          <LogoTipo source={require('../../assets/logotipoeb.png')} />
          <Form>
            <Title>Faça seu login:</Title>
            <Input 
              placeholder='e-mail' 
              keyboardType='email-address'
              onChangeText={setEmail}
            />
            <Input 
              placeholder='******' 
              keyboardType='visible-password'
              onChangeText={setPassword}
            />
            <ButtonSend onPress={handleLogin}>
              <TextButton>Entrar</TextButton>
            </ButtonSend>
            <Link>Esqueci a senha | Cadastrar</Link>
          </Form>

          <ButtonSocial onPress={handleLoginSocial}>
            <ImageSocial source={require('../../assets/google.png')} />
            <TextButtonSocial>Entrar com Google</TextButtonSocial>
          </ButtonSocial>
      </Container>
  )
}
