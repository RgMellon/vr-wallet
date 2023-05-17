import * as S from "./styles";

import Animated, {
  Layout,
  SlideInDown,
  SlideInUp,
  runOnJS,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useEffect, useState } from "react";
import { Wallet } from "../../components/Wallet";

export function Load() {
  const animatedBottomSharedValue = useSharedValue(10);
  const animatedBottomAsixY = useSharedValue(450);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    animatedBottomSharedValue.value = withSpring(250, {
      restDisplacementThreshold: 1,
      restSpeedThreshold: 1,
      damping: 6,
      stiffness: 100,
    });

    animatedBottomAsixY.value = withSpring(10, {
      restDisplacementThreshold: 1,
      restSpeedThreshold: 1,
      damping: 6,
      stiffness: 100,
    });
  }, []);

  function handleStart() {
    setStartAnimation(true);
  }

  return (
    <S.Container>
      <S.Detail
        layout={Layout.springify().mass(1).stiffness(100)}
        entering={SlideInUp.springify().mass(1).stiffness(90)}
        style={{
          top: -20,
          transform: [
            {
              rotateZ: "-120deg",
            },
            {
              translateX: 135,
            },
          ],
        }}
      />

      <Wallet startAnimation={startAnimation} />

      <S.Detail
        layout={Layout.springify()}
        entering={SlideInDown.springify()
          .mass(1)
          .stiffness(100)
          .withCallback((finished) => {
            "worklet";
            if (finished) {
              runOnJS(handleStart)();
            }
          })}
        style={[
          {
            bottom: -10,
            transform: [
              {
                rotateZ: "-120deg",
              },
              {
                translateX: -200,
              },
            ],
          },
        ]}
      />
    </S.Container>
  );
}
