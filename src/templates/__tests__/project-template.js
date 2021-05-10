// Libs
import React from 'react';

// Utils
import { render } from '../../components/__tests__/utils/test-utils';
import { EDGE } from '../../components/__tests__/project-card';

// Components
import Project from '../Project/Project';

describe('<ProjectTemplate />', () => {
  describe('mounts', () => {
    test('mounts correctly', () => {
      const data = {
        contentfulProject: EDGE.node,
      };
      const { container } = render(<Project data={data} />);
      expect(container).toBeInTheDocument();
    });
  });
});
