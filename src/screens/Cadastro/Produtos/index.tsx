import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Form/Input';
import { Header } from '../../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { keyProducts } from '../../../utils/keystorage'

import { 
  Container,
  Form,
  Fields,
  GroupHeader,
  IconBack,
 } from './styles';
import { Alert } from 'react-native';

export function CadastroProdutos() {
  const navitation = useNavigation();
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [ingrediente, setIngrediente] = useState('');

  async function handleRegister() {
    try {
        const data = {
          id: uuid.v4(),
          nome,
          preco,
          ingrediente
        }
        await AsyncStorage.setItem(keyProducts, JSON.stringify(data));
        Alert.alert('Produto cadastrado com sucesso!');
        console.log(data)
    } catch (error) {
      Alert.alert('Não foi possivel cadastrar o produto!');
    }
    //limpar campos
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
