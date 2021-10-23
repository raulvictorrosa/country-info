/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { addCommas } from '../../utils';
import { Card, Grid } from '../CountryCard/styled';
import { Country } from '../../hooks/country';

const useStyles = makeStyles(() =>
  createStyles({
    media: {
      height: 140,
    },
    cardLink: {
      color: 'inherit',
      textDecoration: 'none',
    },
  })
);

type CountryCardProps = {
  country: Country;
};

const CountryCard = ({ country }: CountryCardProps) => {
  const classes = useStyles();
  const { name, population, region, capital, flag, alpha2Code } = country;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card elevation={3}>
        <CardActionArea>
          <Link
            className={classes.cardLink}
            to={`/country/${alpha2Code.toLowerCase()}`}
          >
            <CardMedia className={classes.media} image={flag} title={name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Population:</b> {addCommas(population)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Region:</b> {region}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Capital:</b> {capital}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CountryCard;
