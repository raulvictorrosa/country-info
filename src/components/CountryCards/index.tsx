import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import CountryCard from '../CountryCard';

const MainContainer: any = styled(Container)`
  margin-top: 40px;
`;

export default function CountryCards({ countries }: any) {
  return (
    <MainContainer maxWidth="lg">
      <Grid
        container
        spacing={7}
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        {countries &&
          countries.map((country: any) => (
            <CountryCard
              key={country.alpha3Code.toLowerCase()}
              country={country}
            />
          ))}
      </Grid>
    </MainContainer>
  );
}
