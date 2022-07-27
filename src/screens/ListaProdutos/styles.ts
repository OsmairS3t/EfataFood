import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const GroupContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 10px;
`;

export const GroupSell = styled.View`
  padding: 0px;
  margin-bottom: 5px;
`;

export const Product = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(40)}px;
  padding: 0px 20px;
  margin: 2px 0px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.backgroundButtonOpacity};
  `;

export const ProductItem = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;
