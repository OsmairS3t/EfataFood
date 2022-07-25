import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Header } from '../../components/Header';

import {
  Container,
  Product,
  ProductItem,
} from './styles';

import { products } from '../../utils/dataProducts';

export function ListaProdutos(){
  const [selectedId, setSelectedId] = useState('');

  function handleSelectProduct(id: string) {
    setSelectedId(id);
    console.log(selectedId);
  }

 return (
  <Container>
    <Header icon='logout' title='Produtos' />

    <FlatList 
      data={products}
      renderItem={({item}) => (
        <Product key={item.id} onPress={() => handleSelectProduct(item.id)}>
          <ProductItem>{item.nome}</ProductItem>
          <ProductItem>{item.preco}</ProductItem>
        </Product>
      )}

    />
  </Container>
  );
}