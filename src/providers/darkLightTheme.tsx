/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useMemo, useState } from 'react';

type PaletteType = 'dark' | 'light';

type DarkLightThemeInitialValue = {
  actions: { toggleTheme: () => void };
  state: { themeMode: PaletteType };
};

const darkLightThemeInitialValue = {
  state: { themeMode: 'dark' as PaletteType },
  actions: { toggleTheme: () => {} },
};

const DarkLightTheme = React.createContext<DarkLightThemeInitialValue>(
  darkLightThemeInitialValue
);

const DarkLightThemeProvider: React.FC = ({ children }) => {
  const [themeMode, setThemeMode] = useState<PaletteType>('dark');

  const contextData = useMemo(
    () => ({
      actions: {
        toggleTheme: () =>
          setThemeMode((previousValue) =>
            previousValue === 'light' ? 'dark' : 'light'
          ),
      },
      state: { themeMode },
    }),
    [setThemeMode, themeMode]
  );

  return (
    <DarkLightTheme.Provider value={contextData}>
      {children}
    </DarkLightTheme.Provider>
  );
};

export const useDarkLightTheme = () => useContext(DarkLightTheme);

export default DarkLightThemeProvider;
