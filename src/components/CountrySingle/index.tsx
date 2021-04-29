import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import { useEffect, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGetCountry } from '../../hooks/useGetCountry';

const MainContainer: any = styled(Container)`
  margin-top: 80px;
`;

const GridCustom: any = styled(Grid)`
  margin-top: 80px;
`;

const ListInfo: any = styled(List)`
  padding-top: 0;
  padding-bottom: 0;
`;

const ListItemInfo: any = styled(ListItem)`
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
`;

const TextBorderCountries: any = styled(Typography)`
  margin-right: 30px;
`;

const ButtonBorders: any = styled(Button)`
  color: inherit;
  border: 1px solid;
`;

const Img: any = styled.img`
  width: 100%;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      color: 'inherit'
    }
  })
);

const CountrySingle = ({ match }: any) => {
  const classes = useStyles();
  const { id } = match.params;
  const {
    state,
    actions: { setAlpha3 }
  } = useGetCountry();

  useEffect(() => {
    setAlpha3(id);
  }, [id, setAlpha3]);

  console.log('state: ', state);

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
            className={classes.button}
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
        <Grid item xs={5}>
          <Img src="https://restcountries.eu/data/irl.svg" alt="Ireland" />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h4">Ireland</Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={6}>
              <ListInfo>
                <ListItemInfo>
                  <ListItemText>Native Name: Éire</ListItemText>
                </ListItemInfo>
                <ListItemInfo>
                  <ListItemText>Population: 6, 378, 000</ListItemText>
                </ListItemInfo>
                <ListItemInfo>
                  <ListItemText>Region: Europe</ListItemText>
                </ListItemInfo>
                <ListItemInfo>
                  <ListItemText>Subregion: Northern Europe </ListItemText>
                </ListItemInfo>
                <ListItemInfo>
                  <ListItemText>Capital: Dublin</ListItemText>
                </ListItemInfo>
              </ListInfo>
            </Grid>

            <Grid item xs={6}>
              <ListInfo>
                <ListItemInfo>
                  <ListItemText>Top Level Domain: .ie</ListItemText>
                </ListItemInfo>
                <ListItemInfo>
                  <ListItemText>Currencies: Euro</ListItemText>
                </ListItemInfo>
                <ListItemInfo>
                  <ListItemText>Languages: Irish, English</ListItemText>
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
              <ButtonBorders
                variant="outlined"
                // size="medium"
                component={Link}
                to="/"
              >
                Iran
              </ButtonBorders>
              <ButtonBorders
                variant="outlined"
                size="medium"
                component={Link}
                to="/"
              >
                Iran
              </ButtonBorders>
              <ButtonBorders
                variant="outlined"
                size="medium"
                component={Link}
                to="/"
              >
                Iran
              </ButtonBorders>
            </Grid>
          </GridCustom>
        </Grid>
      </GridCustom>
    </MainContainer>
  );
};

export default CountrySingle;
