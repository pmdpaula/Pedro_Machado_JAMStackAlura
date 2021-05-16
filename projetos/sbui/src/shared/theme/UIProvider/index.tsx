import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../index';

interface UIProviderProps {
  children: ReactNode;
}

export const UIProvider = ({ children }: UIProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
