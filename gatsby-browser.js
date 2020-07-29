// Libs
import React from 'react';

// Utils
import { ThemeProvider } from './src/context/ThemeContext';

// TODO: find a way to pass Layout with the locale
// currently not working, locale does not change on location change
export const wrapRootElement = (props) => {
  const { element } = props;
  return <ThemeProvider>{element}</ThemeProvider>;
};
