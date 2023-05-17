export type CreditCardType = 'dark' | 'green';

export type CreditCardProps = {
  creditType: CreditCardType;
  titularName: string;
  cardNumber: string;
  expirationDate: string;
};

import * as S from './style';

export function CreditCard({
  creditType,
  titularName,
  cardNumber,
  expirationDate,
}: CreditCardProps) {
  return (
    <S.Container creditCardType={creditType} testID="credit-card">
      <S.Title creditCardType={creditType}>
        {creditType === 'dark' ? 'Black' : 'Green'} Card
      </S.Title>

      <S.Wrapper>
        <S.Name creditCardType={creditType} testID="credit-titular">
          {titularName}
        </S.Name>

        <S.CardNumber creditCardType={creditType} testID="credit-number">
          **** **** ****
          {cardNumber?.substring(15, cardNumber.length)}
        </S.CardNumber>
        <S.Validation testID="expiration-date" creditCardType={creditType}>
          Validade {expirationDate}
        </S.Validation>
      </S.Wrapper>
    </S.Container>
  );
}
