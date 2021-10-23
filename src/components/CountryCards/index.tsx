/* eslint-disable @typescript-eslint/no-explicit-any */
import Grid from '@material-ui/core/Grid';
import CountryCard from '../CountryCard';
import { Container } from '../CountryCards/styled';
import { Country } from '../../hooks/country';

type CountryCardsProps = {
  countries: Country[];
};

export default function CountryCards({ countries }: CountryCardsProps) {
  const renderCard = () => {
    if (countries && countries.length > 0) {
      return (
        <>
          {countries.map((country: Country) => (
            <CountryCard
              key={country.alpha2Code.toLowerCase()}
              country={country}
            />
          ))}
        </>
      );
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={7} direction="row" alignItems="flex-start">
        {renderCard()}
      </Grid>
    </Container>
  );
}
