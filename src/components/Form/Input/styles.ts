import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
    width: 100%;
    height: 70px;
    padding: 16px;
    margin-bottom: 10px;
    font-size: ${RFValue(18)}px;
    border-radius: 10px;
    border: 0px dotted ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.backgroundInput};
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({theme})=>theme.colors.text};
`;
