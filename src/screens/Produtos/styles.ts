import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme})=>theme.colors.background};
  flex: 1;
`;

export const GroupButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
  padding: 10px 0;
`;

export const ButtonBack = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  width: 100px;
`;

export const ButtonSell = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  width: 150px;
`;

export const ButtonNew = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  width: 100px;
`;

export const GroupButtonTitle = styled.Text`
  font-family: ${({theme})=>theme.fonts.medium};
  color: ${({theme})=>theme.colors.text};
  font-size: ${RFValue(12)}px;
`;

export const IconButton = styled<any>(Feather)`
  color: ${({theme})=>theme.colors.text};
  margin: 0px 8px;
`;
