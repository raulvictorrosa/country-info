/* eslint-disable @typescript-eslint/no-explicit-any */
import Grid from '@material-ui/core/Grid';
import CountryCard from '../CountryCard';
import { Container } from '../CountryCards/styled';

export default function CountryCards({ countries }: any) {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={7} direction="row" alignItems="flex-start">
        {countries &&
          countries.map((country: any) => (
            <CountryCard
              key={country.alpha3Code.toLowerCase()}
              country={country}
            />
          ))}
      </Grid>
    </Container>
  );
}
