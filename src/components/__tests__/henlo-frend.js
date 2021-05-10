// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';

// Component
import HenloFren from '../HenloFren/HenloFren';

describe('<HenloFren>', () => {
  describe('mounts', () => {
    test('component mounts', () => {
      const { container } = render(<HenloFren />);
      expect(container).toBeInTheDocument();
    });
  });
});
