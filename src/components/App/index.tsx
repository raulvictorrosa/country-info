import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import ThemeProvider from '../../providers/ThemeProvider';
import CountryContainer from '../CountryContainer';
import Header from '../Header';

export default function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <Switch>
        <Route path="/" exact component={CountryContainer} />
      </Switch>
    </ThemeProvider>
  );
}
