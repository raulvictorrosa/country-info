import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import React from 'react';
import styled from 'styled-components';

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

export default function Header({ handleThemeChange }: any) {
  const classes = useStyles();

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
              onClick={handleThemeChange}
            >
              <Brightness4Icon />
              <ThemeSwitcherTitle variant="body1" noWrap>
                Dark mode
              </ThemeSwitcherTitle>
            </IconButton>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="change to dark mode"
              color="inherit"
              onClick={handleThemeChange}
            >
              <Brightness4Icon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
