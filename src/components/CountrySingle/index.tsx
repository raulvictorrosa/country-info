/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as CountryApi from '../../api/country';
import { addCommas } from '../../utils';
import {
  ButtonBorders,
  GridCustom,
  Img,
  ListInfo,
  ListItemInfo,
  MainContainer,
  TextBorderCountries,
} from '../CountrySingle/styled';

const initialState = {
  borders: [],
  capital: '',
  currencies: [],
  flag: '',
  languages: [],
  name: '',
  nativeName: '',
  population: 0,
  region: '',
  subregion: '',
  topLevelDomain: [],
};

type CountrySingleType = {
  match: any;
};

const CountrySingle = ({ match }: CountrySingleType) => {
  const [country, setCountry] = useState(initialState);
  const { borders } = country;
  const { id } = match.params;

  useEffect(() => {
    const fetchCountry = async () => {
      const { data: country }: any = await CountryApi.getByAlpha(id);
      setCountry(country);
    };

    fetchCountry();
  }, [id, country]);

  const arrayNameByComma = (teste: any) =>
    teste.map((item: any) => item.name).join(', ');

  return (
    <MainContainer maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <Button
            variant="outlined"
            size="medium"
            component={Link}
            to="/"
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </Grid>
      </Grid>

      <GridCustom
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={5}>
          <Img src={country.flag} alt={country.name} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="h4">{country.name}</Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={6}>
              <ListInfo>
                <ListItemInfo>
                  <ListItemText>Native Name: {country.nativeName}</ListItemText>
                </ListItemInfo>
                <ListItemInfo>
                  <ListItemText>
                    Population: {addCommas(country.population)}
                  </ListItemText>
                </ListItemInfo>
                <ListItemInfo>
                  <ListItemText>Region: {country.region}</ListItemText>
                </ListItemInfo>
                <ListItemInfo>
                  <ListItemText>Subregion: {country.subregion}</ListItemText>
                </ListItemInfo>
                <ListItemInfo>
                  <ListItemText>Capital: {country.capital}</ListItemText>
                </ListItemInfo>
              </ListInfo>
            </Grid>

            <Grid item xs={12} md={6}>
              <ListInfo>
                <ListItemInfo>
                  <ListItemText>
                    Top Level Domain: {country.topLevelDomain.join(', ')}
                  </ListItemText>
                </ListItemInfo>
                <ListItemInfo>
                  <ListItemText>
                    Currencies: {arrayNameByComma(country.currencies)}
                  </ListItemText>
                </ListItemInfo>
                <ListItemInfo>
                  <ListItemText>
                    Languages: {arrayNameByComma(country.languages)}
                  </ListItemText>
                </ListItemInfo>
              </ListInfo>
            </Grid>
          </Grid>

          <GridCustom
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={12}>
              <TextBorderCountries variant="body1" component="span">
                Border Countries:
              </TextBorderCountries>
              {borders && borders.length > 0 ? (
                borders.map((border: any) => (
                  <ButtonBorders
                    key={border}
                    variant="outlined"
                    component={Link}
                    to={`/country/${border.toLowerCase()}`}
                  >
                    {border}
                  </ButtonBorders>
                ))
              ) : (
                <ButtonBorders variant="outlined" disabled>
                  No Border Country
                </ButtonBorders>
              )}
            </Grid>
          </GridCustom>
        </Grid>
      </GridCustom>
    </MainContainer>
  );
};

export default CountrySingle;
