import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';
import { CardProduct } from '../../components/CardProduct';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { keyProducts } from '../../utils/keystorage';
import { products } from '../../utils/dataProducts';

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
  //const [listProdutos, setListProdutos] = useState<IProduto[]>([]);
  const navigation = useNavigation();
  
function handleNewProduct() {
    navigation.navigate('cadastroprodutos');
  }

/* 
  async function loadData() {
    try {
      const response = await AsyncStorage.getItem(keyProducts)
      const dataProducts:IProduto[] = response ? JSON.parse(response) : [];
      setListProdutos(dataProducts);
    } catch(e) {
      // error reading value
    }
  }

  useEffect(()=> {
    loadData;
  }, []);
 */  

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

      <FlatList 
        data={products}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <CardProduct produto={item} />
        )}
      /> 

    </Container>
  )
}
