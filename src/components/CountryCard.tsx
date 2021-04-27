import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardStyle: {
      maxWidth: 268
    },
    media: {
      height: 140
    }
  })
);

export default function CardCountry() {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Card className={classes.cardStyle}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://restcountries.eu/data/irl.svg"
            title="Ireland"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Ireland
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Population:</b> 6,378,000
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Region:</b> Europe
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Capital:</b> Dublin
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
