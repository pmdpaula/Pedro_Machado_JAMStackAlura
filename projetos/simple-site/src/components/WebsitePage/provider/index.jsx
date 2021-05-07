import { ThemeProvider } from 'styled-components';

import themeDark from '../../../theme/dark';
import GlobalStyle from '../../../theme/GlobalStyle';
import themeLight from '../../../theme/light';

export default function WebsiteGlobalProvider({ children }) {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
