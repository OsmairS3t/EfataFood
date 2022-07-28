import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({theme})=>theme.colors.background};
`;

export const GroupMain = styled.View``;

export const Field = styled.View`
  flex-direction: row;
  margin: 5px 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  padding: 10px 0px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const BtnNewSell = styled.TouchableOpacity``;

export const IconNewSell = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
`;

export const BtnDate = styled(TouchableOpacity)`
  width: 35px;
  height: 35px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundAux};
  align-items: center;
  justify-content: center;
`;

export const IconDate = styled(Feather)`
  color: ${({ theme }) => theme.colors.backgroundButton};
`;

export const GroupSell = styled.View`
  padding: 0 15px;
`;

export const Venda = styled.View`
  width: 100%;
  margin: 5px 0px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundAux};
`;

export const Produto = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px; 
`;

export const Detalhes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Valor = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px; 
`;

export const Quant = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px; 
`;

export const Total = styled.View`
  height: 50px;
  padding: 5px 15px;
  justify-content: center;
  align-items: flex-end;
  border-top-width: 1px;
  border-style: solid;
  border-color:  ${({theme})=>theme.colors.backgroundButton};
  background-color: ${({theme})=>theme.colors.background};
`;

export const TextTotal = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme})=>theme.colors.text};
  font-family: ${({theme})=>theme.fonts.bold};
`;
