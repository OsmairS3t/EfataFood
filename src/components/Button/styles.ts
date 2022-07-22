import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface ButtonProps {
  type: string;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  padding: 18px;
  background-color: ${({theme, type})=> 
    type==='upload' ? theme.colors.backgroundButtonUpload : theme.colors.backgroundButton};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.backgroundAux};
`;
