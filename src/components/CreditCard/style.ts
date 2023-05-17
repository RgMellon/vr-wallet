import styled, { css } from "styled-components/native";

type Props = {
  creditCardType: "green" | "dark";
};

export const Container = styled.View<Props>`
  ${({ creditCardType, theme }) => css`
    width: 300px;
    height: 180px;
    padding: 10px;
    background: ${creditCardType === "dark"
      ? theme.colors.black
      : theme.colors.greenLight};
    margin-top: 30px;
    border-radius: 16px;
    justify-content: center;
    border: 0.3px;
    border-color: ${creditCardType === "dark"
      ? theme.colors.greyDark
      : theme.colors.lightGrey};
    shadow-opacity: 0.2;
    shadow-radius: 1px;
    shadow-offset: 0px 0px;
  `}
`;

export const Title = styled.Text<Props>`
  ${({ theme, creditCardType }) => css`
    color: ${
      creditCardType === "dark" ? theme.colors.white : theme.colors.black
    }
    font-size: ${theme.font.xMedium};
  `}
`;

export const Name = styled.Text<Props>`
  ${({ theme, creditCardType }) => css`
    color: ${creditCardType === "dark"
      ? theme.colors.white
      : theme.colors.black};
    font-size: ${theme.font.xSmall};
  `}
`;

export const CardNumber = styled.Text<Props>`
  ${({ theme, creditCardType }) => css`
    color: ${creditCardType === "dark"
      ? theme.colors.white
      : theme.colors.black};

    font-size: ${theme.font.small};
  `}
`;

export const Validation = styled.Text<Props>`
  ${({ theme, creditCardType }) => css`
    color: ${creditCardType === "dark"
      ? theme.colors.white
      : theme.colors.black};
    font-size: ${theme.font.small};
  `}
`;

export const Wrapper = styled.View`
  margin-top: 30px;
`;
