import React from 'react';

import { Header } from '../../components/Header';

import { 
  Container,
  Card,
  CardImage,
  CardGroup,
  CardGroupTitle,
  CardTitle,
  CardPrice,
  CardIngredient
 } from './styles';

export function Produtos() {
  return (
    <Container>
      <Header icon='logout' title='PRODUTOS' />

      <Card>
        <CardImage source={require('../../assets/pao-de-mel.png')} style={{borderRadius: 50}} />
        <CardGroup>
          <CardGroupTitle>
            <CardTitle>Nome do Produto</CardTitle>
            <CardPrice>R$ 99,99</CardPrice>
          </CardGroupTitle>
          <CardIngredient>
            Ingrediente 1
            Ingrediente 2
            Ingrediente 3
            Ingrediente 4
            Ingrediente 5
          </CardIngredient>
        </CardGroup>
      </Card>
    </Container>
  )
}
