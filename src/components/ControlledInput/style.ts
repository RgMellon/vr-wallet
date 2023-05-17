import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.red}
    font-size: ${theme.font.small};
    margin: 7px 0;
  `}
`;
