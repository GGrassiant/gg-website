// Libs
import React, { useState } from 'react';
import { render } from '@testing-library/react';

// Utils
import ThemeContext from '../../../context/ThemeContext';

const AllTheProviders = ({ children }) => {
  const [dark, setDark] = useState(true);
  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark: () => setDark(!dark),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
