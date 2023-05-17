import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    line-height: 22px;
    font-size: ${theme.font.medium};
    margin-top: 14px;
  `}
`;

export const Wrapper = styled.View`
  margin-top: 10px;
`;
