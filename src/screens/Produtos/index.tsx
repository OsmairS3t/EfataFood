import React from 'react';
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();

  function handleNewProduct() {
    navigation.navigate('cadastroprodutos');
  }

  return (
    <Container>
      <Header icon='logout' title='PRODUTOS' />
      <GroupButton>
        <GroupButtonTitle>
          Novo
        </GroupButtonTitle>
        <ButtonNew onPress={handleNewProduct}>
          <IconNew name='plus-circle' size={25} />
        </ButtonNew>
      </GroupButton>

      <CardProduct />

    </Container>
  )
}
