import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { Providers } from '../../utils/teste';

import { Home } from '.';

const handleRedirectToList = jest.fn();

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

describe('<Home />', () => {
  const makeSut = () => {
    return render(<Home />, {
      wrapper: Providers,
    });
  };

  it('should render the component', () => {
    const { getByTestId } = makeSut();

    const home = getByTestId('home-container');

    expect(home).toBeTruthy();
  });

  it('should render the title', () => {
    const { getByText } = makeSut();

    const title = getByText(/Wallet Test/i);

    expect(title).toBeTruthy();
  });

  it('should render the register new cardButton', () => {
    const { getByTestId } = makeSut();

    const registerNewCardButton = getByTestId('register-button');
    fireEvent(registerNewCardButton, 'press');

    expect(mockedNavigate).toHaveBeenCalled();

    expect(registerNewCardButton).toBeTruthy();
  });

  it('should render the list of cards cardButton', () => {
    const { getByTestId } = makeSut();

    const listOfCardButton = getByTestId('list-button');
    fireEvent(listOfCardButton, 'press');

    expect(mockedNavigate).toHaveBeenCalled();
    expect(listOfCardButton).toBeTruthy();
  });
});
