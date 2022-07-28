import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Header } from '../../components/Header';
import uuid from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { keyProducts } from '../../utils/keystorage'

import {
  Container,
  GroupContainer,
  GroupSell,
} from './styles';

import { products } from '../../utils/dataProducts';
import { IProduto, IVenda } from '../../utils/interface';
import { CardSell } from '../../components/CardSell';
import { Button } from '../../components/Button';

interface Props {
  vendas: IVenda[];
  setVendas: (venda: IVenda[]) => void;
  onClose: () => void;
}

export function ListaProdutos({ vendas, setVendas, onClose }: Props) {
  const [vendidos, setVendidos] = useState(0);
  const [asyncProducts, setAsyncProducts] = useState<IProduto[]>([]);

  async function loadProducts() {
    const response = await AsyncStorage.getItem(keyProducts);
    const ArrProducts: IProduto[] = response ? JSON.parse(response) : [];
    setAsyncProducts(ArrProducts);
  }

  useEffect(()=>{
    loadProducts();
  }, []);

  function handleSelectProduct(prod: IProduto) {
    onClose();
  }

  return (
    <Container>
      <Header icon='logout' title='Venda de Produtos' />
      <GroupContainer>
      <FlatList
        data={asyncProducts}
        renderItem={({ item }) => (
          <GroupSell key={item.id}>
            <CardSell
              produto={item}
            />
          </GroupSell>
        )}
      />
      <Button title='Finalizar Venda' onPress={onClose} />
      </GroupContainer>
    </Container>
  );
}