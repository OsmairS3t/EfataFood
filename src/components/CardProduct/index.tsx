import React from "react";

import {
  Container,
  CardImage,
  CardGroup,
  CardGroupTitle,
  CardTitle,
  CardPrice,
  CardIngredient
} from './styles';

export function CardProduct() {
  return (
    <Container>
      <CardImage 
        source={require('../../assets/pao-de-mel.png')} 
        style={{ borderRadius: 50 }} 
      />
      <CardGroup>
        <CardGroupTitle>
          <CardTitle>Pão de Mel</CardTitle>
          <CardPrice>R$ 8,90</CardPrice>
        </CardGroupTitle>
        <CardIngredient>
          Mel, 
          Farinha de trigo,
          Leite,
          Açúcar mascavo,
          Chá de erva doce
        </CardIngredient>
      </CardGroup>
    </Container>
  )
}