import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, Theme, ThemeProvider, } from '@material-ui/core/styles';
import { useDarkLightTheme } from './darkLightTheme';

interface ThemeProviderProps {
  theme: Theme;
}

const MaterialUIProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const { state } = useDarkLightTheme();

  const memoizedTheme = React.useMemo(
    () => createMuiTheme({ ...theme, palette: { type: state.themeMode } }),
    [state.themeMode, theme],
  );

  return (
    <ThemeProvider theme={memoizedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MaterialUIProvider;
