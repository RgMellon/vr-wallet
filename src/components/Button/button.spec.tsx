import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { BEHAVIOR, Button } from '.';
import { Providers } from '../../utils/teste';
import theme from '../../styles/theme';

describe('<Button />', () => {
  const handlePress = jest.fn();

  const makeSut = (type?: BEHAVIOR) => {
    return render(
      <Button text="some text" typeButton={type} onPress={handlePress} />,
      {
        wrapper: Providers,
      }
    );
  };

  it('should render the component button', () => {
    const { getByTestId } = makeSut();

    const button = getByTestId('button');

    expect(button).toBeTruthy();
  });

  it('should render button with type primary when none type is passed by params', () => {
    const { getByTestId } = makeSut();

    const button = getByTestId('button');

    expect(button.props.style.backgroundColor).toEqual(theme.colors.blueLight);
  });

  it('should render button with secondary type', () => {
    const { getByTestId } = makeSut('secondary');

    const button = getByTestId('button');

    expect(button.props.style.backgroundColor).toEqual(theme.colors.greenLight);
  });

  it('should render button with disable type', () => {
    const { getByTestId } = makeSut('disabled');

    const button = getByTestId('button');

    expect(button.props.style.backgroundColor).toEqual(theme.colors.lightGrey);
  });

  it('should be able to click on button', () => {
    const { getByTestId } = makeSut();
    const button = getByTestId('button');

    fireEvent(button, 'press');
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
