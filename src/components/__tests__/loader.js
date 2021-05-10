// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';

// Components
import Loader from '../Loader';

describe('<Loader>', () => {
  describe('mounts', () => {
    test('component mounts', () => {
      const { container } = render(<Loader />);
      expect(container).toBeInTheDocument();
    });
  });
});
