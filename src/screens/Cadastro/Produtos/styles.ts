import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Button } from '../../../components/Button';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  padding: 40px 10px 5px 10px;
  flex: 1;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const GroupHeader = styled(TouchableOpacity)`
  margin: 10px 0px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const IconBack = styled<any>(Feather)`
  padding: 5px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Fields = styled.View``;

export const Upload = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
`;

export const PicImageButton = styled(Button)`
  max-width: 150px;
  margin-left: 32px;
`;

