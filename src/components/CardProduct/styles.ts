import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({theme})=>theme.colors.card};
  padding: 0px 10px;
`;

export const CardImage = styled.Image`
  width: 65px;
  height: 65px;
  margin-right: 10px;
`;

export const CardGroup = styled.View`
  padding: 10px 0px;
  width: 290px;
`;

export const CardGroupTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CardTitle = styled.Text`
  color: ${({theme})=>theme.colors.text};
  font-family: ${({theme})=>theme.fonts.regular};
  font-size: 18px;
`;

export const CardPrice = styled.Text`
  color: ${({theme})=>theme.colors.text};
  font-family: ${({theme})=>theme.fonts.regular};
  font-size: 18px;
`;

export const CardIngredient = styled.Text`
  color: ${({theme})=>theme.colors.text};
  font-family: ${({theme})=>theme.fonts.regular};
`;

