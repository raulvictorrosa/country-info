import Grid from '@material-ui/core/Grid';
import React from 'react';
import { useGetCountries } from '../../hooks/useGetCountries';
import CountryCards from '../CountryCards';
import { Container } from '../CountryContainer/styled';
import RegionFilter from '../RegionFilter';
import SearchField from '../SearchField';

type ErrorType = {
  status: number;
  message: string;
};

export default function CountryContainer() {
  const { state, actions } = useGetCountries();

  const renderMessage = (msg: string) => {
    return (
      <Grid
        style={{ fontSize: '20px', marginTop: '70px', textAlign: 'center' }}
      >
        {msg}
      </Grid>
    );
  };

  const renderCountryCards = () => {
    const { message } = state.countries as unknown as ErrorType;

    if (state.isLoading) {
      return renderMessage('Is Loading');
    }
    if (!state.isLoading && message) {
      return renderMessage(message);
    }
    if (!state.isLoading && !state.error && state.countries.length > 0) {
      return <CountryCards countries={state.countries} />;
    }
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
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

      {renderCountryCards()}
    </>
  );
}
