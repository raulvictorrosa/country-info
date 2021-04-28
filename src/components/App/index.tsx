import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CountriesProvider } from '../../providers/countriesProvider';
import ThemeProvider from '../../providers/ThemeProvider';
import { countriesReducer } from '../../reducers/countriesReducer';
import CountryContainer from '../CountryContainer';
import Header from '../Header';

const initialState = {
  countries: []
};

export default function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark'
    }
  });

  const state = useReducer(countriesReducer, initialState);

  return (
    <ThemeProvider theme={theme}>
      <CountriesProvider value={state}>
        <CssBaseline />
        <Header />

        <Switch>
          <Route path="/" exact component={CountryContainer} />
        </Switch>
      </CountriesProvider>
    </ThemeProvider>
  );
}
