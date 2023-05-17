import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components/native';

type Props = {
  children: React.ReactNode;
};

export const Providers: React.FC = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
