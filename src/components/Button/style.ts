import { TouchableOpacity } from "react-native";
import styled, { DefaultTheme, css } from "styled-components/native";

import { BEHAVIOR } from ".";

type Props = {
  type: BEHAVIOR;
  full: boolean;
};

const containerModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.blueLight};
  `,

  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.greenLight};
  `,

  disabled: (theme: DefaultTheme) => css`
    background: ${theme.colors.lightGrey};
  `,
};

export const Container = styled(TouchableOpacity)<Props>`
  ${({ theme, type, full }) => css`
    width: ${full ? "100%" : "300px"};
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    padding: 20px;
    ${containerModifier[type](theme)};
  `}
`;

const labelModifier = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,

  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.blueDark};
  `,

  disabled: (theme: DefaultTheme) => css`
    color: ${theme.colors.grey};
  `,
};

export const LabelButton = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-weight: 400;
    font-size: 18px;
    ${labelModifier[type](theme)};
  `}
`;
