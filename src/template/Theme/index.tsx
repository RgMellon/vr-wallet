import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

type Props = {
  children: React.ReactNode;
};

export function Theme({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
