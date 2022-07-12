import React from 'react';

import { 
  Container,
  Header,
  Logotipo,
  Title,
  Icon,
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
      <Header>
        <Logotipo source={require('../../assets/logotipoeb.png')} />
        <Icon name='logout' size={30} />
      </Header>
      <Title>Produtos:</Title>

      <Card>
        <CardImage source={require('../../assets/pao-de-mel.png')} />
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
