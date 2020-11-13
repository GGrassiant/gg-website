// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';

// Components
import ProjectPageComponent from '../Pages/ProjectPageComponent';

describe('<ProjectPageComponent', () => {
  describe('mounts', () => {
    test('mounts correctly', () => {
      const data = {
        contentfulProject: {
          title: 'lolz',
        },
      };
      const { container } = render(<ProjectPageComponent data={data} />);
      expect(container).toBeInTheDocument();
    });
  });
});
