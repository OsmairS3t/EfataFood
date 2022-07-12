import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme})=>theme.colors.background};
  padding: 40px 20px;
  flex: 1;
`;

export const Card = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({theme})=>theme.colors.card};
`;

export const CardImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const CardGroup = styled.View`
  //padding: 10px;
`;

export const CardGroupTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  //padding-right: 20px;
`;

export const CardTitle = styled.Text`
  color: ${({theme})=>theme.colors.text};
`;

export const CardPrice = styled.Text`
  color: ${({theme})=>theme.colors.text};
`;

export const CardIngredient = styled.Text`
  color: ${({theme})=>theme.colors.text};
`;

