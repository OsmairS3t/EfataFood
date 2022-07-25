import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Title
} from './styles';

interface Props extends TouchableOpacityProps {};

export function SelectProduct({...rest}: Props){
 return (
  <Container {...rest}>
    <Title>Selecione o Produto</Title>
  </Container>
  );
}