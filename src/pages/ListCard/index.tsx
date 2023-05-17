import { useState } from "react";
import { ScrollView, useWindowDimensions, Pressable, View } from "react-native";

import { useGetListOfCard } from "../../hooks/useGetListOfCard";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { Load } from "../Load";
import { CreditCard } from "../../components/CreditCard";

import * as S from "./style";
import { CreditCardDTO } from "../../dto/creditCardDTO";
import { Detail } from "../../template/Detail";

const animationConfig = {
  damping: 4,
  stiffness: 300,
  mass: 0.3,
  restDisplacementThreshold: 0.1,
  velocity: 1,
};

export function ListCard() {
  const [currentCard, setCurrentCard] = useState<CreditCardDTO | null>(
    {} as CreditCardDTO
  );
  const [showDetail, setShowDetail] = useState(false);

  const { height } = useWindowDimensions();
  const { list, load } = useGetListOfCard();

  const selectedCarAxis = useSharedValue(0);
  const scrollViewAxis = useSharedValue(0);
  const opacity = useSharedValue(1);

  const PressableAnimated = Animated.createAnimatedComponent(Pressable);
  const ScrollViewAnimated = Animated.createAnimatedComponent(ScrollView);

  const scrollViewAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {
          translateY: withSpring(scrollViewAxis.value, animationConfig),
        },
      ],
    };
  });

  const animatedSelectedCar = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(selectedCarAxis.value, animationConfig),
        },
      ],
    };
  });

  function handlePressCard(creditCard: CreditCardDTO) {
    setCurrentCard(creditCard);
    if (!showDetail) {
      opacity.value = withTiming(0.5);
      selectedCarAxis.value = withTiming(-100);
      scrollViewAxis.value = withTiming(height / 2 + 100);
      setShowDetail(true);
    } else {
      handleHidde();
    }
  }

  function handleHidde() {
    opacity.value = withTiming(1);
    selectedCarAxis.value = withTiming(0);
    scrollViewAxis.value = withTiming(0);
    setShowDetail(false);
  }

  return (
    <View style={{ flex: 1 }}>
      {load && <Load />}

      {!load && (
        <Detail>
          <S.Container>
            <S.Content>
              <PressableAnimated
                style={[
                  {
                    width: 300,
                    height: 180,
                    borderRadius: 16,
                    position: "absolute",
                  },
                  animatedSelectedCar,
                ]}
                onPress={handleHidde}
              >
                <CreditCard
                  cardNumber={currentCard?.number}
                  creditType={currentCard?.creditType}
                  expirationDate={currentCard?.expiration_date || "00/00"}
                  titularName={currentCard?.name}
                />
              </PressableAnimated>

              <ScrollViewAnimated
                showsVerticalScrollIndicator={false}
                style={[
                  {
                    maxHeight: 400,
                  },
                  scrollViewAnimatedStyle,
                ]}
                contentContainerStyle={{
                  paddingTop: 90,
                }}
              >
                {list.length > 0 &&
                  list.map((item, index) => (
                    <PressableAnimated
                      key={index}
                      style={[
                        {
                          marginTop: -90,
                          height: 180,
                        },
                      ]}
                      onPress={() => {
                        handlePressCard(item);
                      }}
                    >
                      <CreditCard
                        cardNumber={item?.number}
                        creditType={item?.creditType}
                        expirationDate={item?.expiration_date || "00/00"}
                        titularName={item?.name}
                      />
                    </PressableAnimated>
                  ))}
              </ScrollViewAnimated>
            </S.Content>
          </S.Container>
        </Detail>
      )}
    </View>
  );
}
