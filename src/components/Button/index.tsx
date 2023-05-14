import {
  Text,
  Touchable,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import * as S from "./style";
import theme from "../../styles/theme";

export type COLOR = "primary" | "secondary";

type Props = {
  typeButton: COLOR;
  text: string;
} & TouchableOpacityProps;

export function Button({ typeButton = "primary", text, ...rest }: Props) {
  return (
    <S.Container type={typeButton} {...rest}>
      <S.LabelButton type={typeButton}>{text}</S.LabelButton>
    </S.Container>
  );
}
