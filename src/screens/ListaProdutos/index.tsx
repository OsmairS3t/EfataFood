import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Header } from '../../components/Header';

import {
  Container,
  GroupContainer,
  GroupSell,
} from './styles';

import { products } from '../../utils/dataProducts';
import { IProduto } from '../../utils/interface';
import { CardSell } from '../../components/CardSell';
import { Button } from '../../components/Button';

interface Props {
  setProduct: (product: IProduto) => void;
  onClose: () => void;
}

export function ListaProdutos({ setProduct, onClose }: Props) {
  const [vendidos, setVendidos] = useState(0);

  function handleSelectProduct(prod: IProduto) {
    setProduct(prod);
    onClose();
  }

  return (
    <Container>
      <Header icon='logout' title='Venda de Produtos' />
      <GroupContainer>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <GroupSell key={item.id}>
            <CardSell
              produto={item}
              vendidos={vendidos}
              setVendidos={setVendidos}
            />
          </GroupSell>
        )}
      />
      <Button title='Finalizar Venda' onPress={onClose} />
      </GroupContainer>
    </Container>
  );
}