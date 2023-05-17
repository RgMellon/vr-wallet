import * as S from "./styles";

import upDetailBackground from "../../assets/img/background/up.png";
import downDetailBackground from "../../assets/img/background/down.png";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";

type Props = {
  children: React.ReactNode;
};

export function Main({ children }: Props) {
  return (
    <S.Container>
      <StatusBar translucent backgroundColor="transparent" style="light" />

      <Image
        source={upDetailBackground}
        resizeMode="contain"
        style={{
          position: "absolute",
          top: 0,
          left: -30,
          right: 0,
          width: 350,
          height: 236,
        }}
      />
      {children}
      <Image
        source={downDetailBackground}
        resizeMode="contain"
        style={{
          position: "absolute",
          bottom: 0,
          width: 350,
          height: 236,
          left: 100,
          right: 0,
        }}
      />
    </S.Container>
  );
}
