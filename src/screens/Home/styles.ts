import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    padding: 80px 20px;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme})=>theme.colors.background};
`;

export const LogoTipo = styled.Image`
    width: 240px;
    height: 240px;
`;

export const GroupButton = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ButtonSend = styled.TouchableOpacity`
    width: 150px;
    height: 150px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme})=>theme.colors.title};
    border: 1px solid ${({theme})=>theme.colors.backgroundAux};
    border-radius: 20px;
`;

export const IconButton = styled(Feather)`
    width: 50px;
    height: 50px;
    color: ${({ theme }) => theme.colors.backgroundAux};
`;

export const TextButton = styled.Text`
    font-size: 30px;
    color: ${({theme})=>theme.colors.backgroundAux};
    font-family: ${({theme})=>theme.fonts.regular};
`;
