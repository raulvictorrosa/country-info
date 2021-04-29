import React from 'react';
import { Theme } from '@material-ui/core/styles';

import DarkLightThemeProvider from './darkLightTheme';
import MaterialUIProvider from './materialUIProvider';

type ProvidersProps = {
  theme: Theme;
}

const Providers: React.FC<ProvidersProps> = ({ children, theme }) => (
  <DarkLightThemeProvider>
    <MaterialUIProvider theme={theme}>
      {children}
    </MaterialUIProvider>
  </DarkLightThemeProvider>
);

export default Providers;
