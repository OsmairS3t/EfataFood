import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { CardProduct } from '../../components/CardProduct';

import { keyProducts } from '../../utils/keystorage';
import { IProduto } from '../../utils/interface';

import {
  Container,
  GroupButton,
  GroupButtonTitle,
  ButtonNew,
  IconNew,
  Message
} from './styles';

export function Produtos() {
  const [listProdutos, setListProdutos] = useState<IProduto[]>([]);
  const navigation = useNavigation();

  function handleNewProduct() {
    navigation.navigate('cadastroprodutos');
  }

  async function loadData() {
    const response = await AsyncStorage.getItem(keyProducts);
    const productsData = response ? JSON.parse(response) : [];
    const productsFormatted:IProduto[] = productsData
      .map((item:IProduto) => {
        const price = Number(item.preco).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });

        return {
          id: item.id,
          nome: item.nome,
          foto: item.foto,
          ingredientes: item.ingredientes,
          preco: price,
        }
      });
      setListProdutos(productsFormatted);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header icon='logout' title='PRODUTOS' />
      <GroupButton>
        <ButtonNew onPress={handleNewProduct}>
          <GroupButtonTitle>NOVO</GroupButtonTitle>
          <IconNew name='plus-circle' size={25} />
        </ButtonNew>
      </GroupButton>

      {/* {listProdutos && <Message>Não há produtos cadastrados.</Message>} */}
        <FlatList
          data={listProdutos}
          style={{ flex: 1, width: '100%' }}
          renderItem={({ item }) => (
            <CardProduct produto={item} />
          )}
        />

    </Container>
  )
}
