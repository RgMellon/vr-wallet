import { Main } from '../../template/Main';
import * as S from './styles';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();

  function handleNavigateToRegisterCard() {
    navigation.navigate('registerCard');
  }

  function handleNavigateToListCard() {
    navigation.navigate('listCard');
  }

  return (
    <Main>
      <S.Container testID="home-container">
        <S.WrapperTitle>
          <S.Title> Wallet Test </S.Title>
        </S.WrapperTitle>

        <S.WrapperButton>
          <Button
            testID="list-button"
            typeButton="primary"
            text="meus cartões"
            onPress={handleNavigateToListCard}
          />
        </S.WrapperButton>

        <Button
          testID="register-button"
          typeButton="secondary"
          text="cadastrar cartão"
          onPress={handleNavigateToRegisterCard}
        />
      </S.Container>
    </Main>
  );
}
