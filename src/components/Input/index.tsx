import { TextInput, TextInputProps } from "react-native";
import * as S from "./style";

type Props = {
  label: string;
} & TextInputProps;

export function Input({ label, ...rest }: Props) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input {...rest} />
    </S.Container>
  );
}
