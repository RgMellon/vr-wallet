import { TouchableOpacityProps } from 'react-native';

import * as S from './style';

export type BEHAVIOR = 'primary' | 'secondary' | 'disabled';

type Props = {
  typeButton?: BEHAVIOR;
  text: string;
  full?: boolean;
} & TouchableOpacityProps;

export function Button({
  typeButton = 'primary',
  full = false,
  text,
  ...rest
}: Props) {
  return (
    <S.Container type={typeButton} full={full} {...rest} testID="button">
      <S.LabelButton type={typeButton} full={full}>
        {text}
      </S.LabelButton>
    </S.Container>
  );
}
