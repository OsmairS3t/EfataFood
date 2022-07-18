import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';
import { CardProduct } from '../../components/CardProduct';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { keyProducts } from '../../utils/keystorage';

import { 
  Container, 
  GroupButton,
  GroupButtonTitle,
  ButtonNew, 
  IconNew 
} from './styles';
import { IProduto } from '../../utils/interface';
import { FlatList, Text } from 'react-native';

export function Produtos() {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState<IProduto[]>([]);
  function handleNewProduct() {
    navigation.navigate('cadastroprodutos');
  }
  const getData = async () => {
    try {
      const response = await AsyncStorage.getItem(keyProducts)
      const dataProducts:IProduto[] = response ? JSON.parse(response) : [];
      setProdutos(dataProducts);
    } catch(e) {
      // error reading value
    }
  }
 
  return (
    <Container>
      <Header icon='logout' title='PRODUTOS' />
      <GroupButton>
        <GroupButtonTitle>
          Novo
        </GroupButtonTitle>
        <ButtonNew onPress={handleNewProduct}>
          <IconNew name='plus-circle' size={25} />
        </ButtonNew>
      </GroupButton>

      <CardProduct />
      
      {/* <FlatList 
        data={produtos}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.nome}
        renderItem={({item}) => (
          <Text>{item.nome}</Text>
        )}
      /> */}

    </Container>
  )
}
