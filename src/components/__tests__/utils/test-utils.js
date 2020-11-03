// Libs
import React, { useState } from 'react';
import { render } from '@testing-library/react';

// Utils
import { ThemeContext } from '../../../context/ThemeContext';

const AllTheProviders = ({ children }) => {
  const [colorMode, setColorModeHandler] = useState(undefined);
  const setColorMode = (value) => setColorModeHandler(value);
  return (
    <ThemeContext.Provider
      value={{
        colorMode,
        setColorMode,
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
