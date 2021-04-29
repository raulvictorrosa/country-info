import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const useStyles = makeStyles(() =>
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

type FilterFieldProps = {
  onFilter: (text: string) => void;
};

const RegionFilter: React.FC<FilterFieldProps> = ({ onFilter }) => {
  const classes = useStyles();
  const [filter, setFilter] = useState('');

  useEffect(() => onFilter(filter), [onFilter, filter]);

  return (
    <Paper elevation={3}>
      <form noValidate autoComplete="off">
        <div>
          <TextField
            id="filter-by-region"
            select
            label="Filter by Region"
            classes={{ root: classes.inputRoot }}
            SelectProps={{ native: true }}
            variant="outlined"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option aria-label="None" value="" />
            {regions.map((option) => (
              <option key={option.toLowerCase()} value={option.toLowerCase()}>
                {option}
              </option>
            ))}
          </TextField>
        </div>
      </form>
    </Paper>
  );
};

export default RegionFilter;
