import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useState } from 'react';
import Header from '../Header';
import Home from '../Home';

export default function App() {
  const [themeState, setThemeState] = useState(false);
  const palletType = themeState ? 'dark' : 'light';
  const theme = createMuiTheme({
    palette: {
      type: palletType
    }
  });

  const handleThemeChange = () => {
    setThemeState(!themeState);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header handleThemeChange={handleThemeChange} />

      <Home />
    </ThemeProvider>
  );
}
