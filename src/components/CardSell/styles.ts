import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
    height: 100px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.backgroundAux};
`;

export const GroupProduct = styled.View`
    flex-direction: row;
    margin-left: 10px;
`;

export const ProductPhoto = styled.Image`
    width: 76px;
    height: 76px;
`;

export const SubGroupProduct = styled.View`
    margin-left: 10px;
    justify-content: center;
    align-items: flex-start;
`;

export const ProductName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 3px;
`;

export const ProductPrice = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.text};
    margin: 2px 0px;
`;

export const GroupSell = styled.View`
    width: 50px;
    height: 100px;
    justify-content: space-around;
    align-items: center;
`;

export const BtnPlus = styled.TouchableOpacity`
    width: 50px;
    height: 35px;
    padding: 5px;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.backgroundAux};
    background-color: ${({ theme }) => theme.colors.backgroundButton};
`;

export const IconPlus = styled<any>(Feather)`
    color: ${({ theme }) => theme.colors.backgroundAux};
`;

export const Amount = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const BtnMinus = styled.TouchableOpacity`
    width: 50px;
    height: 35px;
    padding: 5px;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.backgroundAux};
    background-color: ${({ theme }) => theme.colors.backgroundButton};
`;

export const IconMinus = styled<any>(Feather)`
    color: ${({ theme }) => theme.colors.backgroundAux};
`;
