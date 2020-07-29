// Libs
import React from 'react';

// Utils
import { ThemeProvider } from './src/context/ThemeContext';

export const wrapRootElement = (props) => {
  const { element } = props;
  return <ThemeProvider>{element}</ThemeProvider>;
};
