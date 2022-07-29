import { Image } from './../../../components/Photo/styles';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const GroupHeader = styled(TouchableOpacity)`
  width: 100%;
  margin: 0px;
  flex-direction: row;
  justify-content: flex-start;
`;

export const TextBack = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  `;

export const IconBack = styled<any>(Feather)`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Form = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ImgProduto = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 100px;
`;

export const Field = styled.View`
  width: 200px;
  margin: 10px;
  padding: 10px 20px;
`;

export const GroupTitle = styled.View`
  width: 100%;
  flex-wrap: wrap;
`;

export const Title = styled.Text`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  margin-top: 30px;
  margin-bottom: 10px;
  text-align: center;
  align-self: center;
`;

export const SubTitle1 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  width: 100%;
  text-align: center;
  `;

export const Ingredientes = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  `;

export const Preco = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  text-align: center;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  margin-bottom: 10px;
`;

export const GroupPlus = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Quantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  height: 60px;
  width: 70px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundInput};
`;

export const BtnMinus = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundAux};
`;

export const IconMinus = styled(Feather)`
  color: ${({ theme }) => theme.colors.buttonBorder};
  `;

export const BtnPlus = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  margin-left: 10px;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundAux};
  `;

export const IconPlus = styled(Feather)`
  color: ${({ theme }) => theme.colors.buttonBorder};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 10px 20px;
  align-items: flex-end;
`;

export const SubTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  margin-bottom: 10px;
`;