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
  const countries = useGetCountries();

  console.log(countries);

  return (
    <>
      <MainContainer maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={3}>
            <SearchField />
          </Grid>

          <Grid item xs={2}>
            <RegionFilter />
          </Grid>
        </Grid>
      </MainContainer>

      <CountryCards countries={countries} />
    </>
  );
}
