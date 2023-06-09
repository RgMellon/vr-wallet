import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.blueDark};
  `}
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Empty = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.medium};
  `}
`;
