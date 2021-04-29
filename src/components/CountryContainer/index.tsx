import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { useGetCountries } from '../hooks/useGetCountries';
import CountryCards from './CountryCards';
import RegionFilter from './RegionFilter';
import SearchField from './SearchField';

const MainContainer: any = styled(Container)`
  margin-top: 40px;
`;

export default function CountryContainer() {
  const { state, actions } = useGetCountries();

  return (
    <>
      <MainContainer maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={6} sm={6} md={3}>
            <SearchField onSearch={actions.setSearchText} />
          </Grid>

          <Grid item xs={5} sm={5} md={3} lg={2}>
            <RegionFilter onFilter={actions.setFilterText} />
          </Grid>
        </Grid>
      </MainContainer>

      {!state.error && !state.isLoading && (
        <CountryCards countries={state.countries} />
      )}
    </>
  );
}
