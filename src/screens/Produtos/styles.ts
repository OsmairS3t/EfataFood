import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme})=>theme.colors.background};
  padding: 40px 20px;
  flex: 1;
`;

export const GroupButton = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const GroupButtonTitle = styled.Text`
  font-family: ${({theme})=>theme.fonts.regular};
  color: ${({theme})=>theme.colors.text};
  font-size: 18px;
  margin-right: 8px;
`;


export const ButtonNew = styled.TouchableOpacity``;

export const IconNew = styled<any>(Feather)`
  color: ${({theme})=>theme.colors.text};
`;

