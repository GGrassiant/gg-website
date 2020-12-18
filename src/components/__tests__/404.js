// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';

// Components
import NotFoundPage from '../../pages/404';

describe('<NotFoundPage>', () => {
  describe('mounts', () => {
    test('component mounts', () => {
      const { container, getByTestId } = render(<NotFoundPage />);
      expect(container).toBeInTheDocument();
      expect(getByTestId('custom-loader')).toBeInTheDocument();
    });
  });
});
