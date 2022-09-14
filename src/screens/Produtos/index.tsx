import React, { useEffect, useState } from 'react';
import { FlatList, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { CardProduct } from '../../components/CardProduct';
import { CadastroProdutos } from '../Cadastro/Produtos';

import { keyProducts } from '../../utils/keystorage';
import { IProduto } from '../../utils/interface';

import {
  Container,
  GroupButton,
  GroupButtonTitle,
  ButtonBack,
  ButtonSell,
  ButtonNew,
  IconButton
} from './styles';
import { Vendas } from '../Cadastro/Vendas';

export function Produtos() {
  const navigation = useNavigation();
  const [produto, setProduto] = useState<IProduto>(null);
  const [isModalNewOpen, setIsModalNewOpen] = useState(false);
  const [isModalSellOpen, setIsModalSellOpen] = useState(false);
  const [listProdutos, setListProdutos] = useState<IProduto[]>([]);

  function handleBackHome() {
    navigation.navigate('home');
  }

  function handleSell() {
    navigation.navigate('vendas');
  }

  function handleOpenModalNewProduct() {
    setIsModalNewOpen(true);
  }

  function handleCloseModalNewProduct() {
    setIsModalNewOpen(false);
    loadData();
  }

  function handleOpenModalSellProduct(prod: IProduto) {
    setProduto(prod);
    setIsModalSellOpen(true);
  }

  function handleCloseModalSellProduct() {
    setIsModalSellOpen(false);
  }

  async function loadData() {
    const response = await AsyncStorage.getItem(keyProducts);
    const productsData = response ? JSON.parse(response) : [];
    /*     const productsFormatted: IProduto[] = productsData
          .map((item: IProduto) => {
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
          }); */
    setListProdutos(productsData);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header icon='logout' title='PRODUTOS' />
      <GroupButton>
        <ButtonBack onPress={handleBackHome}>
          <IconButton name='arrow-left' size={25} />
          <GroupButtonTitle>VOLTAR</GroupButtonTitle>
        </ButtonBack>

        <ButtonSell onPress={handleSell}>
          <GroupButtonTitle>:: IR PARA VENDAS ::</GroupButtonTitle>
        </ButtonSell>

        <ButtonNew onPress={handleOpenModalNewProduct}>
          <GroupButtonTitle>NOVO</GroupButtonTitle>
          <IconButton name='plus-circle' size={25} />
        </ButtonNew>
      </GroupButton>

      <FlatList
        data={listProdutos}
        style={{ flex: 1, width: '100%' }}
        renderItem={({ item }) => (
          <CardProduct
            produto={item} onPress={() => handleOpenModalSellProduct(item)}
          />
        )}
      />

      <Modal visible={isModalNewOpen}>
        <CadastroProdutos onPress={handleCloseModalNewProduct} />
      </Modal>

      <Modal visible={isModalSellOpen}>
        <Vendas produto={produto} onClose={handleCloseModalSellProduct} />
      </Modal>
    </Container>
  )
}
