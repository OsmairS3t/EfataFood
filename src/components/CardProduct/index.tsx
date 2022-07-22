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
}

export function CardProduct({produto}: Props) {
  console.log(produto)

  return (
    <Container key={produto.id}>
      <CardImage 
        source={{uri:produto.foto}} 
        style={{ borderRadius: 50 }} 
      />
      <CardGroup>
        <CardGroupTitle>
          <CardTitle>{produto.nome}</CardTitle>
          <CardPrice>R$ {produto.preco}</CardPrice>
        </CardGroupTitle>
        <CardIngredient>
          {produto.ingredientes}
        </CardIngredient>
      </CardGroup>
    </Container>
  )
}