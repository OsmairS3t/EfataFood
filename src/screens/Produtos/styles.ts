import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  background-color: ${({theme})=>theme.colors.background};
  padding: 40px 20px;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Logotipo = styled.Image`
  width: 100px;
  height: 100px;
  `;

export const Title = styled.Text`
  color: ${({theme})=>theme.colors.text};
  font-size: 20px;
`;

export const Icon = styled<any>(AntDesign)`
  color: ${({theme})=>theme.colors.text};
`;

export const Card = styled.View`
  flex-direction: row;
`;

export const CardImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const CardGroup = styled.View`
  padding: 10px;
`;

export const CardGroupTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardTitle = styled.Text`
  color: ${({theme})=>theme.colors.text};
`;

export const CardPrice = styled.Text`
  color: ${({theme})=>theme.colors.text};
`;

export const CardIngredient = styled.Text`
  color: ${({theme})=>theme.colors.text};
`;

