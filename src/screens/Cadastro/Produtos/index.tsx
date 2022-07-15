import React, { useState } from 'react';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Form/Input';
import { Header } from '../../../components/Header';

import { 
  Container,
  Form,
  Fields,
 } from './styles';

export function CadastroProdutos() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [ingrediente, setIngrediente] = useState('');

  function handleRegister() {
    console.log(nome, preco, ingrediente)
  }

  return (
      <Container>
          <Header icon='logout' title='CAD. DE PRODUTOS' />
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
