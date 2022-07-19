import styled, {css} from 'styled-components/native';

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 80px;
`;

export const Placeholder = styled.View`
  width: 140px;
  height: 140px;
  border-radius: 80px;
  justify-content: center;
  align-items: center;
  border: 1px dashed ${({theme})=>theme.colors.text};
`;

export const PlaceholderTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text};
  `};
`;