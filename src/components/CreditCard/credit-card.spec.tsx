import React from 'react';
import { render } from '@testing-library/react-native';

import { Providers } from '../../utils/teste';
import theme from '../../styles/theme';
import { CreditCard, CreditCardProps, CreditCardType } from '.';

export const mockCreditCard = {
  titularName: 'some-test-name',
  cardNumber: '9999 9999 9999 9999',
  expirationDate: '11/30',
} as CreditCardProps;
describe('<CreditCard />', () => {
  const makeSut = (type: CreditCardType) => {
    return render(<CreditCard {...mockCreditCard} creditType={type} />, {
      wrapper: Providers,
    });
  };

  it('should render the component', () => {
    const { getByTestId } = makeSut('green');

    const creditCcard = getByTestId('credit-card');

    expect(creditCcard).toBeTruthy();
  });

  it('should render the green credit card when type is green', () => {
    const { getByTestId, getByText } = makeSut('green');

    const creditCcard = getByTestId('credit-card');
    const creditCardTitle = getByText(/Green Card/);

    expect(creditCcard.props.style[0].backgroundColor).toEqual(
      theme.colors.greenLight
    );
    expect(creditCardTitle).toBeTruthy();
  });

  it('should render the dark credit card when type is dark', () => {
    const { getByTestId, getByText } = makeSut('dark');

    const creditCcard = getByTestId('credit-card');
    const creditCardTitle = getByText(/Black Card/);

    expect(creditCcard.props.style[0].backgroundColor).toEqual(
      theme.colors.black
    );
    expect(creditCardTitle).toBeTruthy();
  });

  it('should render the expiration date', () => {
    const { getByTestId } = makeSut('dark');

    const expirationDate = getByTestId('expiration-date');

    expect(expirationDate).toBeTruthy();
  });

  it('should render the credit number', () => {
    const { getByTestId } = makeSut('dark');

    const creditNumber = getByTestId('credit-number');

    expect(creditNumber).toBeTruthy();
  });

  it('should render the titular name', () => {
    const { getByTestId } = makeSut('dark');

    const creditTitular = getByTestId('credit-titular');

    expect(creditTitular).toBeTruthy();
  });
});
