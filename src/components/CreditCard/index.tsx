export type CreditCardProps = {
  creditType: "dark" | "green";
  titularName: string;
  cardNumber: string;
  expirationDate: string;
};

import * as S from "./style";

export function CreditCard({
  creditType,
  titularName,
  cardNumber,
  expirationDate,
}: CreditCardProps) {
  return (
    <S.Container creditCardType={creditType}>
      <S.Title creditCardType={creditType}>
        {creditType === "dark" ? "Black" : "Green"} Card
      </S.Title>

      <S.Wrapper>
        <S.Name creditCardType={creditType}>{titularName}</S.Name>

        <S.CardNumber creditCardType={creditType}>
          **** **** ****
          {cardNumber?.substring(15, cardNumber.length)}
        </S.CardNumber>
        <S.Validation creditCardType={creditType}>
          Validade {expirationDate}
        </S.Validation>
      </S.Wrapper>
    </S.Container>
  );
}
