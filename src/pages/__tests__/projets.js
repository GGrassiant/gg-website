// Libs
import React from 'react';

// Utils
import { render } from '../../components/__tests__/utils/test-utils';

// Components
import ProjectsPage from '../projects';

describe('<ProjectsPage />', () => {
  describe('mounts', () => {
    test('mounts', () => {
      const { container } = render(<ProjectsPage />);
      expect(container).toBeInTheDocument();
    });
  });
});
