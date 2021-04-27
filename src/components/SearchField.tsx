import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      width: '100%'
    },
    searchForm: {
      paddingTop: '5px',
      paddingBottom: '5px',
      display: 'flex'
    },
    searchIcon: {
      padding: 10
    }
  })
);

export default function SearchField() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.searchForm} elevation={3}>
      <IconButton
        type="submit"
        className={classes.searchIcon}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        id="search-field"
        classes={{
          root: classes.inputRoot
        }}
        placeholder="Search for a country..."
        inputProps={{ 'aria-label': 'Search for a country...' }}
      />
    </Paper>
  );
}
