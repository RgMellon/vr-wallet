import { Main } from "../../template/Main";
import { Title } from "../../components/Title";

import { CreditCard } from "../../components/CreditCard";

import * as S from "./style";
import { Button } from "../../components/Button";
import { useCreditCard } from "../../hooks/useCreditCard";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

export function ResumeCard() {
  const { navigate, reset } = useNavigation();
  const { currentCreditCard } = useCreditCard();

  return (
    <Main>
      <Header />
      <S.Container>
        <Title text="Wallet Test" />

        <S.Subtitle>cartão cadastrado com sucesso</S.Subtitle>

        <CreditCard
          cardNumber={currentCreditCard.number}
          creditType={currentCreditCard.creditType}
          expirationDate={currentCreditCard.expiration_date}
          titularName={currentCreditCard.name}
        />

        <S.Wrapper>
          <Button
            typeButton="primary"
            text="avançar"
            onPress={() => {
              navigate("listCard");
            }}
          />
        </S.Wrapper>
      </S.Container>
    </Main>
  );
}
