import React from 'react';

// utils
import { render, screen } from '../../components/__tests__/utils/test-utils';

// Component
import IndexPage from '../index';

describe('<Index>', () => {
  describe('mounts', () => {
    test('components mounts', () => {
      const { container } = render(<IndexPage />);
      expect(container).toBeInTheDocument();
      expect(
        screen.getByText('Guillaume Grassiant - Software developer'),
      ).toBeInTheDocument();
      expect(container.querySelector('h1')).toBeInTheDocument();
      expect(container.querySelector('img')).toBeInTheDocument();
      expect(screen.getByText('Go to page 2')).toBeInTheDocument();
    });
  });
});
