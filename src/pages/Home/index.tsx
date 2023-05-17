import { Main } from "../../template/Main";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const { navigate } = useNavigation();

  function handleNavigateToRegisterCard() {
    navigate("registerCard");
  }

  function handleNavigateToListCard() {
    navigate("listCard");
  }

  return (
    <Main>
      <S.Container>
        <S.WrapperTitle>
          <S.Title> Wallet Test </S.Title>
        </S.WrapperTitle>

        <S.WrapperButton>
          <Button
            typeButton="primary"
            text="meus cartões"
            onPress={handleNavigateToListCard}
          />
        </S.WrapperButton>

        <Button
          typeButton="secondary"
          text="cadastrar cartão"
          onPress={handleNavigateToRegisterCard}
        />
      </S.Container>
    </Main>
  );
}
