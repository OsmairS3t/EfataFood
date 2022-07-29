import React, { useState } from 'react';
import { Alert } from 'react-native';
import { NavigationRouteContext, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Form/Input';
import { Header } from '../../../components/Header';
import { Photo } from '../../../components/Photo';

import { keyProducts } from '../../../utils/keystorage'

import {
  Container,
  Form,
  Fields,
  GroupHeader,
  TextBack,
  IconBack,
  Upload,
  PicImageButton
} from './styles';
import { IProduto } from '../../../utils/interface';

interface Props {
  onPress: () => void;
}
export function CadastroProdutos({onPress}: Props) {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState(0);
  const [ingredientes, setIngredientes] = useState('');
  const [image, setImage] = useState('');

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
    const newData = {
      id: String(uuid.v4()),
      nome,
      preco,
      ingredientes,
      foto: image
    }

    try {
      const recordedData = await AsyncStorage.getItem(keyProducts);
      const currentData:IProduto[] = recordedData ? JSON.parse(recordedData) : [];
      const formattedData:IProduto[] = [
        ...currentData,
        newData
      ];

      await AsyncStorage.setItem(keyProducts, JSON.stringify(formattedData));
      Alert.alert('Produto cadastrado com sucesso!');
      onPress();
      //limpar campos
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possivel cadastrar o produto!');
    }
  }

  return (
    <Container>
      <Header icon='logout' title='CADASTRO DE PRODUTOS' />

      <GroupHeader onPress={onPress}>
        <IconBack name='arrow-left' size={25} />
        <TextBack>VOLTAR</TextBack>
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
            keyboardType='numeric'
            onChangeText={(preco) => setPreco(Number(preco))}
          />
          <Input
            placeholder='Ingredientes'
            keyboardType='default'
            onChangeText={setIngredientes}
          />
          
          <Upload>
            <Photo uri={image} />
            <PicImageButton 
              type="upload"
              title="Carregar" 
              onPress={handlePickerImage} 
            />
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
