import { Text } from "react-native";
import { Main } from "../../template/Main";
import * as S from "./styles";
import { Button } from "../../components/Button";

export function Home() {
  return (
    <Main>
      <S.Container>
        <S.WrapperTitle>
          <S.Title> Wallet Test </S.Title>
        </S.WrapperTitle>

        <S.WrapperButton>
          <Button typeButton="primary" text="meus cartões" />
        </S.WrapperButton>
        <Button typeButton="secondary" text="cadastrar cartão" />
      </S.Container>
    </Main>
  );
}
