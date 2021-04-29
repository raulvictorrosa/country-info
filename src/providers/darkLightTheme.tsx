import React, { useContext, useMemo, useState } from 'react';

type PaletteType = 'dark' | 'light';

type DarkLightThemeInitialValue = {
  actions: { toggleTheme: () => void };
  state: { themeMode: PaletteType };
};

const darkLightThemeInitialValue = {
  actions: { toggleTheme: () => {} },
  state: { themeMode: 'dark' as PaletteType }
};

const DarkLightTheme = React.createContext<DarkLightThemeInitialValue>(
  darkLightThemeInitialValue
);

const DarkLightThemeProvider: React.FC = ({ children }) => {
  const [themeMode, setThemeMode] = useState<PaletteType>('light');

  const contextData = useMemo(
    () => ({
      actions: {
        toggleTheme: () =>
          setThemeMode((previousValue) =>
            previousValue === 'light' ? 'dark' : 'light'
          )
      },
      state: { themeMode }
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
