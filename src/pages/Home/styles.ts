import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const WrapperButton = styled.View`
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    color: ${theme.colors.white};
  `}
`;

export const WrapperTitle = styled.Text`
  margin-bottom: 40px;
`;
