import React from 'react';
import { render } from '@testing-library/react-native';

import { Providers } from '../../utils/teste';

import { ListCard } from '.';
import { useGetListOfCard } from '../../hooks/useGetListOfCard';
import { CreditCardDTO } from '../../dto/creditCardDTO';

const mockedNavigate = jest.fn();
jest.mock('../../hooks/useGetListOfCard');
const mockUseGetListOfCard = useGetListOfCard as jest.MockedFunction<
  typeof useGetListOfCard
>;

global.__reanimatedWorkletInit = () => {};
jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock')
);

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

const listCreditMock = [
  {
    creditType: 'green',
    id: 'some-id',
    name: 'some-name',
    number: '444 4444 4444 4444',
    cvv: '3333',
    expiration_date: '12/34',
  },
  {
    creditType: 'dark',
    id: 'some-id2',
    name: 'some-name2',
    number: '444 4444 4444 4444',
    cvv: '3333',
    expiration_date: '12/34',
  },
] as CreditCardDTO[];

describe('<ListCard />', () => {
  const makeSut = () => {
    return render(<ListCard />, {
      wrapper: Providers,
    });
  };

  it('should render the component', () => {
    mockUseGetListOfCard.mockReturnValue({
      list: [],
      load: false,
    });

    const { getByTestId } = makeSut();

    const listOfCardContainer = getByTestId('list-card');

    expect(listOfCardContainer).toBeTruthy();
  });

  it('should render the quant', async () => {
    mockUseGetListOfCard.mockReturnValue({
      list: listCreditMock,
      load: false,
    });

    const { getAllByTestId } = makeSut();

    const creditCard = await getAllByTestId('credit-card-button');

    expect(creditCard).toHaveLength(2);
  });

  it('should render the empty message', () => {
    mockUseGetListOfCard.mockReturnValue({
      list: [],
      load: false,
    });

    const { getByText } = makeSut();

    const emptyMessage = getByText(/Nenhum cartão cadastrado/);

    expect(emptyMessage).toBeTruthy();
  });
});
