// Libs
import React from 'react';

// Utils
import { render } from '../../components/__tests__/utils/test-utils';

// Component
import IndexPage, { getRedirectLanguage } from '../index';

describe('<Index>', () => {
  describe('mounts', () => {
    test('components mounts', () => {
      const { container } = render(<IndexPage />);
      expect(container).toBeInTheDocument();
      expect(container.querySelector('h1')).toBeInTheDocument();
    });
  });

  describe('helpers', () => {
    test('url helpers', () => {
      expect(getRedirectLanguage()).toBe('en');
    });
  });
});
