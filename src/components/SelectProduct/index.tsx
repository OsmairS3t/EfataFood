import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { IProduto } from '../../utils/interface';

import {
  Container,
  Title
} from './styles';

interface Props extends TouchableOpacityProps {
  produto: string;
};

export function SelectProduct({produto, ...rest}: Props){
 return (
  <Container {...rest}>
    <Title>
      {produto && 'Selecione o Produto'}
    </Title>
  </Container>
  );
}