// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';
import { EDGE } from './project-card';

// Components
import ProjectPageComponent from '../Pages/ProjectPageComponent';

describe('<ProjectPageComponent', () => {
  describe('mounts', () => {
    test('mounts correctly', () => {
      const data = {
        contentfulProject: EDGE.node,
      };

      const { container } = render(<ProjectPageComponent data={data} />);
      expect(container).toBeInTheDocument();
    });
  });
});
