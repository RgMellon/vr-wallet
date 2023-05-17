import { TouchableOpacityProps } from 'react-native';

import * as S from './style';

export type BEHAVIOR = 'primary' | 'secondary' | 'disabled';

type Props = {
  typeButton?: BEHAVIOR;
  text: string;
  full?: boolean;
  testID?: string;
} & TouchableOpacityProps;

export function Button({
  typeButton = 'primary',
  full = false,
  text,
  testID = 'button',
  ...rest
}: Props) {
  return (
    <S.Container type={typeButton} full={full} {...rest} testID={testID}>
      <S.LabelButton type={typeButton} full={full}>
        {text}
      </S.LabelButton>
    </S.Container>
  );
}
