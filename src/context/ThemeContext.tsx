import React, { useEffect, createContext, Context } from 'react';

// Utils
import {
  COLOR_MODE_KEY,
  COLORS,
  INITIAL_COLOR_MODE_CSS_PROP,
} from '../utils/constants';

interface ThemeProps {
  children: Array<React.ReactElement>;
}

interface BackgroundMode {
  colorMode: string | undefined;
}

export interface ThemeContextState extends BackgroundMode {
  setColorMode: (arg: string) => void;
}

export const defaultState: ThemeContextState = {
  colorMode: undefined,
  setColorMode: (colorMode = 'light') => console.log(colorMode),
};

export const ThemeContext: Context<ThemeContextState> = createContext(
  defaultState,
);

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState<
    BackgroundMode['colorMode']
  >(undefined);

  useEffect(() => {
    const root = window.document.documentElement;

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP,
    );

    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue: string) {
      const root = window.document.documentElement;

      localStorage.setItem(COLOR_MODE_KEY, newValue);

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      });

      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
