// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';

// Components
import Layout from '../Layout/layout';

describe('<Layout />', () => {
  describe('mounts', () => {
    test('Layout mounts correctly', () => {
      const { container } = render(
        <Layout locale="en">
          <div>Coucou</div>
        </Layout>,
      );

      expect(container).toBeInTheDocument();
    });
  });
});
