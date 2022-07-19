import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
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
  Upload,
  PicImageButton
} from './styles';
import { Alert } from 'react-native';
import { Photo } from '../../../components/Photo';

export function CadastroProdutos() {
  const [image, setImage] = useState('');
  const navitation = useNavigation();
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState(0);
  const [ingredientes, setIngredientes] = useState('');
  const [foto, setFoto] = useState('');

  async function handlePickerImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4,4]
      });
      
      if (!result.cancelled) {
        setImage(result.uri);
      }
     }
  }

  async function handleRegister() {
    try {
      const data = {
        id: uuid.v4(),
        nome,
        preco,
        ingredientes,
        foto: image
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
            onChangeText={preco => setPreco(Number(preco))}
          />
          <Input
            placeholder='Ingredientes'
            keyboardType='default'
            onChangeText={setIngredientes}
          />
          
          <Upload>
            <Photo uri={image} />
            <PicImageButton title="Carregar" onPress={handlePickerImage} />
          </Upload>

        </Fields>
        <Button
          title='Cadastrar'
          onPress={handleRegister}
        />
      </Form>
    </Container>
  )
}
