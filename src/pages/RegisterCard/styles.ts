import { KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(KeyboardAvoidingView)`
  justify-content: center;
  flex: 1;
  z-index: 1;
`;

export const WrapperInput = styled.View`
  margin-bottom: 30px;
`;

export const Grid = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Column = styled.View`
  width: 45%;
`;

export const WrapperButton = styled.View`
  margin-top: 15px;
`;

export const WrapperTitle = styled.View`
  width: 100%;
  margin-bottom: 25px;
  align-items: center;
`;
