// Libs
import React from 'react';

// Utils
import { ThemeProvider } from './src/context/ThemeContext';

// Components
import Layout from './src/components/layout';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <Layout>{element}</Layout>
  </ThemeProvider>
);
