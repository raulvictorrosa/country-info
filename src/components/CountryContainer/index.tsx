import Grid from '@material-ui/core/Grid';
import { useGetCountries } from '../../hooks/useGetCountries';
import CountryCards from '../CountryCards';
import { Container } from '../CountryContainer/styled';
import RegionFilter from '../RegionFilter';
import SearchField from '../SearchField';

export default function CountryContainer() {
  const { state, actions } = useGetCountries();

  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={6} md={3}>
            <SearchField onSearch={actions.setSearchText} />
          </Grid>

          <Grid item xs={12} sm={5} md={3} lg={2}>
            <RegionFilter onFilter={actions.setFilterText} />
          </Grid>
        </Grid>
      </Container>

      {!state.error && !state.isLoading && (
        <CountryCards countries={state.countries} />
      )}
    </>
  );
}
