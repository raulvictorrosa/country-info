import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

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

export default function RegionFilter() {
  const classes = useStyles();

  const [region, setRegion] = useState('');

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegion(event.target.value);
  };

  return (
    <Paper component="form" elevation={3}>
      <form noValidate autoComplete="off">
        <div>
          <TextField
            id="filter-by-region"
            select
            label="Filter by Region"
            value={region}
            onChange={handleFilter}
            classes={{
              root: classes.inputRoot
            }}
            SelectProps={{
              native: true
            }}
            variant="outlined"
          >
            <option aria-label="None" value="" />
            {regions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        </div>
      </form>
    </Paper>
  );
}
