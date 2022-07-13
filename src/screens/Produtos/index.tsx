import React from 'react';

import { Header } from '../../components/Header';
import { CardProduct } from '../../components/CardProduct';

import { 
  Container, 
  GroupButton,
  GroupButtonTitle,
  ButtonNew, 
  IconNew 
} from './styles';

export function Produtos() {
  return (
    <Container>
      <Header icon='logout' title='PRODUTOS' />
      <GroupButton>
        <GroupButtonTitle>
          Novo
        </GroupButtonTitle>
        <ButtonNew>
          <IconNew name='plus-circle' size={25} />
        </ButtonNew>
      </GroupButton>

      <CardProduct />

    </Container>
  )
}
