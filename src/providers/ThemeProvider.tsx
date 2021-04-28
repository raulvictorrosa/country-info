import {
  createMuiTheme,
  Theme,
  ThemeProvider as MuiThemeProvider,
  useTheme
} from '@material-ui/core/styles';
import React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: Theme;
}

export const ThemeDispatchContext = React.createContext<any>(null);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const themeInitialOptions = {
    paletteType: 'dark'
  };

  const [themeOptions, dispatch] = React.useReducer(
    (state: any, action: any) => {
      switch (action.type) {
        case 'changeTheme':
          return {
            ...state,
            paletteType: action.payload
          };
        default:
          throw new Error();
      }
    },
    themeInitialOptions
  );

  const memoizedTheme = React.useMemo(() => {
    return createMuiTheme({
      ...theme,
      palette: {
        type: themeOptions.paletteType
      }
    });
  }, [theme, themeOptions.paletteType]);

  return (
    <MuiThemeProvider theme={memoizedTheme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;

export const useChangeTheme = () => {
  const dispatch = React.useContext(ThemeDispatchContext);
  const theme = useTheme();
  const changeTheme = React.useCallback(
    () =>
      dispatch({
        type: 'changeTheme',
        payload: theme.palette.type === 'light' ? 'dark' : 'light'
      }),
    [theme.palette.type, dispatch]
  );

  return changeTheme;
};
