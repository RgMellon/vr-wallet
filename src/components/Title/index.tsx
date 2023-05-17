import { SafeAreaView } from "react-native";

import * as S from "./style";
import Animated, { Layout, SlideInUp } from "react-native-reanimated";

type Props = {
  text: string;
};

export function Title({ text }: Props) {
  return (
    <Animated.View
      layout={Layout.springify()}
      entering={SlideInUp.springify().mass(1).stiffness(50)}
    >
      <S.Title>{text}</S.Title>
    </Animated.View>
  );
}
