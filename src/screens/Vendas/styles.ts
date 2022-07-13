import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({theme})=>theme.colors.background};
  padding: 40px 10px 5px 10px;
`;

export const GroupMain = styled.View``;

export const Total = styled.View`
  height: 50px;
  padding: 10px;
  background-color: ${({theme})=>theme.colors.text};
  justify-content: center;
  align-items: center;
`;

export const TextTotal = styled.Text`
  font-size: 20px;
  color: ${({theme})=>theme.colors.background};
  font-family: ${({theme})=>theme.fonts.bold};
`;
