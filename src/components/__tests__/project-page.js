// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';
import { EDGE, EDGE_TWO_IMAGES, EDGE_MULTIPLE_IMAGES } from './project-card';

// Components
import ProjectPageComponent from '../Pages/ProjectPageComponent';

describe('<ProjectPageComponent', () => {
  describe('mounts', () => {
    test('mounts correctly with one image', () => {
      const data = {
        contentfulProject: EDGE.node,
      };

      const { container } = render(<ProjectPageComponent data={data} />);
      expect(container).toBeInTheDocument();
    });

    test('mounts correctly with 2 images', () => {
      const data = {
        contentfulProject: EDGE_TWO_IMAGES.node,
      };

      const { container } = render(<ProjectPageComponent data={data} />);
      expect(container).toBeInTheDocument();
    });

    test('mounts correctly with several images', () => {
      const data = {
        contentfulProject: EDGE_MULTIPLE_IMAGES.node,
      };

      const { container } = render(<ProjectPageComponent data={data} />);
      expect(container).toBeInTheDocument();
    });
  });
});
