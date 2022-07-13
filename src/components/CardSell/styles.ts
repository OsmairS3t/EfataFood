import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
    height: 100px;
    background-color: ${({theme})=>theme.colors.backgroundButton};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const GroupPay = styled.View`
    width: 50px;
    height: 100px;
    justify-content: space-around;
    align-items: center;
    background-color: ${({theme})=>theme.colors.primary};
`;

export const BtnMoney = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    padding: 10px;
    border: 1px solid ${({theme})=>theme.colors.background};
    //background-color: ${({theme})=>theme.colors.text};
`;

export const IconMoney = styled<any>(Feather)``;

export const BtnCard = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    padding: 10px;
    border: 1px solid ${({theme})=>theme.colors.background};
    //background-color: ${({theme})=>theme.colors.text};
`;

export const IconCard = styled<any>(Feather)``;

export const GroupProduct = styled.View`
    flex-direction: row;
`;


export const ProductPhoto = styled.Image`
    width: 76px;
    height: 76px;
`;

export const SubGroupProduct = styled.View`
    margin-left: 10px;
    justify-content: center;
    align-items: center;
`;

export const ProductName = styled.Text`
    color: ${({theme})=>theme.colors.text};
    `;

export const ProductPrice = styled.Text`
    color: ${({theme})=>theme.colors.text};
`;

export const GroupSell = styled.View`
    width: 50px;
    height: 100px;
    justify-content: space-around;
    align-items: center;
    background-color: ${({theme})=>theme.colors.primary};
`;

export const BtnPlus = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    padding: 5px;
    border: 1px solid black;
`;

export const IconPlus = styled<any>(Feather)``;

export const Amount = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
`;

export const BtnMinus = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    padding: 5px;
    border: 1px solid black;
`;

export const IconMinus = styled<any>(Feather)``;
