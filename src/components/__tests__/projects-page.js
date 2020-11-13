// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';

// Components
import ProjectsPageComponent from '../Pages/ProjectsPageComponent';

describe('<ProjectsPageComponent', () => {
  describe('mounts', () => {
    test('mounts correctly', () => {
      const { container } = render(<ProjectsPageComponent />);
      expect(container).toBeInTheDocument();
    });
  });
});
