import * as S from "./style";

type Props = {
  children: React.ReactNode;
};

export function Detail({ children }: Props) {
  return (
    <S.Container>
      <S.HeaderDetail>
        <S.Title>Meus cartões</S.Title>
      </S.HeaderDetail>

      {children}
    </S.Container>
  );
}
