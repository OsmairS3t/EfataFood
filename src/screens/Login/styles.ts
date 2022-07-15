import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme})=>theme.colors.background};
`;

export const LogoTipo = styled.Image`
    width: 140px;
    height: 140px;
`;

export const Form = styled.View`
    width: 100%;
    height: 400px;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Title = styled.Text`
    color: ${({theme})=>theme.colors.title};
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: 32px;
`;

export const Link = styled.Text`
    color: ${({theme})=>theme.colors.text};
    font-size: 18px;
    font-family: ${({theme})=>theme.fonts.regular};
    align-self: center;
`;

export const ButtonSend = styled.TouchableOpacity`
    width: 100%;
    height: 70px;
    padding: 10px;
    background-color: ${({theme})=>theme.colors.secondary};
    align-items: center;
    justify-content: center;
    border: 1px solid ${({theme})=>theme.colors.text};
    border-radius: 20px;
`;

export const TextButton = styled.Text`
    font-size: 30px;
    color: ${({theme})=>theme.colors.text};
    font-family: ${({theme})=>theme.fonts.regular};
`;

export const ButtonSocial = styled.TouchableOpacity`
    width: 100%;
    height: 80px;
    padding: 10px;
    background-color: ${({theme})=>theme.colors.text};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({theme})=>theme.colors.text};
    border-radius: 30px;
`;
export const ImageSocial = styled.Image`
    width: 40px;
    height: 40px;
`;

export const TextButtonSocial = styled.Text`
    margin-left: 20px;
    font-size: 24px;
    font-family: ${({theme})=>theme.fonts.regular};
`;

