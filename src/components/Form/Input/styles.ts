import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize' ;
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
    width: 100%;
    padding: 16px;
    font-size: ${RFValue(14)}px;
    background-color: ${({ theme }) => theme.colors.backgroundInput};
    font-family: ${({ theme }) => theme.fonts.regular};
`;
