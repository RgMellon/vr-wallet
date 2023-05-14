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
      {/* TODO refactor this component */}
      <Animated.View
        layout={Layout.springify().mass(1).stiffness(100)}
        entering={SlideInUp.springify().mass(1).stiffness(90)}
        style={{
          width: 360,
          height: 366,
          backgroundColor: "#eeeeee",
          opacity: 0.1,
          position: "absolute",
          borderRadius: 50,
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

      <Animated.View
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
            backgroundColor: "#eeeeee",
            opacity: 0.1,
            width: 360,
            height: 366,
            position: "absolute",
            borderRadius: 50,
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
