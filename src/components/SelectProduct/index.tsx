import React from 'react';

import {
  Container,
  Title,
  Icon
} from './styles';

interface Props {
  produto: string;
  onPress: () => void;
};

export function SelectProduct({produto, onPress}: Props){
 return (
  <Container onPress={onPress}>
    <Title>{produto}</Title>
    <Icon name="chevron-down" size={30} />
  </Container>
  );
}