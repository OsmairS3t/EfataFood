import React, { useState } from "react";
import { IProduto } from "../../utils/interface";

import {
  Container,
  CardImage,
  CardGroup,
  CardGroupTitle,
  CardTitle,
  CardPrice,
  CardIngredient
} from './styles';

interface Props {
  produto: IProduto;
  onPress: () => void;
}

export function CardProduct({produto, onPress}: Props) {

  return (
    <Container key={produto.id} onPress={onPress}>
      <CardImage 
        source={{uri:produto.foto}} 
        style={{ borderRadius: 50 }} 
      />
      <CardGroup>
        <CardGroupTitle>
          <CardTitle>{produto.nome}</CardTitle>
          <CardPrice>{produto.preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}</CardPrice>
        </CardGroupTitle>
        <CardIngredient>
          {produto.ingredientes}
        </CardIngredient>
      </CardGroup>
    </Container>
  )
}