import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(16)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 15px 10px 15px;
  background-color: ${({ theme }) => theme.colors.backgroundAux};
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.backgroundButton};
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
  font-family: ${({theme})=>theme.fonts.bold};
  color: ${({theme})=>theme.colors.text};
  font-size: ${RFValue(20)}px;
`;