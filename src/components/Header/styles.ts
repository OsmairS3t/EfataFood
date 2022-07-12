import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Logotipo = styled.Image`
  width: 70px;
  height: 70px;
`;

export const BtnIcon = styled.TouchableOpacity``;

export const Icon = styled<any>(AntDesign)`
  color: ${({theme})=>theme.colors.text};
`;

export const Title = styled.Text`
  color: ${({theme})=>theme.colors.text};
  font-size: 20px;
`;