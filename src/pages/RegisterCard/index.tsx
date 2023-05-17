import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { ControlledInput } from '../../components/ControlledInput';
import { Main } from '../../template/Main';

import {
  ActivityIndicator,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { Keyboard } from 'react-native';
import { formatCreditCardNumber } from '../../aux/formatCreditCardNumber';
import { formatDate } from '../../aux/formatDate';
import { schema } from '../../aux/schema';
import theme from '../../styles/theme';

import { Title } from '../../components/Title';

import * as S from './styles';

import { useNavigation } from '@react-navigation/native';
import { useCreditCard } from '../../hooks/useCreditCard';
import { Header } from '../../components/Header';
import { useState } from 'react';

export type FormData = {
  card_number: string;
  expiration_date: string;
  security_code: string;
  titular_name: string;
};

export function RegisterCard() {
  const { handleAddCreditCard } = useCreditCard();
  const { navigate } = useNavigation();

  const [load, setLoad] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleRegister(form: FormData) {
    try {
      setLoad(true);
      await handleAddCreditCard(form);
      reset();
      navigate('resumeCard');
    } catch (err) {
      alert('Ops, algo deu errado');
    } finally {
      setLoad(false);
    }
  }

  return (
    <Main>
      <Header />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <S.WrapperTitle>
            <Title text="Wallet Test" />
          </S.WrapperTitle>

          <S.WrapperInput>
            <ControlledInput
              maxLength={19}
              label="número do cartão"
              name="card_number"
              control={control}
              keyboardType="number-pad"
              format={formatCreditCardNumber}
              error={
                errors.card_number && errors.card_number.message.toString()
              }
            />
          </S.WrapperInput>

          <S.WrapperInput>
            <ControlledInput
              label="nome do titular do cartão"
              name="titular_name"
              control={control}
              error={
                errors.titular_name && errors.titular_name.message.toString()
              }
            />
          </S.WrapperInput>

          <S.Grid>
            <S.Column>
              <ControlledInput
                label="vencimento"
                name="expiration_date"
                format={formatDate}
                control={control}
                keyboardType="number-pad"
                maxLength={5}
                placeholder="00/00"
                placeholderTextColor={theme.colors.blueDark}
                error={
                  errors.expiration_date &&
                  errors.expiration_date.message.toString()
                }
              />
            </S.Column>
            <S.Column>
              <ControlledInput
                placeholder="***"
                placeholderTextColor={theme.colors.blueDark}
                maxLength={4}
                label="código de segurança"
                name="security_code"
                keyboardType="number-pad"
                control={control}
                secureTextEntry
                error={
                  errors.security_code &&
                  errors.security_code.message.toString()
                }
              />
            </S.Column>
          </S.Grid>

          <S.WrapperButton>
            {load ? (
              <ActivityIndicator size={'small'} />
            ) : (
              <Button
                full
                text="avançar"
                typeButton={
                  Object.keys(errors).length > 0 ? 'disabled' : 'primary'
                }
                onPress={handleSubmit(handleRegister)}
              />
            )}
          </S.WrapperButton>
        </S.Container>
      </TouchableWithoutFeedback>
    </Main>
  );
}
