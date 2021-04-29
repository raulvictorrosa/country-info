import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { addCommas } from '../utils';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardStyle: {
      maxWidth: 268
    },
    media: {
      height: 140
    },
    cardLink: {
      color: 'inherit',
      textDecoration: 'none'
    }
  })
);

export default function CardCountry({ country, to }: any = {}) {
  const classes = useStyles();
  const { name, population, region, capital, flag, alpha3Code } = country;

  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card className={classes.cardStyle} elevation={3}>
        <CardActionArea>
          <Link
            className={classes.cardLink}
            to={`/country/${alpha3Code.toLowerCase()}`}
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
}
