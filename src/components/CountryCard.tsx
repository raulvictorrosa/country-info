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
      textDecoration: 'none'
    }
  })
);

export default function CardCountry({ country, to }: any = {}) {
  const classes = useStyles();
  const { name, population, region, capital, flag, alpha3Code } = country;

  const CardLink = (props: any) => <Link to={to} {...props} />;

  return (
    <Grid item xs={3}>
      <Card className={classes.cardStyle}>
        <CardActionArea
          className={classes.cardLink}
          component={CardLink}
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
        </CardActionArea>
      </Card>
    </Grid>
  );
}
