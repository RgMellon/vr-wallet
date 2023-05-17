import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.blueDark};
  `}
`;

export const HeaderDetail = styled.View`
  ${({ theme }) => css`
    position: absolute;
    background-color: ${theme.colors.white};
    width: 100%;
    z-index: 1;
    height: 76px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.blueLight};
    font-size: ${theme.font.medium};
  `}
`;
