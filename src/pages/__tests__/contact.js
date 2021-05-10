// Libs
import React from 'react';

// Utils
import { render } from '../../components/__tests__/utils/test-utils';

// Components
import ContactPage from '../contact';

describe('<ContactPage />', () => {
  describe('mounts', () => {
    test('mounts', () => {
      const { container } = render(<ContactPage />);
      expect(container).toBeInTheDocument();
    });
  });
});
