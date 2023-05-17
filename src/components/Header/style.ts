import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 50px;
  align-items: center;
  flex-direction: row;

  top: 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.blueLight};
    text-align: center;
    font-size: ${theme.font.medium};
  `}
`;

export const BackButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-right: 60px;
`;
