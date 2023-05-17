import styled, { css } from "styled-components/native";

export const Title = styled.Text`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: ${theme.font.large};
    line-height: 32px;
    color: ${theme.colors.white};
  `}
`;
