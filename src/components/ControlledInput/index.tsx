import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Input } from "../Input";

import * as S from "./style";

type Props = {
  control: Control;
  name: string;
  label: string;
  error: string;
  format?: (text: string) => void;
} & TextInputProps;

export function ControlledInput({
  control,
  name,
  error,
  format,
  ...rest
}: Props) {
  function handleChange(text, onChange) {
    if (format) {
      onChange(format(text));
      return;
    }
    onChange(text);
  }

  return (
    <S.Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={(text) => {
              handleChange(text, onChange);
            }}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      {!!error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
}
