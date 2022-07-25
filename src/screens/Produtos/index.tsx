import React, { useEffect, useState } from 'react';
import { FlatList, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Header } from '../../components/Header';
import { CardProduct } from '../../components/CardProduct';
import { CadastroProdutos } from '../Cadastro/Produtos';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listProdutos, setListProdutos] = useState<IProduto[]>([]);

  function handleOpenModalNewProduct() {
    setIsModalOpen(true);
  }

  function handleCloseModalNewProduct() {
    setIsModalOpen(false);
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
        <ButtonNew onPress={handleOpenModalNewProduct}>
          <GroupButtonTitle>NOVO</GroupButtonTitle>
          <IconNew name='plus-circle' size={25} />
        </ButtonNew>
      </GroupButton>

        <FlatList
          data={listProdutos}
          style={{ flex: 1, width: '100%' }}
          renderItem={({ item }) => (
            <CardProduct produto={item} />
          )}
        />

      <Modal visible={isModalOpen}>
        <CadastroProdutos onPress={handleCloseModalNewProduct} />
      </Modal>
    </Container>
  )
}
