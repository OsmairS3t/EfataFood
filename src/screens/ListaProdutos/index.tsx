import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Header } from '../../components/Header';

import {
  Container,
  Product,
  ProductItem,
} from './styles';

import { products } from '../../utils/dataProducts';
import { IProduto } from '../../utils/interface';

interface Props {
  onClose: ()=>void;
  setProduct: (product:IProduto)=>void;
}

export function ListaProdutos({setProduct, onClose}: Props){

  function handleSelectProduct(prod: IProduto) {
    setProduct(prod);
    onClose();
  }

 return (
  <Container>
    <Header icon='logout' title='Produtos' />

    <FlatList 
      data={products}
      renderItem={({item}) => (
        <Product key={item.id} onPress={() => handleSelectProduct(item)}>
          <ProductItem>{item.nome}</ProductItem>
          <ProductItem>
            {item.preco.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
        </ProductItem>
        </Product>
      )}

    />
  </Container>
  );
}