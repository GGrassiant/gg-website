// Libs
import React from 'react';

// Utils
import { render } from '../../components/__tests__/utils/test-utils';

// Components
import { ThemeProvider, defaultState } from '../ThemeContext';

describe('<ThemeProvider />', () => {
  describe('Mounts', () => {
    test('mounts correctly', () => {
      const { container } = render(
        <ThemeProvider>
          <div>Coucou</div>
        </ThemeProvider>,
      );

      expect(container).toBeInTheDocument();
    });
  });

  describe('Default State', () => {
    test('calls function', () => {
      expect(defaultState.setColorMode('lolz')).toBe(undefined);
    });
  });
});
