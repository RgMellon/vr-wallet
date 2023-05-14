import { View } from "react-native";
import Animated from "react-native-reanimated";
import styled, { css } from "styled-components/native";

const AnimatedView = Animated.createAnimatedComponent(View);

export const Container = styled(AnimatedView)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.blueDark};
    position: relative;
    padding: 20px;

    justify-content: center;
    align-items: center;
  `}
`;
