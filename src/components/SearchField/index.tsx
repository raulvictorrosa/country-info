import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { Paper } from '../SearchField/styled';

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

type SearchFieldProps = {
  onSearch: (text: string) => void;
};

const SearchField: React.FC<SearchFieldProps> = ({ onSearch }) => {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [textToSearch] = useDebounce(search, 1000);

  useEffect(() => {
    onSearch(textToSearch);
  }, [onSearch, textToSearch]);

  return (
    <Paper component="form" className={classes.searchForm} elevation={3}>
      <IconButton
        type="submit"
        className={classes.searchIcon}
        aria-label="search"
        onClick={(e) => e.preventDefault()}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        id="search-field"
        value={search}
        name="search"
        classes={{
          root: classes.inputRoot
        }}
        placeholder="Search for a country..."
        inputProps={{ 'aria-label': 'Search for a country...' }}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Paper>
  );
};

export default SearchField;
