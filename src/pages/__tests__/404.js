// Libs
import React from 'react';

// Utils
import { render } from '../../components/__tests__/utils/test-utils';

// Components
import NotFoundPage from '../404';

describe('<NotFoundPage />', () => {
  describe('mounts', () => {
    test('mounts', () => {
      const { container } = render(<NotFoundPage />);
      expect(container).toBeInTheDocument();
    });
  });
});
