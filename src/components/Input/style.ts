import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Input = styled(TextInput)`
  ${({ theme }) => css`
    width: 100%;
    height: 45px;
    background: ${theme.colors.white};
    padding: 10px;
    border-radius: 6px;
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.small};
    line-height: 16px;
    margin-bottom: 14px;
  `}
`;
