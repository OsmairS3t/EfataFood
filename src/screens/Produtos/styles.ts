import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme})=>theme.colors.background};
  flex: 1;
`;

export const GroupButton = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0 15px;
  padding: 10px 0;
`;

export const GroupButtonTitle = styled.Text`
  font-family: ${({theme})=>theme.fonts.regular};
  color: ${({theme})=>theme.colors.text};
  font-size: ${RFValue(12)}px;
  margin-right: 8px;
`;

export const ButtonNew = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  width: 100px;
`;

export const IconNew = styled<any>(Feather)`
  color: ${({theme})=>theme.colors.text};
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;
