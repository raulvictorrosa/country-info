import { createMuiTheme } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import Providers from '../../providers';
import CountryContainer from '../CountryContainer';
import CountrySingle from '../CountrySingle';
import Header from '../Header';

const App: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark'
    }
  });

  return (
    <Providers theme={theme}>
      <Header />
      <Switch>
        <Route path="/" exact component={CountryContainer} />
        <Route path="/country/:id" component={CountrySingle} />
      </Switch>
    </Providers>
  );
};

export default App;
