import { TouchableOpacity } from "react-native";
import styled, { DefaultTheme, css } from "styled-components/native";
import theme from "../../styles/theme";
import { COLOR } from ".";

type Props = {
  type: COLOR;
};

const containerModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.blueLight};
  `,

  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.greenLight};
  `,
};

export const Container = styled(TouchableOpacity)<Props>`
  ${({ theme, type }) => css`
    width: 300px;
    height: 55px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    ${containerModifier[type](theme)};
  `}
`;

export const LabelButton = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: ${type === "primary" ? theme.colors.white : theme.colors.blueDark};
  `}
`;
