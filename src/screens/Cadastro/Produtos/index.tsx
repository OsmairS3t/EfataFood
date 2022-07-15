import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Form/Input';
import { Header } from '../../../components/Header';

import { 
  Container,
  Form,
  Fields,
  GroupHeader,
  IconBack,
 } from './styles';

export function CadastroProdutos() {
  const navitation = useNavigation();
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [ingrediente, setIngrediente] = useState('');

  function handleRegister() {
    console.log(nome, preco, ingrediente)
    setNome('');
    setPreco('');
    setIngrediente('');
  }

  function handleBack() {
    navitation.goBack();
  }

  return (
      <Container>
          <Header icon='logout' title='CAD. DE PRODUTOS' />
          
          <GroupHeader onPress={handleBack}>
            <IconBack name='arrow-left' size={25} />
          </GroupHeader>
          
          <Form>
            <Fields>
              <Input 
                placeholder='Nome do produto' 
                keyboardType='default'
                onChangeText={setNome}
              />
              <Input 
                placeholder='Preço' 
                keyboardType='numbers-and-punctuation'
                onChangeText={setPreco}
              />
              <Input 
                placeholder='Ingredientes' 
                keyboardType='default'
                onChangeText={setIngrediente}
              />
            </Fields>
            <Button 
              title='Cadastrar' 
              onPress={handleRegister} 
            />
          </Form>
      </Container>
  )
}
