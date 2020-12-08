// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';

// Components
import Layout from '../Layout/layout';

describe('<Layout />', () => {
  describe('mounts', () => {
    test('Layout mounts correctly En', () => {
      const { container } = render(
        <Layout locale="en">
          <div>Coucou</div>
        </Layout>,
      );

      expect(container).toBeInTheDocument();
    });
    test('Layout mounts correctly Fr', () => {
      const { container } = render(
        <Layout locale="fr">
          <div>Coucou</div>
        </Layout>,
      );

      expect(container).toBeInTheDocument();
    });
  });
});
