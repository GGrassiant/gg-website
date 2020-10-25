import React from 'react';

// utils
import { render } from '../../components/__tests__/utils/test-utils';

// Component
import IndexPage from '../index';

describe('<Index>', () => {
  describe('mounts', () => {
    test('components mounts', () => {
      const { container } = render(<IndexPage />);
      expect(container).toBeInTheDocument();
      expect(container.querySelector('h1')).toBeInTheDocument();
    });
  });
});
