import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text``;

export const ButtonSend = styled.TouchableOpacity`
    width: 90%;
    height: 60px;
    padding: 15px;
    background-color: ${({theme})=>theme.colors.primary};
    align-items: center;
    justify-content: center;
    border: 1px solid ${({theme})=>theme.colors.background};
    border-radius: 20px;
`;

export const TextButton = styled.Text`
    font-size: 20px;
    font-family: ${({theme})=>theme.fonts.bold};
`;

