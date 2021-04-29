import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme
} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import styled from 'styled-components';
import { useDarkLightTheme } from '../../providers/darkLightTheme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      }
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    }
  })
);

const ThemeSwitcherTitle: any = styled(Typography)`
  padding: 0 5px;
`;

export default function Header() {
  const theme = useTheme();
  const classes = useStyles();
  const { actions } = useDarkLightTheme();

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Where in the world?
          </Typography>

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="change to dark mode"
              color="inherit"
              onClick={() => actions.toggleTheme()}
            >
              {theme.palette.type === 'light' ? (
                <>
                  <Brightness4Icon />
                  <ThemeSwitcherTitle variant="body1" noWrap>
                    Dark mode
                  </ThemeSwitcherTitle>
                </>
              ) : (
                <>
                  <Brightness7Icon />
                  <ThemeSwitcherTitle variant="body1" noWrap>
                    Light mode
                  </ThemeSwitcherTitle>
                </>
              )}
            </IconButton>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="change to dark mode"
              color="inherit"
              onClick={() => actions.toggleTheme()}
            >
              {theme.palette.type === 'light' ? (
                <Brightness4Icon />
              ) : (
                <Brightness7Icon />
              )}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
