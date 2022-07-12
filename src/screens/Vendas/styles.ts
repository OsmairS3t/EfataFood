import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({theme})=>theme.colors.background};
  padding: 40px 20px;
  flex: 1;
`;

export const Total = styled.View`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 10px;
  padding: 10px;
  background-color: ${({theme})=>theme.colors.text};
  justify-content: center;
  align-items: flex-end;
`;

export const TextTotal = styled.Text`
  font-size: 25px;
  color: ${({theme})=>theme.colors.background};
`;
