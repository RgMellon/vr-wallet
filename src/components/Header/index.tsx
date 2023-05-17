import { NativeModules, Platform, Text, View } from "react-native";

import BackSVG from "../../assets/svg/bx_arrow-back.svg";

import * as S from "./style";
import { useNavigation } from "@react-navigation/native";

export function Header() {
  const { goBack } = useNavigation();
  return (
    <S.Container>
      <S.BackButton
        onPress={() => {
          goBack();
        }}
      >
        <BackSVG />
      </S.BackButton>
      <S.Title> cadastro </S.Title>
    </S.Container>
  );
}
