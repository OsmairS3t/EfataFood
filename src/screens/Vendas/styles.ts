import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({theme})=>theme.colors.background};
`;

export const Title = styled.Text`
  padding: 10px 15px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const GroupMain = styled.View``;

export const GroupSell = styled.View`
  padding: 0 15px;
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
